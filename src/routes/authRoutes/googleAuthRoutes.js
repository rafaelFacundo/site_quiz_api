const express = require('express');
const googleRouter = express.Router();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

function verifyCallback(acessToken, refreshToken, profile, done) {
    console.log('google profile');
    console.log(profile);

    done(null, profile)
}

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "https://localhost:8080/auth/google/callback"
}, verifyCallback))

googleRouter.get('/google/', passport.authenticate('google', {
    scope: ['email']
}));

googleRouter.get('/google/callback', passport.authenticate('google', {
    failureRedirect: 'https:localhost:8080/failure',
    successRedirect: 'https:localhost:8080/',
    session: false,
}), (req, res) => {
    console.log('google is calling us')
});

module.exports = googleRouter;