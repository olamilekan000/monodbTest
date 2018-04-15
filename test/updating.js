const assert = require("assert");
const schemas = require('../models/schemaa')

describe("Updates records", function () {
	var charter;
	beforeEach(function(done){
		charter = new schemas({
			name:'Mario',
			weight: 50
		})

		charter.save().then(function(){
			assert(charter.isNew === false)
			done()
		})
	});

	it("Updates record(s) from the database", function(done){
		schemas.findOneAndUpdate({name:'Mario'}, {name: "Luigi"}).then(function(){
			schemas.findOne({_id: charter._id}).then(function(res){
				assert(res._id.toString() === charter._id.toString());
				done();
			})
		})
	})

	it("Increments the weight by 1 from the database", function(done){
		schemas.update({}, {$inc: { weight: 1 }}).then(function(){
			schemas.findOne({name: 'Mario'}).then(function(res){
				assert(res.weight === 51);
				done();
			})
		})
	})

})