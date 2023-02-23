const express = require('express');
const path = require('path');

const app = express();


app.use(express.static(path.join(__dirname, '..', 'public')))
/* 
    the "*" have the following function
    if the url does not match with any end point, folow this route
*/
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'API', 'public', 'index.html'))
});

module.exports = app;