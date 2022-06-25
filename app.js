const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  console.log('[App]Connection Success.')
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// PostgreSQL

const fs = require('fs');
const { Pool } = require('pg');

fs.readFile('config.json', 'utf-8', (error, jsonFile) => {
  if (error) return console.log(error);
  console.log(jsonFile);

  const jsonData = JSON.parse(jsonFile);
  console.log(jsonData);

  const user = jsonData['DATABASE_USER'];
  const host = jsonData['DATABASE_HOST'];
  const name = jsonData['DATABASE_NAME'];
  const password = jsonData['DATABASE_PASSWORD'];
  const port = jsonData['DATABASE_PORT'];

  const pg = new Pool({
    user: user,
    host: host,
    database: name,
    password: password,
    port: port
  })

  pg.connect(err => {
    if (err) console.log(err);
    else {
      console.log('데이터베이스 연결 성공!');
    }
  });
});
