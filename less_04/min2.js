function alert(array){
	console.log(array);
	console.log("-----------------------");
}

function filterPos(numb){
	return numb>=0;
}
function filterNeg(numb){
	return numb<0;
}

let array = [10,-10,0,4,5,6,7,-5,-111,-45,123,33,567,1000,-45,-10,34,13,28,22,2019];
alert(array);

let posArray = array.filter(filterPos);
alert(posArray);

let negArray = array.filter(filterNeg);
alert(negArray);