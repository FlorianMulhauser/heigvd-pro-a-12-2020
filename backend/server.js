var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  bodyParser = require('body-parser');
  Course = require('./api/models/courseModel') // load model here
  ForumMessage = require('./api/models/forumMessageModel')
// suivi tutoriel : https://www.codementor.io/@olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd

// mongoose instance connection url connection
mongoose.Promise = global.Promise;

//to handle exception
mongoose.set('useNewUrlParser', true); // remove deprecated warning of url string to connect
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);


const uri = "mongodb+srv://test_node_js:mZFhIBjco2JR7xqX@progroupa12-f3mld.gcp.mongodb.net/test?retryWrites=true&w=majority";
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



var routes_course = require('./api/routes/courseRoutes'); //importing route
var routes_forumMessage = require('./api/routes/forumMessageRoutes');
routes_course(app); //register the route
routes_forumMessage(app);

app.listen(port);


console.log('todo list RESTful API server started on: ' + port);

// if wrong route entered 
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});