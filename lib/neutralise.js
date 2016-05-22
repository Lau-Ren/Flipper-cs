var gender = require('gender-neutral');
 
module.exports = function (usersText) {
	var casedText= usersText.toLowerCase()
	return new Promise (function(resolve, reject){
		gender.neutralize(casedText, function(err, newStr){
			if(err){
				return  reject(err)
			} else {
				return  resolve(newStr.split(" "))
			}
		})

	}) 



}