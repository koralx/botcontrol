const { Schema, model } = require('mongoose');

const schema = new Schema({
    bot_id: {
        type: String,
        maxlength: 32,
    },
    user_id: {
        type: String,
        maxlength: 32,
    },
    message_content: {
        type: String,
        maxlength: 255,
    }
})
module.exports = model('bot_messsages', schema)