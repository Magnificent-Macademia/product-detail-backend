const path = require('path');

const express = require('express');

const app = express();

//const controllers = require('./controllers/controllers');

const PORT = 3000;

// const staticPath = path.join(__dirname, '..', '/client/dist/');

// Middleware
// app.use(express.static(staticPath));
app.use(express.json());
app.use(compression());

// PRODUCTS API

// GET ALL PRODUCTS
app.get('/products', );

app.get('/', function (req, res) {
  res.send('GET request to the homepage')
})




app.listen(port, () => {
  console.log('Listening at http://localhost:' + PORT);
});
