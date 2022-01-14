const path = require('path');
//import db from index.js
const express = require('express');

const app = express();

const PORT = 3000;

// const staticPath = path.join(__dirname, '..', '/client/dist/');

// Middleware
// app.use(express.static(staticPath));
app.use(express.json());

// PRODUCTS API

//query to get all products
//query to get 1 product, required query param product_id: ex.63609
//query to get product styles, required query param product_id: ex.63609
//query to get related products, required query param product_id: ex.63609
//query to get product photo, required query param style_id: ex.12345
// query to get product features, required query param product_id: ex.63609
// query to get product style skus, required query param style_id: ex.12345

// EXAMPLE:
//to get pictute of item ID 63609 with style 12345:
//call get styles with where product id is 63609, select all from styles where style_id is the query,
//query photo table with that style_id to get thumbnail or regular photo

// GET ALL PRODUCTS
app.get('/products', (req, res) => {
  db.getAllProducts((err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      // console.log('Server is receiving data:');
      // console.log(data);
      res.send(data);
    }
  });
});

//GET ONE PRODUCT
app.get('/products/get', (req, res) => {
  var idObj = req.query;
  db.getOneProduct(idObj, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      // console.log('Server is receiving data for one product:');
      // console.log(data);
      res.send(data);
    }
  });
});


// app.get('/', function (req, res) {
//   res.send('GET request to the homepage')
// })


app.listen(port, () => {
  console.log('Listening at http://localhost:' + PORT);
});
