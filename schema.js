var mongoose = require('mongoose');
var assert = require('assert');
var Schema = mongoose.Schema;
var tutSchema = new Schema({
    name: {
        type:String,
        require: true,
        unique: true
    }
   });

var Tutorials = mongoose.model('tutorials', tutSchema);
module.exports = Tutorials;