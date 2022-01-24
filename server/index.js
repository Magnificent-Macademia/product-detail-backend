const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
const db = require('./db/queries.js')
const express = require('express');
const helper = require('./helpers.js');
require('newrelic');
const app = express();

const PORT = 3000;

const staticPath = path.join(__dirname, 'public');
app.use(express.static(staticPath));
app.use(express.json());

// PRODUCTS API

// GET ALL PRODUCTS
app.get('/products', (req, res) => {
  db.getAllProducts((err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      console.log('Server is receiving data:');
      res.status(200).send(data);
    }
  });

});

//GET ONE PRODUCT /products/:product_id/product
app.get('/products/product', (req, res) => {
  var idObj = req.query;
  db.getOneProduct(idObj, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      console.log('Server is receiving data:');
      var formattedProduct = helper.formatOne(data);
      res.status(200).send(formattedProduct);
    }
  });
});


//GET STYLES FOR ONE /products/:product_id/styles
app.get('/products/styles', (req, res) => {
  var idObj = req.query;
  db.getStyleforOne(idObj, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      var formattedStyle = helper.formatStyles(data)
      res.status(200).send(formattedStyle);
    }
  });
});

//GET RELATED PRODUCTS FOR ONE /products/:product_id/related
app.get('/products/related', (req, res) => {
  var idObj = req.query
  console.log(idObj)
  db.getRelated(idObj, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      var formattedRelated = helper.formatRelated(data)
      res.status(200).send(formattedRelated);
    }
  });
});



app.listen(PORT, () => {
  console.log('Listening at http://localhost:' + PORT);
});

