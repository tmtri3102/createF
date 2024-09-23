let a = confirm("Should we play the game");
let theAnswer = confirmAnswer(a);
alert(theAnswer);

function confirmAnswer(answer) {
	let result = "";
	if (answer) {
		result = " Excellent";
	} else {
		result = "Ok fine";
	}
	return result;
}
