var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  bodyParser = require('body-parser');
  Course = require('./api/models/courseModel') // load model here
  ForumMessage = require('./api/models/forumMessageModel')
  User = require('./api/models/userModel')
  chatMessage = require('./api/models/chatMessageModel')
  jwtHelper = require('./api/jwtHelper')
  config = require('./config')
// suivi tutoriel : https://www.codementor.io/@olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd

// mongoose instance connection url connection
mongoose.Promise = global.Promise;

//to handle exception
mongoose.set('useNewUrlParser', true); // remove deprecated warning of url string to connect
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);


const uri = config.url_db;
const connectDB = async () => {
  await mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log('Database connected');
};

connectDB();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// application level middleware
app.use(jwtHelper.authenticateJWT);


var routes_course = require('./api/routes/courseRoutes'); //importing route
var routes_forumMessage = require('./api/routes/forumMessageRoutes');
var routes_user = require('./api/routes/userRoutes');
var routes_login = require('./api/routes/loginRoutes');
var routes_chatMessage = require('./api/routes/chatMessageRoutes');
var routes_file = require('./api/routes/fileRoutes');
routes_course(app); //register the route
routes_forumMessage(app);
routes_user(app);
routes_login(app);
routes_chatMessage(app);
routes_file(app);

app.listen(port);


console.log('API server on listening on ' + port);

// if wrong route entered 
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});



