var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());
app.use(express.static('public'));

app.get('/home', function(req, res){
    res.render('index');
});

app.post('/', function(req, res){
    console.log(req.body);
    res.send("received ur request"+req.body);
});

app.listen(3000);

-----------

    
var mongoose = require('mongoose');
var assert = require('assert');

var Tutorials = require('./schema.js');

var url = mongodb://localhost:27017/MyDb;
mongoose.connect(url);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error'));
db.on('open', function(){
   console.log('connected');
});

var newTopic = Tutorials({
   name: 'Express.js',
   desc:'Express framework' 
});

newTopic.save(function(err){
    if(err) throw err;
    
    Tutorials.find({},function(err,data){
        if(err) throw err;
        console.log(data);
    });
});

----------
    books.js
var mongoose = require('mongoose');

//Book Schema
var bookSchema = mongoose.Schema({
   title:{
       type: String,
       required: true
   },
    genre:{
        type: String,
       required: true
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});

var Book = module.exports = mongoose.model();

//get genres
module.exports.getGenres = function()
    genre.find(callback).limit(limit);
}

--------
    app.get('/api/genres', function(req,res){
   Genre.getGenres(function(err, genres){
    if(err) throw err;
       res.json(genres);
   });
});