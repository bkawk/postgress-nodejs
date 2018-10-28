const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'secretpassword',
  port: 9000,
})

pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    pool.end()
  })