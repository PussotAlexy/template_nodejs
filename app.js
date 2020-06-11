const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const lessMiddleware = require('less-middleware');
const fs = require('fs');
const cors = require('cors');


var app = express();

// allow cross origin
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));


//******************************************************************************
// DEBUT: gestion identification
app.get('/',
	//require('connect-ensure-login').ensureLoggedIn(),
	function(req, res) {

		res.render('index', { user: req.user, title: 'Express', token: config.getToken()} );
	});

/*
app.post('/login',
	passport.authenticate('local', function(req, res) {
		res.redirect('/login');
	}),
	function(req, res) {
		res.redirect('/');
	});
	*/




// FIN : gestion identification
//******************************************************************************





module.exports = app;
