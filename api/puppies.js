var express = require('express');
var router = express.Router();

var config = require('../api/config/puppies');

router.get('/', config.needAuth);
router.get('/:token', config.getAllPuppies);
router.get('/:token/:id', config.getSinglePuppy);
router.post('/', config.createPuppy);
router.put('/:id', config.updatePuppy);
router.delete('/:id', config.removePuppy);

router.get('/fibo/:nb', config.getFibo);


module.exports = router;
