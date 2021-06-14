const express = require('express')
const app = express()
const morgan = require('morgan')

// Settings
app.set('port', process.env.PORT || 3000)

// Midelwares
app.use(express.static(__dirname + '/public'))
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Routes
app.use(require('./routes/movies'))

// Starting the server
app.listen(app.get('port'), () => {
  console.log('servidor puerto ', app.get('port'))
})
