const { Client } = require('pg')

const connectionData = {
  user: 'postgres',
  host: 'localhost',
  database: 'movies',
  password: 'admin',
  port: 5432,
}

const client = new Client(connectionData)

client.connect()

module.exports = client
