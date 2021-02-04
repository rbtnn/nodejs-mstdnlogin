
const PORT = 3000;
const INSTANCE = '';
const CLIENT_ID = '';
const CLIENT_SECRET = '';
const REDIRECT_URI = 'http://localhost:3000/authorize';

const request = require('request');
const express = require('express');

var app = express();

app.use(express.static('public'));

app.get('/url', (req, res) => {
	res.json({
		'url' : 'https://' + INSTANCE + '/oauth/authorize'
		+ '?response_type=' + 'code'
		+ '&redirect_uri=' + REDIRECT_URI
		+ '&client_id=' + CLIENT_ID
		+ '&scope=' + 'read'
	});
});

app.get('/authorize', (req, res) => {
	request.post({
		uri: 'https://' + INSTANCE + '/oauth/token',
		headers: {
			'Content-type' : 'application/json',
		},
		json: {
			'grant_type' : 'authorization_code',
			'redirect_uri' : REDIRECT_URI,
			'client_id' : CLIENT_ID,
			'client_secret' : CLIENT_SECRET,
			'code' : req.query.code,
		}
	}, function(error, res2, body) {
		res.cookie('access_token', body.access_token);
		res.redirect('./');
	});
});

app.listen(PORT, ()=> {
	console.log('localhost:' + PORT);
});

