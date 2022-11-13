let express = require('express');
let app = express();

console.log('Hello World');

// Serve a string using express server:
// app.get('/', (req, res) => {
//   res.send('Hello Express');
// });

// Serve a HTML file:
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

module.exports = app;
