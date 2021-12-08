const mongoose = require('mongoose');
const User = require('./User')
const Coin = require('./Coin')
const Asset = require('./Asset')
const keys = require('./keys')
const mongoURL = 'mongodb+srv://test0:test0@testmongo.7yito.mongodb.net/CoinServer?retryWrites=true&w=majority';
mongoose.connect(mongoURL);

module.exports = {
    User,
    Coin,
    Asset,
    keys,

}