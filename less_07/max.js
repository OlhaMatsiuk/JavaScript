function redLink() {
	var elements = document.getElementsByTagName('a');

	for (var i = 0; i < elements.length; i++) {
		if (elements[i].innerHTML.includes('http')
				|| elements[i].innerHTML.includes('ftp')) {
			elements[i].classList.add("external-red");
		}

	}
}