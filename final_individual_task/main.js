const express = require('express');
const {body, validationResult} = require('express-validator');
const crypto = require('crypto');
const { User, Coin, Asset, keys } = require('./models');
const {encryptPassword, setAuth}  = require('./utils')
const axios = require("axios");
const app = express();
const port = 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/', async (req, res) => {
    res.send('hello');
})

app.get('/coins', async(req, res) =>{
    const coins = await Coin.find({isActive: true});
    res.send(coins)
})

app.post('/register',
    body('email').isEmail(),
    body('name').isLength({min:4, max:12}),
    body('password').isLength({min:8, max:16}),
    async(req, res) =>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array() });
    }

    const {name, email, password} = req.body;
    const encryptedPassword = encryptPassword(password);
    let user = null;
    try{
        const user = new User({name: name, email: email, password: encryptedPassword});
        await user.save();
    } catch (err) {
        return res.send({error:'email is duplicated'}).status(400)
    }


    // 달러 주기
    const usdAsset = new Asset({name: 'USD', balance: 10000, user});
    await usdAsset.save();

    const coins = await Coin.find({isActive:true});
    for(const coin of coins) {
        const asset = new Asset({name:coin.name, balance:0});
        await asset.save();
    }

    res.send({});
})

app.post('/login', async(req, res) => {
    const {email, password} = req.body;
    const encryptedPassword = encryptPassword(password);
    const user = await User.findOne({email, password: encryptedPassword});

    if (user === null) {
        return res.sendStatus(404);
    }
    user.key = encryptPassword(crypto.randomBytes(20));
    await user.save();
    const userKey = new keys({key:user.key});
    await userKey.save();

    res.send({key:user.key});
});

app.get('/balance', setAuth, async (req, res) => {
    const user = req.user;

    const assets = await Asset.find({user});
    res.send(assets);
})



app.get('/coins/:coinName', async(req, res) =>{
    const coinId = req.params['coinName'];
    const url = 'https://api.coingecko.com/api/v3/simple/price?ids=' + coinId +'&vs_currencies=usd';
    const apiRes = await axios.get(url);
    const coinPrice = apiRes.data[`${coinId}`]['usd'];
    res.send({price: coinPrice});
})

app.post('/coins/:coinName/buy', setAuth, async(req, res) => {
    const user = req.user;
    const coinId = req.params['coinName'];
    const asset = await Asset.find({user});
    const {quantity} = req.body;
    const quantitySplit  = String(quantity).split('.');
    const usdBalance = parseInt(asset[0].balance);
    if (quantitySplit[1].length < 5){
        const url = 'https://api.coingecko.com/api/v3/simple/price?ids=' + coinId +'&vs_currencies=usd';
        const apiRes = await axios.get(url);
        const coinPrice = parseInt(apiRes.data[`${coinId}`]['usd']);
        const totalCost = coinPrice * quantity;
        if (totalCost > usdBalance){
            return res.send({error:'Not enough money'}).status(400);
        }else{
            const changedUsd = usdBalance - totalCost;
            await asset[0].update({balance:changedUsd})
            if (coinId === 'bitcoin'){
                const beforeAsset = asset[1].balance;
                const newAsset = beforeAsset + quantity;
                await asset[1].update({balance: newAsset});
                res.send({price: totalCost, quantity: quantity});
            } else if(coinId === 'ripple'){
                const beforeAsset = asset[2].balance;
                const newAsset = beforeAsset + quantity;
                await asset[2].update({balance: newAsset});
                res.send({price: totalCost, quantity: quantity});
            } else if(coinId === 'dogecoin'){
                const beforeAsset = asset[3].balance;
                const newAsset = beforeAsset + quantity;
                await asset[3].update({balance: newAsset});
                res.send({price: totalCost, quantity: quantity});
            } else if(coinId === 'ethereum'){
                const beforeAsset = asset[4].balance;
                const newAsset = beforeAsset + quantity;
                await asset[4].update({balance: newAsset});
                res.send({price: totalCost, quantity: quantity});
            }
        }
    } else {
        return res.send({error:'Decimal number of quantity is over 4'}).status(400);
    }

})

app.post('/coins/:coinName/sell', setAuth, async (req, res) => {
    const user = req.user;
    const coinId = req.params['coinName'];
    const asset = await Asset.find({user});
    const {quantity} = req.body;
    const quantitySplit  = String(quantity).split('.');
    const usdBalance = parseInt(asset[0].balance);
    const url = 'https://api.coingecko.com/api/v3/simple/price?ids=' + coinId +'&vs_currencies=usd';
    const apiRes = await axios.get(url);
    const coinPrice = parseInt(apiRes.data[`${coinId}`]['usd']);
    if (quantitySplit[1].length < 5){
        if (coinId === 'bitcoin'){
            const beforeAsset = parseInt(asset[1].balance);
            if (beforeAsset < quantity) {
                return res.send({error:'Not enough bitcoin'}).status(400);
            }else{
                const totalCost = coinPrice * quantity;
                const newAsset = beforeAsset - quantity;
                await asset[1].update({balance:newAsset})
                const newUsd = usdBalance + totalCost;
                await asset[0].update({balance: newUsd});

                res.send({price: totalCost, quantity: quantity})
            }
        } else if(coinId === 'ripple'){
            const beforeAsset = parseInt(asset[2].balance);
            if (beforeAsset < quantity) {
                return res.send({error:'Not enough bitcoin'}).status(400);
            }else{
                const totalCost = coinPrice * quantity;
                const newAsset = beforeAsset - quantity;
                await asset[2].update({balance:newAsset})
                const newUsd = usdBalance + totalCost;
                await asset[0].update({balance: newUsd});
                res.send({price: totalCost, quantity: quantity})
            }
        } else if(coinId === 'dogecoin'){
            const beforeAsset = parseInt(asset[3].balance);
            if (beforeAsset < quantity) {
                return res.send({error:'Not enough bitcoin'}).status(400);
            }else{
                const totalCost = coinPrice * quantity;
                const newAsset = beforeAsset - quantity;
                await asset[3].update({balance:newAsset})
                const newUsd = usdBalance + totalCost;
                await asset[0].update({balance: newUsd});
                res.send({price: totalCost, quantity: quantity})
            }
        } else if(coinId === 'ethereum'){
            const beforeAsset = parseInt(asset[4].balance);
            if (beforeAsset < quantity) {
                return res.send({error:'Not enough bitcoin'}).status(400);
            }else{
                const totalCost = coinPrice * quantity;
                const newAsset = beforeAsset - quantity;
                await asset[4].update({balance:newAsset})
                const newUsd = usdBalance + totalCost;
                await asset[0].update({balance: newUsd});
                res.send({price: totalCost, quantity: quantity})
            }
        }
        }
    else {
        return res.send({error:'Decimal number of quantity is over 4'}).status(400);
    }

})

app.listen(port, () =>{
    console.log(`listening at port : ${port}...`)
})