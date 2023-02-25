const { default: mongoose } = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    quizzesCreated: {
        type: [Number],
        required: false
    },
    pointsMade: {
        type: Number,
        required: false,
    },
    rightQuestions: {
        type: Number,
        required: false,
    },
    wrongQuestions: {
        type: Number,
        required: false,
    },
});

module.exports = mongoose.model('User', userSchema);