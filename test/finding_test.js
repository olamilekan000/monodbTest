const assert = require("assert");
const schemas = require('../models/schemaa')

describe("Finding records", function () {
	var charter;
	beforeEach(function(done){
		charter = new schemas({
			name:'Mario'
		})

		charter.save().then(function(){
			assert(charter.isNew === false)
			done()
		})
	});

	it("finds record(s) in the database", function(done){
		schemas.findOne({name:'Mario'}).then(function(result){
			assert(result.name === 'Mario');
			done();
		})
	})

	it("finds record(s) by id in the database", function(done){
		schemas.findOne({_id: charter._id}).then(function(result){
			assert(result._id.toString() === charter._id.toString());
			done();
		})
	})

})