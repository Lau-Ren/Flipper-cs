
var isArray =require('isarray')
// var nouns =require('./nouns.json')

module.exports = function  (neutArr, origStr) {
	
	var originalArr = origStr.split(" ")
	var userStr= originalArr.join(" ")

	var flippedStr = nounify(originalArr)



	return {userStr:userStr, flippedStr:flippedStr}
	
	function mascStr(neutArr) {

		var flippedArr= []

			for(var i = 0; i < neutArr.length; i++) {
				switch (neutArr[i]) {
					case 'she':
						flippedArr.push('he');
						break;

					case 'her':

          	flippedArr.push('him');
            // !!!or!!! flippedArr.push('his');

            break;
					case 'hers':
					flippedArr.push('his');
						break;

					case 'herself':
					flippedArr.push('himself');
						break;
            
          case 'he':
            flippedArr.push('she');
            break;

          case 'him':
            flippedArr.push('her');
            break;

          case 'his':
          flippedArr.push('her');
          // !!! or !!! flippedArr.push('hers');
            break;

          case 'himself':
          flippedArr.push('herself');
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

