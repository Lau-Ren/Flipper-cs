var test = require('tape');

var neutral = require('../lib/neutral.js')

// test the flip function
test('', function(t){
	// arrange
	var inputArr = 'She is the boss and that is her ball. Her hand was clammy'

	var expectedResult ='They are the boss and that is their ball. Their hand was clammy'

	// action
	var actualResult = neutralise(inputArr)
		console.loog
	// assert
	t.ok(actualResult, 'flip returns something, i think')
	t.true(typeof(actualResult) === 'string', 'flip returns a string')
	t.deepEqual(actualResult, expectedResult,'flip retuns what was expected')
	t.end()
})
