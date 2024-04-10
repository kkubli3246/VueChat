const express = require('express');
const app = express();

const bodyParser = require('body-parser');
// // const  dboperations = require('./dboperations');
const cors = require('cors');

app.use(cors());

const chatroomRoutes = require('./api/routes/chatrooms');

const messageRoutes = require('./api/routes/messages');

app.use(bodyParser.json());

app.use('/chatrooms', chatroomRoutes);

app.use('/messages', messageRoutes);




module.exports = app;









