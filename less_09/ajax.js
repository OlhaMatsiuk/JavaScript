userAgeGet.onblur = function() {
	if(this.value < 1 || this.value > 100 || isNaN(this.value)){
		alert("Error!");
		userAgeGet.focus();
	}else{
		userResidenceGet.focus();
	}
}
userAgePost.onblur = function() {
	if(this.value < 1 || this.value > 100 || isNaN(this.value)){
		alert("Error!");
		userAgePost.focus();
	}else{
		userResidencePost.focus();
	}
}




function sendDataByGetMethod() {
	var userData = {
		userLastName:document.getElementById('userLastNameGet').value,	
		userSurname:document.getElementById('userSurnameGet').value,	
	    userAge:document.getElementById('userAgeGet').value,
	    userResidence:document.getElementById('userResidenceGet').value
	};
	
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "/userGet?userLastName="+userData.userLastName+"&userSurname="+userData.userSurname+
			"&userAge="+userData.userAge+"&userResidence="+userData.userResidence);
	xhr.setRequestHeader("Content-type","application/json");
	xhr.send();
}
function sendDataByPostMethod() {
	var userData = {
			userLastName:document.getElementById('userLastNamePost').value,	
			userSurname:document.getElementById('userSurnamePost').value,	
		    userAge:document.getElementById('userAgePost').value,
		    userResidence:document.getElementById('userResidencePost').value
		};
		
		var xhr = new XMLHttpRequest();
		xhr.open("POST", "/userPost");
		xhr.setRequestHeader("Content-type","application/json");
		xhr.send(JSON.stringify(userData));
}