const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//book schema
var bookSchema = new Schema({
	title:String, 
	page:Number
});

//schema
var authorSchema = new Schema({
	name:String, 
	age:Number,
	books:[bookSchema]
});

//model

const Author = mongoose.model("Author", authorSchema);

module.exports = Author;	