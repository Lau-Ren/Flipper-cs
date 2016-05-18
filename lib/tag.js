var flip = require('./flip.js')
var pos = require('pos');
var tagger = new pos.Tagger();

module.exports = function (usersText) {

	var words = new pos.Lexer().lex(usersText);

	var taggedWords = tagger.tag(words);


	for (i in taggedWords) {
	    var taggedWord = taggedWords[i];
	    var word = taggedWord[0];
	    var tag = taggedWord[1];
	    // console.log(word + " /" + tag);
	}



	return taggedWords





	// extend the lexicon
	// tagger.extendLexicon({'Obama': ['NNP']});
	// tagger.tag(['Mr', 'Obama']);
	// --> [[ 'Mr', 'NNP' ], [ 'Obama', 'NNP' ]]

}