const { Schema, model } = require('mongoose');

const bot = new Schema({
    token: {
        type: String,
        maxlength: 46,
        required: true,
        unique: true
    },
    bot_id: {
        type: String,
        maxlength: 46,
        required: true
    },
    status_launch: {
        type: Boolean,
        default: false
    },
    start_message: {
        type: String,
        default: 'Hello'
    },
    commands: [{ command: String, msg_type: String, data: String}]
})

module.exports = model('bots', bot)