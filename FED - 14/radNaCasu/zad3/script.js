function ispisi(vrednost) {
	console.log(vrednost.value);
	console.log(vrednost[vrednost.selectedIndex].innerHTML);
	document.getElementById("placeholder").value = vrednost.value;
}

function insert() {
	var tmp = document.getElementById("placeholder").value;
	document.getElementById("secret").innerHTML = tmp;
	document.getElementById("secret").style.visibility = "visible";
}