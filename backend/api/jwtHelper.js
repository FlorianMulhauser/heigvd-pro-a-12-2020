/**
src: https://stackabuse.com/authentication-and-authorization-with-jwts-in-express-js/
Permet de passer cette fonction en paramètre à chaque requete afin de verifier que le token est valid
next -> prochaine fonction à executer avec la requete

C'est un middleware : https://expressjs.com/fr/guide/using-middleware.html
**/
const jwt = require('jsonwebtoken');
var mongoose = require('mongoose'),
User = mongoose.model('User'); // pour les user
module.exports = {
    authenticateJWT: (req, res, next) => {
    // Le seul endroit ou on ne verifie pas le token c'est lorsque on le fournit -> donc on test si c'est ce cas
    // en fonction de la requete
    if(req.originalUrl == "/api/login") {
        next();
        return;
    }


    const token = req.headers.authorization;
    
    
    if (token) {

        jwt.verify(token, "super_secret_string", (err, user) => {
            if (err) {
                console.log(err);
                return res.sendStatus(403);
            }
            // si on arrive la on peut trust le userId dans le token 
            userId = jwt.decode(token).id;
            User.findById(userId,function (err,user) {
            req.user = user;
            next();
        });
        });
    } else {
        res.sendStatus(401);
    }
}
}