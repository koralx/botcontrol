const { Schema, model } = require('mongoose');

const schema = new Schema({
    user_id: {
        type: String,
        maxlength: 32,
        required: true
    },
    user_name: {
        type: String,
        maxlength: 32,
        required: true
    },
    username: {
        type: String,
        maxlength: 32,
        required: true
    },
    user_messages: {
        ref: 'user_messages',
        type: Schema.Types.ObjectId
    }
})

module.exports = model('users', schema)