var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
    fs.readdir('public/images/portfolio', function (err, files) {
        if (err) throw err;
        res.render('index', { path: '/images/portfolio/', files: files });
    });
});

module.exports = router;
