var mongoose = require('mongoose');

//Acct schema
var acctSchema = mongoose.Schema({
     fname:{
         type: String,
         required: true
     },
     lname :{
         type: String,
         required: true
     },
     email:{
         type: String,
         required: true
     },
     password:{
         type: String,
         required: true
     },
     secq:{
         type: String,
         required: true
     },
     seca:{
         type: String,
         required: true
    },
});

var Acct = module.exports = mongoose.model('Acct', acctSchema);

//get Account
module.exports.getAcct = function(callback, limit){
    Acct.find(callback).limit(limit);
}

//get book by id
/*module.exports.getBookById = function(id, callback){
    Book.findById(id, callback);
}*/