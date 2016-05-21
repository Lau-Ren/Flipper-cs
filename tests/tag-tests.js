var test = require('tape');
var isArray =require('isarray')

var tag = require('../lib/tag.js')


// test the tag function
test('tag function tags each word to the string input', function(t){
	// arrange
	var inputStr = "Her his"
	var expectedResult =  [['her', 'PRP$'], ['his', 'PRP$']]

	// action
	var actualResult = tag(inputStr)

	// assert
	t.true(isArray(actualResult), 'tag func returns an array')
	t.deepEqual(actualResult, expectedResult, 'tag func turns what is expected')
	t.equal(actualResult.length, expectedResult.length, 'tag func return array with correct length')
	t.end()
})




