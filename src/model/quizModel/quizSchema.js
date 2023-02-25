const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    _creatorId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    number_of_questions: {
        type: Number,
        required: true,
    },
    number_of_players: {
        type: Number,
        required: true
    },
    questions: [
        {   
            questionTitle: {
                type: String,
                required: true
            },
            options: [
                {
                    text: {
                        type: String,
                        required: true
                    }, 
                    iR: {
                        type: Boolean,
                        required: true
                    }
                },
            ]
        }
    ]
});

module.exports = quizSchema;