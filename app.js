const accountRouter = require('./account.js')
const postRouter = require('./post.js')
const commentRouter = require('./comment.js')
const submitRouter = require('./submit.js')
const config = require('dotenv').config().parsed

const express = require('express');
const app = express()
const port = config.SERVER_PORT

app.use(express.json())
app.use('/account', accountRouter)
app.use('/post', postRouter)
app.use('/comment', commentRouter)
app.use('/submit', submitRouter)


app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})