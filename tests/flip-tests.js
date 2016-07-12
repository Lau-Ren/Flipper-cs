var test = require('tape');

var flip = require('../lib/flip.js')

// test the flip function
test('flip function flips the pronouns in input string1', function(t){
	// arrange
	var inputArr =  [[ 'he', 'PRP' ], [ 'said', 'VBD' ], [ 'that', 'IN' ], [ 'is', 'VBZ' ], [ 'hers', 'PRP' ]]

	var expectedResult ='she said that is his'

	// action
	var actualResult = flip(inputArr)
	
	// assert
	t.ok(actualResult, 'flip returns something, i think')
	t.true(typeof(actualResult) === 'string', 'flip returns a string')
	t.deepEqual(actualResult, expectedResult,'flip retuns what was expected')
	t.end()
})

test('flip function flips the pronouns in input string2', function(t){
	// arrange
	var inputArr = [['her', 'PRP$'], ['his', 'PRP$']]
	var expectedResult ='his hers'

	// action
	var actualResult = flip(inputArr)
	
	// assert
	t.ok(actualResult, 'flip returns something')
	t.true(typeof(actualResult) === 'string', 'flip returns a string')
	t.deepEqual(actualResult, expectedResult,'actual is the same as the expected')

	t.end()
})


//flipped text should not be the same as entered text, when it includes certain words
test('flipped text is different to entered text', function(t){
	// arrange

	// action
	// assert
	t.end()	
})