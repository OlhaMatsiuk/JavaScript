'use strict'

function calc(number1, operation, number2) {

	try {
		if (operation != '+' && operation != '-' && operation != '*'
				&& operation != '/')
			throw "Не правильна операція!";
		else if (number2 == 0)
			throw "На нуль цілити не можна";
		else {
			let cal = {
				'+' : number1 + number2,
				'-' : number1 - number2,
				'*' : number1 * number2,
				'/' : number1 / number2
			};
			return cal[operation];
		}
	} catch (err) {
		console.log(err);
	}
}

console.log(calc(100, '-', 23));
console.log(calc(100, 'fff', 23));
console.log(calc(100, '-', 13));
console.log(calc(100, '-', 0));
console.log(calc(100, '/', 13));
