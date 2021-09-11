const dotenv = require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')

app.use(express.static('public'))

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
	res.sendFile(path.join(__dirname + './../views/index.html'));
})