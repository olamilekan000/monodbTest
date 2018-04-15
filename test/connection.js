const mongoose = require('mongoose');

//Es6 Promise
mongoose.Promise = global.Promise;
//mocha hook
//connect to the db before test run and runs once
before(function(done){
	//connect to mongodb
	mongoose.connect("mongodb://localhost/testaroo");
	//open connection and log to console once opened
	mongoose.connection.once("open", function(){
		console.log("successfully connected");
		done();
	}).on("error", function(err){
		console.log("connection: "+ err);
	});
	
});

//runs before every test
beforeEach(function(done){
	//Drop the collection
	mongoose.connection.collections.mariochars.drop(function(){
		done();
	})
})
