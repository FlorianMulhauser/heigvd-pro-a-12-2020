'use strict';

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken')

const fs   = require('fs');
const RSA_PRIVATE_KEY = fs.readFileSync('jwtRS256.key', 'utf8');

// need to rename function, bad name
exports.loginRoute = function(req, res)  {

    const userId = req.body.userId,
          password = req.body.password;

    if (validateUserIdAndPassword(userId,password)) {
    

        const jwtBearerToken = jwt.sign({}, {key:RSA_PRIVATE_KEY, passphrase:'projet20'},  {
                algorithm: 'RS256',
                expiresIn: 120,
                subject: userId
            });

          // send the JWT back to the user need to add http option and secure
         //httpOnly for : not accessible by javascript code (prevent some sec issue (xss etc..))
         // secure for : browser will only append cookie if made over https connection
         res.json(jwtBearerToken);                         
    	 
    }
    else {
        // send status 401 Unauthorized
        res.sendStatus(401); 
    }
}

function validateUserIdAndPassword(userId,password) {
	return userId == "admin" && password == "admin" ;
}