const express = require('express');
const path = require('path');
const {verifyIfUserIsLogged} = require('./src/middlewares/authMiddleware');
const authRouter = require("./src/routes/authRoutes/auth_routes");

const app = express();


app.use(express.static(path.join(__dirname, 'public')));

app.use(authRouter);
/* 
    the "*" have the following function
    if the url does not match with any end point, folow this route
*/
app.get("/*", verifyIfUserIsLogged, (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

module.exports = app;