const { Pool, Client} = require('pg')
const userLogin = require('../loginInfo.js');

// to use remote db
// const pool = new Pool({
//   user: userLogin.userLoginRemote.user,
//   host: userLogin.userLoginRemote.host,
//   database: userLogin.userLoginRemote.database,
//   password: userLogin.userLoginRemote.password,
//   port: 5432,
// });

// to use local db
const pool = new Pool({
  user: userLogin.userLoginLocal.user,
  host: userLogin.userLoginLocal.host,
  database: userLogin.userLoginLocal.database,
  password: userLogin.userLoginLocal.password,
  port: 5432,
});

// const client = new Client({
//   user: userLogin.userLoginLocal.user,
//   host: userLogin.userLoginLocal.host,
//   database: userLogin.userLoginLocal.database,
//   password: userLogin.userLoginLocal.password,
//   port: 5432,
// });

// client.connect();

const getAllProducts = (callback) => {
  pool.query('SELECT * FROM product LIMIT 5', (err, results) => {
    if (err) {
      console.log(`${err} : unable to retrieve products from the database`);
    } else {
      console.log('receiving data from remote db:');
      callback(null, results.rows);
    }
  })
};

const getOneProduct = (idObj, callback) => {
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

//aggregate queeries for formatting
const getStyleforOne = (idObj, callback) => {
  var id = idObj.product_id;
  var joinString = `SELECT * FROM styles
inner join photos on styles.style_id = photos.style_id
inner join skus on styles.style_id = skus.style_id
where product_id= ${id};`
  pool.query(joinString, (err, results) => {
    if (err || results.rows.length === 0) {
      console.log(`${err} : unable to retrieve products from the database, check product_id`);
    } else {
      console.log('receiving data from remote db:');
      callback(null, results.rows);
    }
  });
};

const getRelated = (idObj, callback) => {
  var id = idObj.product_id;
  var joinString = `SELECT * FROM related
where current_product_id= ${id};`
  pool.query(joinString, (err, results) => {
    if (err || results.rows.length === 0) {
      console.log(`${err} : unable to retrieve products from the database, check product_id`);
    } else {
      console.log('receiving data from remote db:');
      callback(null, results.rows);
    }
  });
}


module.exports = { getAllProducts, getOneProduct, getStyleforOne, getRelated }