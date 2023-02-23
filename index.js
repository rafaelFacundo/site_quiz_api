require('dotenv').config();
const https = require('http');
const app = require('./app');

//taking the port number from dotenv file
const port = process.env.PORT;

//this is not permant, I will change http for https
const Server = https.createServer(app);

Server.listen(port, () => {
    console.log("server is on...let's goo");
})