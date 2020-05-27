'use strict';
var crypto = require('crypto'); 
var mongoose = require('mongoose'),
User = mongoose.model('User'); // pour les user

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken')

const fs   = require('fs');

const config = require('../../config');



// need to rename function, bad name
exports.loginRoute = function(req, res)  {

    const userId = req.body.userId,
          password = req.body.password;

    User.findOne({name:userId}, function(err,user) {

		if(err || user == null) {
			res.sendStatus(401);
		} else { 
				console.log(user);
				console.log(hashPassword(password,user.password_salt));
		if(user.password_hash == hashPassword(password,user.password_salt)) {
			console.log("Successfull connection from ",user.name);

			
            // on stocke l'id de l'utilisateur dans le token, pour l'utiliser pour verifier les droits
            const id = user._id;
            const jwtBearerToken = jwt.sign({id},config.secret,{expiresIn:config.token_expires});
             // send the JWT back to the user need to add http option and secure
         //httpOnly for : not accessible by javascript code (prevent some sec issue (xss etc..))
         // secure for : browser will only append cookie if made over https connection

            const resp = {jwtBearerToken,user};

             res.json(JSON.stringify(resp));
		}  else {
        // send status 401 Unauthorized
        res.sendStatus(401); 
    }
}
	});
}

function hashPassword(password,salt) {
  //return crypto.pbkdf2Sync(password,new Buffer.from(salt, 'base64').toString('utf8'),100000,64,'sha512').toString('hex');
  return crypto.pbkdf2Sync(password,salt,100000,64,'sha512').toString('hex');

}
