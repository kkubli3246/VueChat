let config = require('./dbconfig');
const sql = require('mssql');

//Get All Chatrooms
async function getChatrooms(){
    try{
        let pool = await sql.connect(config);
        let chatrooms = await pool.request().query("SELECT * from chatrooms");
        return chatrooms.recordsets;
    }
    catch(error){
        console.log(error);
    }
}

//Update ChatRoom
async function updateChatroom(input){
    try{
        let pool = await sql.connect(config);
        let chatroom = await pool.request().query(`UPDATE chatrooms SET name = '${input.name}' WHERE id = '${input.id}'`);
        return chatroom.recordsets;
    }
    catch(error){
        console.log(error);
    }
}

//Post Chatroom
async function addChatroom(chatroom){
    try{        
        let pool = await sql.connect(config);
        let insterChatroom = await pool.request()
            .query(`INSERT INTO chatrooms (id, name)
                    Values(${chatroom.id}, '${chatroom.name}')`);
        return insterChatroom.recordset;
    }
    catch(err){
        console.log(err);
    }
}

//Delete Chatroom
async function deleteChatroom(chatroom){
    try{        
        let pool = await sql.connect(config);
        let insterChatroom = await pool.request()
            .query(`DELETE from chatrooms WHERE id = ${chatroom.id}`);
        return insterChatroom.recordset;
    }
    catch(err){
        console.log(err);
    }
}




//Get All Messages
async function getChatroomMessages(id){
    try{
        let pool = await sql.connect(config);
        let messages = await pool.request().query(`SELECT * from messages Where chatroomID = ${id}`);
        return messages.recordsets;
    }
    catch(error){
        console.log(error);
    }
}


//Post Message to Chatroom
async function addMessage(message){
    try{        
        let pool = await sql.connect(config);
        let instertMessage = await pool.request()
            .query(`INSERT INTO messages (username, message, chatroomID)
                    Values('${message.username}', '${message.message}', ${message.chatroomID})`);
        return instertMessage.recordset;
    }
    catch(err){
        console.log(err);
    }
}

//Delete Message
async function deleteMessage(message){
    try{        
        let pool = await sql.connect(config);
        let deleteMessage = await pool.request()
            .query(`DELETE from messages WHERE id = ${message.id}`);
        return deleteMessage.recordset;
    }
    catch(err){
        console.log(err);
    }
}

//Update Message
async function updateMessage(message){
    try{        
        let pool = await sql.connect(config);
        let updateMessage = await pool.request()
            .query(`UPDATE messages SET message = '${message.message}' WHERE id = '${message.id}'`);
        return updateMessage.recordset;
    }
    catch(err){
        console.log(err);
    }
}

module.exports = {
    //ChatRoom CRUD Options
    getChatrooms : getChatrooms,
    addChatroom: addChatroom,
    updateChatroom: updateChatroom,
    deleteChatroom: deleteChatroom,

    //Message CRUD Options
    addMessage: addMessage,    
    getChatroomMessages : getChatroomMessages,
    deleteMessage: deleteMessage,
    updateMessage: updateMessage
}