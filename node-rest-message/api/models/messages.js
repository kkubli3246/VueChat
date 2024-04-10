const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: String,
    message: String,
    chatroomId: String
})

module.exports = mongoose.model('Message', messageSchema);