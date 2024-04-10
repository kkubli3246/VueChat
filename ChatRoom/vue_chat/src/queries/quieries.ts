import Message from "@/types/Message";

const sql = require('mssql');

// constructor(){};

// Configuration for your MSSQL database
const config = {
  user: 'kkubli ',
  password: 'kkubli',
  server: 'localhost', // You can also use an IP address
  database: 'vuechat',
  options: {
    encrypt: false // Use this if you're on Windows Azure
  }
};

//Get Messages
async function getMessages() {
  try {
    // Connect to the database
    await sql.connect(config);
    console.log('Connected to MSSQL database');
    //store value in var result 
    const result = await sql.query`SELECT * FROM dbo.messages`;
    //close connection
    await sql.close();
    return result
  } catch (err) {
    console.error('Error connecting to MSSQL database:', err);
  }
}

//send Messages
// async function sendMessage(message) {
//   try {
//     let newMessage = new Message("", "", 1);

//     // Connect to the database
//     await sql.connect(config);
//     console.log('Connected to MSSQL database');
//     //store value in var result 
//     const result = await sql.query`SELECT * FROM dbo.messages`;
//     //close connection
//     await sql.close();
//     return result
//   } catch (err) {
//     console.error('Error connecting to MSSQL database:', err);
//   }
// }
