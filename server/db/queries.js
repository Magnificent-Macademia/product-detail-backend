// const { Pool, Client } = require('pg');
// const connectionString = 'postgresql://dbuser:secretpassword@database.server.com:3211/mydb'
// const pool = new Pool({
//   connectionString,
// });

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'daryakutovaya',
  host: 'localhost',
  database: 'products_api',
  password: 'password',
  port: 5432,
})



//getAllProducts
//getOneProduct
//getStyles
//getRelated
//getPhoto
//getFeatures
//getSkus


const getAllProducts = (callback) => {
  pool.query('SELECT * FROM product LIMIT 5', (err, results) => {
    if (err) {
      console.log(`${err} : unable to retrieve products from the database`);
    } else {
      //response.status(200).json(results.rows)
      callback(null, results.rows);
    }
  })
};

const getOneProduct = (idObj, callback) => {
  //pool query to inner join two tables product, features
  var joinString = `SELECT * FROM product INNER JOIN features ON product.id = features.product_id WHERE product_id = ${idObj.product_id};`
  //console.log(idObj);
  pool.query(joinString, (err, results) => {
    if (err) {
      console.log(`${err} : unable to retrieve products from the database`);
    } else {
      //response.status(200).json(results.rows)
      callback(null, results.rows);
    }
  })
};

const getStyleforOne = (idObj, callback) => {
  var id = idObj.product_id;
  console.log(idObj);
  var joinString = `SELECT * FROM styles
inner join photos on styles.style_id = photos.style_id
inner join skus on styles.style_id = skus.style_id
where product_id= ${id};`
  pool.query(joinString, (err, results) => {
    if (err || results.rows.length === 0) {
      console.log(`${err} : unable to retrieve products from the database, check product_id`);
    } else {
      //response.status(200).json(results.rows)
      console.log(results.rows);
      callback(null, results.rows);
    }
  });
};

const getRelated = (idObj, callback) => {
  var id = idObj.product_id;
  console.log(id);
  var joinString = `SELECT * FROM related
where current_product_id= ${id};`
  pool.query(joinString, (err, results) => {
    if (err) {
      console.log(`${err} : unable to retrieve products from the database`);
    } else {
      //response.status(200).json(results.rows)
      //console.log(results.rows);
      callback(null, results.rows);
    }
  });
}


// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })
// const client = new Client({
//   connectionString,
// })
// client.connect()

// client.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   client.end()
// })


// const { Pool, Client } = require('pg')
// const pool = new Pool({
//   user: 'dbuser',
//   host: 'database.server.com',
//   database: 'mydb',
//   password: 'secretpassword',
//   port: 3211,
// })
// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })
// const client = new Client({
//   user: 'dbuser',
//   host: 'database.server.com',
//   database: 'mydb',
//   password: 'secretpassword',
//   port: 3211,
// })
// client.connect()
// client.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   client.end()
// })

module.exports = { getAllProducts, getOneProduct, getStyleforOne, getRelated }