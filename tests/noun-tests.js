var test = require('tape');
var isArray =require('isarray')

var nouns =require('../db/nouns.json')
var noun = require('../lib/noun.js')



test('noun func switches the nouns', function(t){
	// arrange
	var inputArr = ['bro','boy','dude']
	var expectedResult = ['sis', 'girl', 'lady']

	// action
	var actualResult = noun(nouns,inputArr)
	// console.log(actualResult, "result im interested in!");
	// assert
	t.true(isArray(actualResult),'result is an array')
	t.deepEqual(actualResult, expectedResult, 'expected result')
	
	t.end()
})



test('noun func switches the nouns', function(t){
	// arrange
	var inputArr = ['james', 'sold', 'his', 'business']
	var expectedResult = ['james', 'sold', 'her', 'business']

	// action
	var actualResult = noun(nouns,inputArr)
	// console.log(actualResult, "result im interested in!");
	// assert
	t.true(isArray(actualResult),'result is an array')
	t.deepEqual(actualResult, expectedResult, 'expected result')
	
	t.end()
})
