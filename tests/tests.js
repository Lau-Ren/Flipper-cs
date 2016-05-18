var test = require('tape');
var isArray =require('isarray')

var flip = require('../lib/flip.js')
var tag = require('../lib/tag.js')



test('tag function tags each word to the string input', function(t){
	// arrange
	var inputStr = "Her his"
	var expectedResult =  [['Her', 'PRP$'], ['his', 'PRP$']]
	
	// action
	var actualResult = tag(inputStr, flip)

	// assert
	t.true(isArray(actualResult), 'an array is returned')
	t.deepEqual(expectedResult, actualResult, 'tag func turns what is expected')

	t.end()
})


test('', function(t){

	t.end()
	
})

test('', function(t){

	t.end()	
})

test('', function(t){

	t.end()	
})

test('', function(t){

	t.end()	
})

test('', function(t){

	t.end()	
})

test('', function(t){

	t.end()	
})

test('', function(t){

	t.end()	
})

test('', function(t){

	t.end()	
})