var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HOME' });
});
/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'HOME' });
});
/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});
/* GET album page. */
router.get('/album', function(req, res, next) {
  res.render('album', { title: 'Album' });
});
/* GET pilgrimang page. */
router.get('/pilgrimage', function(req, res, next) {
  res.render('pilgrimage', { title: 'Pilgrimage' });
});
/* GET nativity page. */
router.get('/nativity', function(req, res, next) {
  res.render('nativity', { title: 'Nativity' });
});
/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});
/* GET bracelets page. */
router.get('/bracelets', function(req, res, next) {
  res.render('bracelets', { title: 'bracelets' });
});
/* GET collections page. */
router.get('/collections', function(req, res, next) {
  res.render('collections', { title: 'collections' });
});
/* GET earrings page. */
router.get('/earrings', function(req, res, next) {
  res.render('earrings', { title: 'earrings' });
});

module.exports = router;
