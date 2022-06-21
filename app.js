const accountRouter = require('./account.js')
const config = require('dotenv').config().parsed

const express = require('express');
const app = express()
const port = config.SERVER_PORT

app.use(express.json())
app.use('/account', accountRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});