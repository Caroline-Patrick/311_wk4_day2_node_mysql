const mysql = require('mysql');
require('dotenv').config();
console.log(process.env.HOST);
console.log(process.env.USERNAME);
console.log(process.env.PASSWORD);
console.log(process.env.DATABASE);

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating connection...')
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: process.env.HOST,
        user: process.env.USERNAME,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
      });

      return this.pool
    }

    return this.pool
  }
}

const instance = new Connection()

module.exports = instance;