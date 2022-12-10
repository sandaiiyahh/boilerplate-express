require('dotenv').config();
let express = require('express');
let app = express();

// Serve a string using express server:
// app.get('/', (req, res) => {
//   res.send('Hello Express');
// });

app.use((req, res, next) => {
  console.log(req.method + ' ' + req.path + ' - ' + req.ip);
  next();
});

// Serve CSS file to /public:
app.use('/public', express.static(__dirname + '/public'));

// Serve a HTML file:
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// GET request to /json for JSON object message
app.get('/json', (req, res) => {
  let response = 'Hello json';
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    response = response.toUpperCase();
  }
  res.json({ message: response });
});

// Chaining middleware using final handler
app.get(
  '/now',
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.send({ time: req.time });
  }
);

module.exports = app;
