// const wordType = require('../db/data.json')
var isArray =require('isarray')

module.exports = function  (neutArr) {
	console.log( isArray(neutArr), "this is what flip gets");
	var mascStr = mascStr(neutArr)
	var femStr = femStr(neutArr)
	var neutStr =neutArr.join(" ")

	return {mascStr:mascStr, femStr:femStr, neutStr:neutStr}
	
	function mascStr(neutArr) {

		var flippedArr= []

			for(var i = 0; i < neutArr.length; i++) {
				switch (neutArr[i]) {
					case 'they':
						flippedArr.push('he');
						break;

					case 'them':
						flippedArr.push('him');
						break;

					case 'their':
					flippedArr.push('his');
						break;

					case 'theirs':
					flippedArr.push('his');
						break;

					case 'themself':
					flippedArr.push('himself');
						break;

					default:
						flippedArr.push(neutArr[i])
				}

			}

			return flippedArr.join(" ")

	}

	function femStr(neutArr) {


		var flippedArr= []

			for(var i = 0; i < neutArr.length; i++) {
				switch (neutArr[i]) {
					case 'they':
						flippedArr.push('she');
						break;

					case 'them':
						flippedArr.push('her');
						break;

					case 'their':
					flippedArr.push('her');
						break;

					case 'theirs':
					flippedArr.push('hers');
						break;

					case 'themself':
					flippedArr.push('herself');
						break;

					default:
						flippedArr.push(neutArr[i])
				}

			}
			return flippedArr.join(" ")

	}
}



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