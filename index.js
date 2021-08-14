'use strict'

const path = require('path')
const express = require('express')
const app = express()

app.set('port', process.env.PORT || 5099)

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './index.html'))
})

app.listen(app.get('port'), () => {
  console.log('Success! Listening on port:', app.get('port'))
})
