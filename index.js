require('dotenv').config();
const fileSystem = require('fs');
const https = require('https');
const app = require('./app');

//taking the port number from dotenv file
const port = process.env.PORT;

//this is not permant, I will change http for https
const Server = https.createServer({
    cert: fileSystem.readFileSync('cert.pem'),
    key: fileSystem.readFileSync('key.pem')
}, app);

Server.listen(port, () => {
    console.log("server is on...let's goo");
})