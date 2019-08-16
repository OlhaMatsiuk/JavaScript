function alert(array){
	console.log(array);
	console.log("-----------------------");
}

let Students = [];

let student1 = { yearOfStuding: 3 , facultyName: "Math"};
let student2 = { yearOfStuding: 2 , facultyName: "History"};
let student3 = { yearOfStuding: 2 , facultyName: "Math"};
let student4 = { yearOfStuding: 4 , facultyName: "Computer Science"};
let student5 = { yearOfStuding: 1 , facultyName: "Math"};
let student6 = { yearOfStuding: 1 , facultyName: "Computer Science"};
let student7 = { yearOfStuding: 1 , facultyName: "Math"};
let student8 = { yearOfStuding: 4 , facultyName: "Math"};
let student9 = { yearOfStuding: 2 , facultyName: "History"};
let student10 = {yearOfStuding: 3 , facultyName: "Math"};

Students.push(student1,student2,student3,student4,student5,student6,student7,student8,student9,student10);
alert(Students);

function SumStuding(sumOfAges, current){
	return sumOfAges + current.yearOfStuding;
}

let sum = Students.reduce(SumStuding,0);
alert(sum);