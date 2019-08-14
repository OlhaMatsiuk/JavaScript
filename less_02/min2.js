'use strict'

let employeeSalaries = {
	Olha : 1000,
	Bohdan : 2000,
	Vika : 1200,
	Natali : 800
};

let summ = 0;
if (employeeSalaries) {
	for ( let key in employeeSalaries) {
		summ += employeeSalaries[key];
	}
	console.log(summ);
}else console.log(0);