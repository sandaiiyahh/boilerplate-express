let express = require('express');
let app = express();

console.log('Hello World');

// Serve a string using express server:
// app.get('/', (req, res) => {
//   res.send('Hello Express');
// });

// Serve CSS file to /public:
app.use('/public', express.static(__dirname + '/public'));

// Serve a HTML file:
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/json', (req, res) => {
  res.json({ message: 'Hello json' });
});

module.exports = app;
