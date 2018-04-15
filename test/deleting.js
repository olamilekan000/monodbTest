const assert = require("assert");
const schemas = require('../models/schemaa')

describe("Deletes records", function () {
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

	it("Deletes record(s) from the database", function(done){
		schemas.findOneAndRemove({name:'Mario'}).then(function(){
			schemas.findOne({name:'Mario'}).then(function(res){
				assert(res === null);
				done();
			})
		})
	})

})