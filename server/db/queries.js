const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'daryak',
  host: 'ec2-18-208-149-20.compute-1.amazonaws.com',
  database: 'products_api',
  password: 'spelling5',
  port: 5432,
});

//Client
const client = new Client({
  user: 'daryak',
  host: 'ec2-18-208-149-20.compute-1.amazonaws.com',
  database: 'products_api',
  password: 'spelling5',
  port: 5432,
})
client.connect();

// client.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   client.end()
// })
/*
local DB:
 user: 'daryakutovaya',
  host: 'localhost',
  database: 'products_api',
  password: 'password',
*/

//ec2-18-208-149-20.compute-1.amazonaws.com
//user: postgres
//database: 'products_api',
//password: spelling9



const getAllProducts = (callback) => {
  pool.query('SELECT * FROM product LIMIT 5', (err, results) => {
    if (err) {
      console.log(`${err} : unable to retrieve products from the database`);
    } else {
      console.log('receiving data from remote db:');
      //response.status(200).json(results.rows)
      callback(null, results.rows);
    }
  })
};

const getOneProduct = (idObj, callback) => {
  //pool query to inner join two tables product, features
  var joinString = `SELECT * FROM product INNER JOIN features ON product.id = features.product_id WHERE product_id = ${idObj.product_id};`
  pool.query(joinString, (err, results) => {
    if (err) {
      console.log(`${err} : unable to retrieve products from the database`);
    } else {
      console.log('receiving data from remote db:');
      callback(null, results.rows);
    }
  })
};

const getStyleforOne = (idObj, callback) => {
  var id = idObj.product_id;
  //console.log(idObj);
  var joinString = `SELECT * FROM styles
inner join photos on styles.style_id = photos.style_id
inner join skus on styles.style_id = skus.style_id
where product_id= ${id};`
  pool.query(joinString, (err, results) => {
    if (err || results.rows.length === 0) {
      console.log(`${err} : unable to retrieve products from the database, check product_id`);
    } else {
     // console.log(results.rows);
      console.log('receiving data from remote db:');
      callback(null, results.rows);
    }
  });
};

const getRelated = (idObj, callback) => {
  var id = idObj.product_id;
  //console.log(id);
  var joinString = `SELECT * FROM related
where current_product_id= ${id};`
  pool.query(joinString, (err, results) => {
    if (err || results.rows.length === 0) {
      console.log(`${err} : unable to retrieve products from the database, check product_id`);
    } else {
      //console.log(results.rows);
      console.log('receiving data from remote db:');
      callback(null, results.rows);
    }
  });
}


module.exports = { getAllProducts, getOneProduct, getStyleforOne, getRelated }