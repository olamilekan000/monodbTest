const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//schema

var marioCharSchema = new Schema({
	name:String,
	weight:Number
});

//model

const marioChar = mongoose.model("mariochar", marioCharSchema);

module.exports = marioChar;	