var test = require('tape');

var flip = require('../lib/flip.js')

// test the flip function
test('flip function flips the pronouns in input strng', function(t){
	// arrange
	var inputArr =  [ [ 'he', 'PRP' ],
							      [ 'said', 'VBD' ],
							      [ 'that', 'IN' ],
							      [ 'is', 'VBZ' ],
							      [ 'hers', 'PRP' ]
							    ]

	var expectedResult ='she said that is his'

	// action
	var actualResult = flip(inputArr)
	
	// assert
	t.ok(actualResult, 'flip returns something, i think')
	t.true(typeof(actualResult) === 'string', 'flip returns a string')
	t.deepEqual(actualResult,expectedResult,'flip retuns what was expected')

	t.end()
})
