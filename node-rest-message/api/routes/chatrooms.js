const dboperations = require('../../dboperations');
const express = require('express');
const router = express.Router();

//Chatroom CRUD Options
{
//Get All Chatrooms
router.get('/',(req,res,next) =>{    
    dboperations.getChatrooms().then(result => {
        console.log(result);
        res.json(result[0]);
    })
})

//Make new Chatroom
router.post('/',(req,res,next) =>{    
    let chatroom = {... req.body}
    dboperations.addChatroom(chatroom).then(result => {
        console.log(result);
        res.status(201).json(result);
    })
})

//Delete Chatroom
router.delete('/',(req,res,next) =>{    
    let chatroom = {... req.body}
    dboperations.deleteChatroom(chatroom).then(result => {
        console.log(result);
        res.status(201).json(result);
    })
})

//Update Chat Room
router.put('/',(req,res,next) =>{    
    let chatroom = {... req.body}
    dboperations.updateChatroom(chatroom).then(result => {
        console.log(result);
        res.status(201).json(result);
    })
})
}

//Messages CRUD Options
{
//Get Messages From Chatroom ID
router.get('/:chatroomId',(req,res,next) =>{
    dboperations.getChatroomMessages(req.params.chatroomId).then(result => {
        console.log(result);
        res.json(result[0]);
    })
})


//Create message
router.post('/:chatroomId',(req,res,next) =>{
    let message = {... req.body}
    dboperations.addMessage(message).then(result => {
        res.status(201).json(result);
    })
})
}


module.exports = router;