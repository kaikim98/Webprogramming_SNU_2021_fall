const mongoose = require('mongoose')
const { Schema} = mongoose;

const keySchema = new Schema({
    key : String,
    User: {type: Schema.Types.ObjectId, ref:'User'}
});


keySchema.index({key:1, user:1}, {unique: true});
const keys = mongoose.model('keys', keySchema);

module.exports = keys;