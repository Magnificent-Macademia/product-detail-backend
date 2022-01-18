const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
const db = require('./db/queries.js')
const express = require('express');
const helper = require('./helpers.js')
const app = express();

const PORT = 3000;

// const staticPath = path.join(__dirname, '..', '/client/dist/');

// Middleware
// app.use(express.static(staticPath));
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
      //console.log(data);
      res.status(200).send(data);
    }
  });

});

//GET ONE PRODUCT
app.get('/products/product', (req, res) => {
  var idObj = req.query;
  db.getOneProduct(idObj, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      console.log(data)
      var formattedProduct = helper.formatOne(data);
      res.status(200).send(formattedProduct);
    }
  });
});

//GET STYLES FOR ONE /products/:product_id/styles

app.get('/products/styles', (req, res) => {
  var idObj = req.query;
  //console.log(idObj);
  db.getStyleforOne(idObj, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(helper.formatStyles(data));
    }
  });
});

//GET RELATED PRODUCTS FOR ONE
app.get('/products/related', (req, res) => {
  var idObj = req.query
  console.log(idObj)
  db.getRelated(idObj, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(helper.formatRelated(data));
    }
  });
});



app.listen(PORT, () => {
  console.log('Listening at http://localhost:' + PORT);
});

//module.exports = app;