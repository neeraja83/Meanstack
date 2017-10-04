var mongoose = require('mongoose');

//Book schema
var bookSchema = mongoose.Schema({
     title:{
         type: String,
         required: true
     },
     genre:{
         type: String,
         required: true
     },
     description:{
         type: String 
     },
     author:{
         type: String,
         required: true
     },
     publisher:{
         type: String 
     },
    pages:{
      type: String  
    },
    image_url:{
      type: String  
    },
    buy_url:{
      type: String  
    },
     
});

var Book = module.exports = mongoose.model('Book', bookSchema);

//get books
module.exports.getBooks = function(callback, limit){
    Book.find(callback).limit(limit);
}

//get book by id
module.exports.getBookById = function(id, callback){
    Book.findById(id, callback);
}