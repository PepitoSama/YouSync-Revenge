const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

// Start server
const app = express()

// Use morgan HTTP request Logger
// combined : Standard Apache combined log output.
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// get
// post
// put
// patch
// delete

app.get('/', (req, res) => {
  res.end('Hello world !')
})

app.get('/status', (req, res) => {
  res.send({
    message: 'hello world !'
  })
})

app.listen(process.env.PORT || 8080)
