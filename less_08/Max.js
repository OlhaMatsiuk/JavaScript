ull.onclick = function() {
	let elements = ull.getElementsByTagName("li");
	let display = elements[0].style.display;

	for (let i = 0; i < elements.length; i++) {
		if (display == "none") {
			elements[i].style.display = "block";
		} else {
			elements[i].style.display = "none";
		}
	}
}