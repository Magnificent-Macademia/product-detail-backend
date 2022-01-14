const { Pool, Client } = require('pg');
const connectionString = 'postgresql://dbuser:secretpassword@database.server.com:3211/mydb'
const pool = new Pool({
  connectionString,
});


//getAllProducts
//getOneProduct
//getStyles
//getRelated
//getPhoto
//getFeatures
//getSkus

const getAllProducts  = (callback) => {
  var selectString = 'SELECT * FROM products';
  pool.query(selectString, (err, results) => {
    if (err) {
      console.log(`${err} : unable to retrieve products from the database`);
    } else {
      // console.log('Results from the database:');
      // console.log(results);
      callback(null, results);
      //pool.end()
    }
  });
}

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})
const client = new Client({
  connectionString,
})
client.connect()

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})


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

module.exports = {getAllProducts};