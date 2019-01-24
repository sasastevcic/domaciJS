var automobil = {
	marka: "Opel",
	model: "Astra", 
	upaljen: false,
	snaga: 70,
	boja: "Zelena",
	upali: function() {
		this.upaljen = true;
	},
	ugasi: function() {
		this.upaljen = false
	},
	prefarbaj: function(novaBoja) {
		this.boja = novaBoja;
	}
}

automobil.upali()
automobil.prefarbaj("Crvena");

document.write("Podaci o automobilu:<br>");
document.write("Marka: " + automobil.marka + "<br>");
document.write("Model: " + automobil.model + "<br>");
document.write("Snaga: " + automobil.snaga + "KS<br>");
document.write("Boja: " + automobil.boja + "<br>");
document.write("Upaljen: ")
if(automobil.upaljen == true) {
	document.write("DA<br>");
}else {
	document.write("NE<br>");
}
