var test = require('tape');
var isArray =require('isarray')

var flip = require('../lib/flip.js')
var tag = require('../lib/tag.js')



test('flipped string is correct for James', function(t){
	// arrange
	var inputStr = "james sold his business. he took my hand in his"
	var expectedResult = "james sold her business. she took my hand in hers"

	// action
	var actualResult = flip(tag(inputStr))
	// console.log(actualResult, "result im interested in!");
	// assert
	t.true(typeof(actualResult) === 'string','result is a string')
	t.equal(actualResult, expectedResult, 'expected result')
	
	t.end()
})

test('flipped string is correct for Jane', function(t){
	// arrange
	var inputStr = "jane sold her business. she took my hand in hers"
	var expectedResult = "jane sold his business. he took my hand in his"

	// action
	var actualResult = flip(tag(inputStr))
	// console.log(actualResult, "result im interested in!");
	// assert
	t.true(typeof(actualResult) === 'string', 'result is a string')
	t.equal(actualResult, expectedResult, 'expected result')

	t.end()
})


// test('', function(t){
// 	// arrange
// 	// action
// 	// assert

// 	t.end()	
// })

// test('', function(t){
// 	// arrange
// 	// action
// 	// assert

// 	t.end()	
// })

// test('', function(t){
// 	// arrange
// 	// action
// 	// assert

// 	t.end()	
// })

// test('', function(t){
// 	// arrange
// 	// action
// 	// assert

// 	t.end()	
// })

// test('', function(t){
// 	// arrange
// 	// action
// 	// assert

// 	t.end()	
// })

// test('', function(t){
// 	// arrange
// 	// action
// 	// assert
// 	t.end()	
// })