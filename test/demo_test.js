const assert = require('assert');
const mocha = require('mocha');

describe("some kind of test", function () {
	// body...

	it("adds two numbers", function(){
		assert(2+2 === 4);
	});
});