const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

// Connect to Database
mongoose.connect(config.database);
mongoose.connection.on('connected', () => {
  console.log(`Connected to Database ${config.database}`);
});
mongoose.connection.on('error', () => {
  console.log(`Error connecting to Database ${config.database}`);
});

const app = express();

// Users Routes file
const users = require('./routes/users');

const port = 3000;

// Middlewares================
// Angular static public folder for production files as '/'
// / <- /public/index.html
app.use(express.static(path.join(__dirname, 'public')));

// Enable CORS - Prevents outside access to back-end
app.use(cors());

// Body Parser
app.use(bodyParser.json());

// Passport
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);


// Users Routes
app.use('/users', users);

// Routes ====================
// '/' Should be caught by static routing from above
app.get('/', (req, res) => {
  res.send('Invalid Route');
});

// Catch-all =================
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

// Start Server ==============
app.listen(port, () => {
  // console.log(`Server listening on ${port}`);
});
