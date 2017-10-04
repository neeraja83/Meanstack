var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var assert = require('assert');
var app = express();

app.use(bodyParser.json());

//var Tutorials = require('./schema.js');
Genre = require('./models/genre');
Book = require('./models/book');
Acct = require('./models/account');

//connect to Mongoose
mongoose.connect('mongodb://localhost/bookstore');

//mongoose.connect('mongodb://https://neeraja83.github.io/Book_targus/bookstore');

var db = mongoose.connection;

app.get('/', function(req, res){
   res.send('Please use /api/books or api/genres');
});

app.get('/api/genres', function(req, res){
   Genre.getGenres(function(err, genres){
       if(err) throw err;
       res.json(genres);
   });
});

app.post('/api/genres', function(req, res){
   var genre = req.body;
   Genre.addGenre(genre,function(err, genre){
       if(err) throw err;
       res.json(genre);
   });
});

app.get('/api/genres/:_id', function(req, res){
   Genre.getGenreById(req.params._id,function(err, genre){
       if(err) throw err;
       res.json(genre);
   });
});

app.get('/api/books', function(req, res){
   Book.getBooks(function(err, books){
       if(err) throw err;
       res.json(books);
   });
});

app.get('/api/books/:_id', function(req, res){
   Book.getBookById(req.params._id,function(err, book){
       if(err) throw err;
       res.json(book);
   });
});

app.get('/api/acct', function(req, res){
   Acct.getAcct(function(err, account){
       if(err) throw err;
       res.json(account);
   });
});

app.listen(3000);
console.log('Running on port 3000');