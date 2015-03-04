var express = require('express');
var router = express.Router();
var Page = require('../models/index').Page;

router.get('/', function(req, res, next) {
	res.redirect('/');
});

router.get('/:title', function(req, res) {
	var title = req.params.title;
	Page.findOne({url_name: title}, function(err, data) {
		res.render('show', {page: data});
	});
});

module.exports = router;