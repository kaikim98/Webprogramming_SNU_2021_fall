const { User, Coin, Asset } = require('./models');

const init = async () => {
    await User.deleteMany();
    await Asset.deleteMany();
    await Coin.deleteMany();
    const coins = ['bitcoin', 'ripple', 'dogecoin', 'ethereum'];

    for (const _coin of coins) {
        const coin = new Coin({name: _coin, isActive: true});
        await coin.save();
    }


    console.log('completed');
}
init();
