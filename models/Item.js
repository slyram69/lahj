var mongoose = require('mongoose');

var Item =  mongoose.model('Item', {
  "image_url":{type: String, require: true},
  "title":{type: String, require: true},
  "price":{type: Number, require: true},
  "description":{type: String, require: true},
  "category":{type: String, require: true}
});

module.exports = ('Item', Item)
