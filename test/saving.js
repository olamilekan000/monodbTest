const assert = require("assert");
const schemas = require('../models/schemaa')

describe("saving records into mongodb", function () {
	// body...
	it("saves a record into the database", function(done){
		var charter = new schemas({
			name:'Mario'
		})

		charter.save().then(function(){
			assert(charter.isNew === false)
			done()
		})

	})
})