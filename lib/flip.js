
module.exports = function (string) {

	var origStr= string
	var femStr = origStr.replace(/him/g, 'her')
						.replace(/his/g, 'her')
						.replace(/he/g, 'she')
	var mascStr= origStr.replace(/her/g, 'him')
						.replace(/her/g, 'his')
						.replace(/she/g, 'he')

	newString.replace(/him/g, '')

	console.log(newString, "did it replace all the hims?")





}