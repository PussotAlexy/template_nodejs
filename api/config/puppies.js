var config = require('../../tools/config');
var qr = require('./queries');
var dbMiddle = config.getDbMiddle();
var spawn = require('threads').spawn;

function needAuth(req, res, next) {
	if (!config.checkApiAuth(req.params.token, res)) {res.end(); return;}
}

function getAllPuppies(req, res, next) {
	if (!config.checkApiAuth(req.params.token, res)) {res.end(); return;}
	dbMiddle.any( qr.getAllPuppies )
		.then(function (data) {
			res.status(200)
				.json({
					status: 'success',
					data: data,
					message: 'Retrieved ALL puppies'
				});
		})
		.catch(function (err) {
			return next(err);
		});
}


function getSinglePuppy(req, res, next) {
	var token = req.params.token;
	var pupID = parseInt(req.params.id);
	dbMiddle.one(qr.getSinglePuppy, pupID)
		.then(function (data) {
			res.status(200)
				.json({
					status: 'success',
					data: data,
					message: 'Retrieved ONE puppy'
				});
		})
		.catch(function (err) {
			return next(err);
		});
}

function createPuppy(req, res, next) {
	//console.log(req.body.name);
	req.body.age = parseInt(req.body.age);
	dbMiddle.none(qr.createPuppy,
		req.body)
		.then(function () {
			res.status(200)
				.json({
					status: 'success',
					message: 'Inserted one puppy'
				});
		})
		.catch(function (err) {
			return next(err);
		});
}

function updatePuppy(req, res, next) {
	dbMiddle.none(qr.updatePupppy,
		[req.body.name, req.body.breed, parseInt(req.body.age),
			req.body.sex, parseInt(req.params.id)])
		.then(function () {
			res.status(200)
				.json({
					status: 'success',
					message: 'Updated puppy'
				});
		})
		.catch(function (err) {
			return next(err);
		});
}

function removePuppy(req, res, next) {
	var pupID = parseInt(req.params.id);
	dbMiddle.result(qr.removePuppy, pupID)
		.then(function (result) {
			/* jshint ignore:start */
			res.status(200)
				.json({
					status: 'success',
					message: `Removed ${result.rowCount} puppy`
				});
			/* jshint ignore:end */
		})
		.catch(function (err) {
			return next(err);
		});
}


function getFibo(req, res, next) {
	var nbF = parseInt(req.params.nb);

	var thread = spawn(function(input, done) {
		var retour;
		function fibo(n) {
      	return n > 1 ? fibo(n - 1) + fibo(n - 2) : 1;
		}
		retour = fibo(input.nb);
		done({ string : input.nb, integer : retour });
	});

	thread
		.send({ nb : nbF })
		.on('message', function(response) {
			res.status(200)
				.json({
					status: 'success',
					message: `Retour: ${response.integer} ...`
				});
			thread.kill();
		})
		.on('error', function(error) {
			console.error('Worker errored:', error);
			return next(error);
		})
		.on('exit', function() {
			console.error('Worker has been terminated.');
		})
	;
}

module.exports = {
	getAllPuppies: getAllPuppies,
	getSinglePuppy: getSinglePuppy,
	createPuppy: createPuppy,
	updatePuppy: updatePuppy,
	removePuppy: removePuppy,
	getFibo: getFibo,
	needAuth: needAuth
};