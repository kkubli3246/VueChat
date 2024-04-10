const mongoose = require('mongoose');

const chatroomSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String
})

module.exports = mongoose.model('Chatroom', chatroomSchema);