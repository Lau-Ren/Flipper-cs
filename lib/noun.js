var nouns =require('../db/nouns.json')

module.exports = function (nouns, origArray) {

	var flippedArr = origArray.map(function(item){
		if(nouns.hasOwnProperty(item)){
		      return nouns[item]
		      				
		    } else {
		      return item
		    }

	
	})

	return flippedArr.join(" ")


}

