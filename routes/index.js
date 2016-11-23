var express = require('express');
var router = express.Router();

//models
var Item = require('../models/Item.js')

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
 /*GET bracelets page. */
router.get('/bracelets', function(req, res, next) {
     Item.find({'category': 'bracelets'},function(err, products){
       console.log(products);
       res.render('bracelets', { title: 'bracelets', products: products });
     });
 });
/* GET collections page. */
 router.get('/collections', function(req, res, next) {
   Item.find({'category': 'collections'},function(err, products){
     console.log(products);
     res.render('collections', { title: 'collections', products: 'products' });
   });
 });
/* GET earrings page. */
router.get('/earrings', function(req, res, next) {
  Item.find({'category': 'earrings'},function(err, products){
    console.log(products);
  res.render('earrings', { title: 'earrings', products: 'products' });
    // res.redirect('/');
  });
});



module.exports = router;
