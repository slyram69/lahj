// dbtest.js

var express = require('express');
var app = express();

myItems = [{ "image_url" : "./image/l_and_h_j_bracelet.jpg", "title" : "Love & Honor Bracelet Stack", "price" : "25.00", "description" : "Love and Honor Bracelet Stack", "category" : "bracelets" },
{ "image_url" : "./image/crystalset.jpg", "title" : "Crystal & Hematite Set", "price" : "50.00", "description" : "Crystal & Hematite Set, 40\" necklace 7.5\" bracelet. ", "category" : "collections" },
{ "image_url" : "./image/st_benedict_dizi_stack.jpg", "title" : "OLG Dizi & Gold Stack", "price" : "35.00", "description" : "Our lady of Guadalupe 12mm Dizi bead & gold bracelet stack.", "category" : "bracelets" },
{ "image_url" : "./image/olgt-crosscollection.jpg", "title" : "OLG T-Cross Collection", "price" : "39.00", "description" : "OLG T-Cross Collection", "category" : "collections" },
{ "image_url" : "./image/black_white_cross_bracelet.jpg", "title" : "Black & White Cross Bracelet", "price" : "18.00", "description" : "Black and White Cross Bracelet 7.5\" Silver Cross with Agate Beads.", "category" : "bracelets" },
{ "image_url" : "./image/greypearlcollection.jpg", "title" : "Margaret Collection", "price" : "55.00", "description" : "36\" Grey Pearl necklace that can be worn long or doubled to be worn short.Includes St. Benedict bracelet & earrings", "category" : "collections" },
{ "image_url" : "./image/angelwingturquoiseandcoral.jpg", "title" : "Angel Wing Turquoise & Coral Earrings", "price" : "12.00", "description" : "Angel Wing Turquoise Coral earrings on gold filled post", "category" : "earrings" },
{ "image_url" : "./image/st_benedict_silver_gold_earrings.jpg", "title" : "St. Benedict Silver & Gold Earrings", "price" : "10.00", "description" : "St.Benedict Silver & Gold Earrings", "category" : "earrings" },
{ "image_url" : "./image/olgsilver.jpg", "title" : "OLG Silver", "price" : "7.00", "description" : "Our Lady of Guadalupe", "category" : "earrings" }];
var mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/l_hj');
mongoose.connect('mongodb://bob:pass@ds159527.mlab.com:59527/l_hj');

var Item = mongoose.model('Item', {
  'image_url': String,
  'title': String,
  'price': Number,
  'description': String,
  'category': String
});

app.get('/', function(req, res) {
  Item.find({}, function(err, items){
    res.json(items);
  })
});

app.get('/insert', function(req, res) {
  Item.insertMany(myItems, function(err) {
    res.redirect('/');
  })
})

app.listen(8080, function() {
  console.log('listening on port 8080');
});
