const express = require('express');
const googleRouter = require('./googleAuthRoutes');


const authRouter = express.Router();
authRouter.use('/auth', googleRouter);

module.exports = authRouter;