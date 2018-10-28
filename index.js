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

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'secretpassword',
    port: 9000,
})

client.connect()
  
client.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    client.end()
})