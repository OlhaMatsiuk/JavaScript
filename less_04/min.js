function alert(array){
	console.log(array);
	console.log("-----------------------");
}
function sortUp(number1, number2){
	return number1 - number2;
}
function sortDown(number1, number2){
	return number2 - number1;
}

let array = [10,-10,0,4,5,6,7,-5,-111,-45,123,33,567,1000,-45,-10,34,13,28,22,2019];
alert(array);

array.sort(sortUp);
alert(array);

array.sort(sortDown);
alert(array);

