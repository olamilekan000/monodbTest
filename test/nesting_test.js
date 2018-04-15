const assert = require("assert");
const Author = require('../models/Author')

describe("saving records into mongodb", function () {
	// body...
	it("creates a new author", function(done){
		var pat = new Author ({
			name:'Patric Rothass',
			age: 26,
			books:[{title:'Name of the wind', pages:400}]
		})

		pat.save().then(function(){
			Author.findOne({name:'Patric Rothass'}).then(function (rec) {
				
				assert(rec.books.length === 1)
				done();
			})
		})

	})
})