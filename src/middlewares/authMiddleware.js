/* 
    here we are doing some "middleware" to verify if the user is logged
    if they are not logged, then we will return status 401 and go to the redirect
*/
function verifyIfUserIsLogged(req, res, next) {
    const isUserLogged = true //still missing this parte
    //if not logged, it will enter on the if condition
    if (!isUserLogged) {
        return res.status(401).json({
            error: "You must log in!",
        });
    }
    //if logged it will just follow the flow of the code and go to the next function
    next();
};

module.exports = {
    verifyIfUserIsLogged,
}