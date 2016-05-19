module.exports = function (array) {
	// console.log(array, "this is the array that this function is given");
	var flippedArry = array.map(function(item){
		// console.log(item, "item");
		// console.log(item[0], "item0");
		console.log(item[1], "item1");
		if(item[1] === 'PP$'){
			// possessive pronouns
			if (item[0] == 'hers') {
				return item[0] = 'his'		
			} 
			else if (item[0] =='his'){
				return item[0] = 'hers'
			}
		}
		else if (item[1] === 'PRP'){
			// personal/subject pronouns
			if (item[0] == 'she') {
				return item[0] = 'he'		
			} 
			else if (item[0] == 'he'){
				return item[0] = 'she'
			}
			else if (item[0] == 'hers'){
				return item[0] = 'his'
			}
		}
		else {
				return item[0]

		}

	})
	var flippedStr = flippedArry.join(" ")
	console.log(flippedStr, "this is the fliped array");

return flippedStr


}


	// var origStr= array
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


		// else if (item[1] === 'CC' || 'CD' || 'DT' || 'EX' || 'FW' || 'IN' || 'JJ' || 'JJR' || 'JJS' || 'LS' || 'MD' || 'NN' || 'NNP' || 'NNPS' ||'NNS' || 'POS' || 'PDT' || 'RB' || 'RBR' || 'RBS' || 'RP' || 'SYM' || 'TO' || 'UH' || 'VB' || 'VBD' || 'VBG' || 'VBN' || 'VBP' ||'VBZ' || 'WDT' || 'WP' || 'WP$' || 'WRB' || ',' || '.' || ':' || '$' || '#' || '"' || '(' || ')' ){


		// }

			// // object pronouns
			// if (item[0] === 'her') {
			// 	return item[0] = 'him'		
			// } 
			// else if (item[0] = 'him'){
			// 	return item[0] = 'her'
			// }
			// // other word types
			// else if (item[0] = 'girl') {
			// 	return item[0] = 'boy'

			// }
			// else if (item[0] = 'girls') {
			// 	return item[0] = 'boys'

			// }
			// else if (item[0] = "girl's") {
			// 	return item[0] = "boy's"

			// }
			// else if (item[0] = 'lady') {
			// 	return item[0] = 'lad'

			// }
			// else if (item[0] = 'ladies') {
			// 	return item[0] = 'lads'

			// }
			// else if (item[0] = "lady's") {
			// 	return item[0] = "lad's"

			// }
			// else if (item[0] = "ladies'") {
			// 	return item[0] = "lads'"
			// }
			// else if (item[0] = 'women') {
			// 	return item[0] = 'men'

			// }
			// else if (item[0] = 'womens') {
			// 	return item[0] = 'mens'

			// }
			// else if (item[0] = 'ladys') {
			// 	return item[0] = 'lads'

			// }
			// else if (item[0] = "women's") {
			// 	return item[0] = "men's"

			// }
			// else if (item[0] = "womens'") {
			// 	return item[0] = "mens'"

			// }
			// else if (item[0] = 'woman') {
			// 	return item[0] = 'man'

			// }
			// else if (item[0] = 'womans') {
			// 	return item[0] = 'mans'

			// }
			// else if (item[0] = "woman's") {
			// 	return item[0] = "man's"

			// }
			// else if (item[0] = 'female') {
			// 	return item[0] = 'male'

			// }
			// else if (item[0] = 'females') {
			// 	return item[0] = 'males'

			// }
			// else if (item[0] = "female's") {
			// 	return item[0] = "male's"

			// }
			// else if (item[0] = "females'") {
			// 	return item[0] = "females'"

			// }
				// else {

			// }