const { Schema, model } = require('mongoose');

const schema = new Schema({
    chat_id: {
        type: String,
        maxlength: 32,
        required: true
    },
    token: {
        type: String,
        maxlength: 32,
        required: true
    }
})
module.exports = model('chats', schema)