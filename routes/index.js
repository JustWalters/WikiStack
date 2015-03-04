var express = require('express');
var router = express.Router();
var Page = require('../models/index').Page;

/* GET home page. */
router.get('/', function(req, res, next) {
	Page.find({}, function(err, pages){
		console.log(pages);
		res.render('index', { title: 'Express', docs: pages });
	});


});

module.exports = router;
