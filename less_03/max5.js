function camelize(str){
	let arr = [];
	arr = str.split('-');
	console.log(arr);
	
	for(let i = 1; i < arr.length; i++){
		arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
	}
	
	console.log(arr);
	let str2 = arr.join("");
	return str2;
}

console.log(camelize("my-short-string"));