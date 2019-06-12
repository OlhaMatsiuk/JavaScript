'use strict'
let login, password;

login = 'Admin';
password = 'TheMaster';

if(login == 'Admin'){
	
	if(password == 'TheMaster')
		console.log('Welcome!');
	else if(password == 'Cancel')
		console.log('Canceled.');
	else
		console.log('Wrong password');
}
else if(login == 'Cancel')
	console.log('Canceled.');
else
	console.log("I don't know you");