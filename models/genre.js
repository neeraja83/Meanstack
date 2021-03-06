var mongoose = require('mongoose');

//Genre schema
var genreSchema = mongoose.Schema({
     name:{
         type: String,
         required:true
     },
     create_date:{
         type: Date,
         default: Date.now
     }
});

var Genre = module.exports = mongoose.model('Genre', genreSchema);

//get genres
module.exports.getGenres = function(callback, limit){
    Genre.find(callback).limit(limit);
}

//get book by id
module.exports.getGenreById = function(id, callback){
    Genre.findById(id, callback);
}

//add genre
module.exports.addGenre = function(genre, callback){
    Genre.create(genre, callback);
}