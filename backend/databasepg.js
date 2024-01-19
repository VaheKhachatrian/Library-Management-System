const {Client} = require('pg')

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: '6451',
    database: 'library'
})



module.exports = client