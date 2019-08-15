function find(arr, value){
	let flag;
	
	for(let i = 0; i < arr.length; i++){
		if(arr[i] == value)
			flag = i;
	}
	if(flag >= 0)
		console.log(flag);
	else console.log(-1);
}

let arr = [9,0,5,6,7,11];
let value1= 111;
let value2= 5;

find(arr,value1);
find(arr,value2);