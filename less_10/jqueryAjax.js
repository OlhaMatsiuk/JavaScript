$(document).ready(function() {
	var value = $('#userAgeGet').val();
	$('#userAgeGet').blur(function(){
		if(this.value < 1 || this.value > 100 || isNaN(this.value)){
			alert("Error!");
			$('#userAgeGet').focus();
		}else{
			$('#userResidenceGet').focus();
		}
	});
	
	$('#userAgePost').blur(function(){
		var value = $('#userAgePost').val();
		if(value < 1 || value > 100 || isNaN(value)){
			alert("Error!");
			$('#userAgePost').focus();
		}else{
			$('#userResidencePost').focus();
		}
	});
	
	$('#ajaxGet').bind('click', function() {
		var userData = {
				userLastName:  $('#userLastNameGet').val(),	
				userSurname:   $('#userSurnameGet').val(),	
			    userAge:       $('#userAgeGet').val(),
			    userResidence: $('#userResidenceGet').val()
			};

		$.ajax({
			type:  'GET',
			contentType: 'application/json',
			url: "/userGet?userLastName="+userData.userLastName+"&userSurname="+userData.userSurname+
				"&userAge="+userData.userAge+"&userResidence="+userData.userResidence,
			success: function(data) {
				console.log('success');
				console.log(JSON.stringify(data));
			}
		});
	});
	
	$('#ajaxPost').bind('click', function() {
		var userData = {
				userLastName:  $('#userLastNamePost').val(),	
				userSurname:   $('#userSurnamePost').val(),	
			    userAge:       $('#userAgePost').val(),
			    userResidence: $('#userResidencePost').val()
			};
		
		$.ajax({
			type:  'POST',
			data:  JSON.stringify(userData),
			contentType: 'application/json',
			url: '/userPost',
			success: function(data) {
				console.log('success');
				console.log(JSON.stringify(data));
			}
		});
	});
});