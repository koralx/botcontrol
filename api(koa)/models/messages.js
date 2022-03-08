const { Schema, model } = require('mongoose');

const schema = new Schema({
    chat_id: {
        type: String,
        maxlength: 32,
        required: true
    },
    user_id: {
        type: String,
        maxlength: 32,
        required: true
    },
    bot_id: {
        type: String,
        maxlength: 32,
        required: true
    },
    sender_is_bot: {
        type: Boolean,
        default: false
    },
    message_content: {
        type: String,
        maxlength: 255,
        required: true
    }
},
{
    timestamps: true
})

module.exports = model('messages', schema)