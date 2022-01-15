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
  pool.query('SELECT * FROM product LIMIT 100', (err, results) => {
    if (err) {
      console.log(`${err} : unable to retrieve products from the database`);
    } else {
      //response.status(200).json(results.rows)
      callback(null, results.rows);
    }
  })
};

const getOneProduct = ( idObj, callback) => {
  //pool query to inner join two tables product, features
  var joinString = `SELECT * FROM product INNER JOIN features ON product.id = features.product_id WHERE product_id = ${idObj.product_id};`
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
//select all from styles inner join photos on style.id = photos.styleId inner join skus on style.id = skus.styleId where product_id = ${idObj.product_id}
/*
SELECT * from styles join photos on styles.id = photos.style_id join skus on styles.id = skus.style_id where product_id = 3;
*/
var id = idObj.product_id;
console.log(id);
var joinString = `SELECT * from styles join photos on styles.id = photos.style_id join skus on styles.id = skus.style_id where product_id = ${id};`
pool.query(joinString, (err, results) => {
  if (err) {
    console.log(`${err} : unable to retrieve products from the database`);
  } else {
    //response.status(200).json(results.rows)
    //console.log(results.rows);
    callback(null, results.rows);
  }
})

// select t1.name, t2.image_id, t3.path
// from table1 t1
// inner join table2 t2 on t1.person_id = t2.person_id
// inner join table3 t3 on t2.image_id=t3.image_id
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

module.exports = {getAllProducts, getOneProduct, getStyleforOne}