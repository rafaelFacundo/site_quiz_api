const User = require('./userSchema');

async function insertNewUser(user) {
    try {
        User.updateOne({
            userName: user.userName,
            email: user.email,
            password: user.password,
            quizzesCreated: 0,
            pointsMade: 0,
            rightQuestions: 0,
            wrongQuestions: 0,
        });
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};

module.exports = {
    insertNewUser,
}