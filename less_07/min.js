function textInLi(){
	var elements = document.getElementsByTagName('li');
	
	for (var i = 0; i < elements.length; i++) {
		var currentInput = elements[i];
		currentInput.innerHTML = "lallalalal " + i;
	}
}

function numberLi(){
	var elements = document.getElementsByTagName('li');
	console.log(elements.length);
}