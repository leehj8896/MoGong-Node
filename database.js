const { Pool } = require('pg');
const config = require('dotenv').config().parsed
const pool = new Pool({
	user: config.DATABASE_USER,
	host: config.DATABASE_HOST,
	database: config.DATABASE_NAME,
	password: config.DATABASE_PASSWORD,
	port: config.DATABASE_PORT,
})
pool.connect(err => {
  if (err) console.log(err);
  else {
    console.log("DB 연결 성공")
  }
});
module.exports = pool; 