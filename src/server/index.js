const dotenv = require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', './src/views')

let port = process.env.PORT
app.listen(port, function () {
	console.log(
		'server started on port ' + port
	)
})

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', 'localhost')
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
	res.header('Access-Control-Allow-Headers', 'Content-Type, authorization')
	res.set('X-Powered-By', 'Joe')
	next()
})

app.all('/*', (req, res) => {
	res.render('index')
})
