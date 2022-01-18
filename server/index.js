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
  // res.json({ info: 'Node.js, Express, and Postgres API' })
  db.getAllProducts((err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      console.log('Server is receiving data:');
      //console.log(data);
      res.status(201).send(data);
    }
  });

});

//GET ONE PRODUCT
app.get('/products/product', (req, res) => {
  var idObj = req.query;
  //console.log(idObj);
  db.getOneProduct(idObj, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      // console.log('Server is receiving data for one product:');
      //invoke formatting function
      console.log(data)
      var formattedProduct = helper.formatOne(data);
      res.status(201).send(formattedProduct);
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
      // console.log('Server is receiving styles data for one product:');
      //console.log(data);
      //invoke formatting function
      res.send(helper.formatStyles(data));
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
      // console.log('Server is receiving realted data for one product:');
      //console.log(data);
      //invoke formatting function
      res.status(201).send(helper.formatRelated(data));
    }
  });
});



app.listen(PORT, () => {
  console.log('Listening at http://localhost:' + PORT);
});

//module.exports = app;