


module.exports = function (array2D) {
	 console.log(array2D, "this is the array2D that this function is given");


	var flippedArry = array2D.reduce(function(item){

		// console.log(item, "item");
		// console.log(item[0], "item0");
		// console.log(item[1], "item1");
		if(item[1] === PP$){
			// possessive pronouns
			if (item[0] === 'hers') {
				return item[0] = 'his'		
			} 
			else if (item[0] = 'his'){
				return item[0] = 'hers'
			}
		}
		else if (item[1] === PRP){
			// personal/subject pronouns
			if (item[0] === 'she') {
				return item[0] = 'he'		
			} 
			else if (item[0] = 'he'){
				return item[0] = 'she'
			}
		}
		else {
			// object pronouns
			if (item[0] === 'her') {
				return item[0] = 'him'		
			} 
			else if (item[0] = 'him'){
				return item[0] = 'her'
			}

		}


		// PP$ Possessive pronoun      my,oneÕs
		// PRP Personal pronoun         I,you,she


	})

	console.log(flippedArry, "this is the fliped array");

	// var origStr= array2D
	// var femStr = origStr.replace(/him/g, 'her')
	// 					.replace(/his/g, 'her')
	// 					.replace(/he/g, 'she')
	// 					.replace(/Him/g, 'Her')
	// 					.replace(/His/g, 'Her')
	// 					.replace(/He/g, 'She')

	// var mascStr= origStr.replace(/her/g, 'his')
	// 					.replace(/she/g, 'he')
	// 					.replace(/Her/g, 'Him')
	// 					.replace(/Her/g, 'His')
	// 					.replace(/She/g, 'He')
	// 					// .replace(/her/g, 'him')


	// console.log(femStr, "femstr")
	// console.log(mascStr, "mascStr")





}