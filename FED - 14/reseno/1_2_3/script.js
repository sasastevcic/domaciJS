var hotel = {
	naziv: "Hotel Park",
	adresa: "Novosadskog sajma 35",
	brojSoba: 140,
	rezervisano: 60,
	teretana: false,
	brojSlobodnihSoba: function() {
		var slobodno = this.brojSoba - this.rezervisano;
		return slobodno;
	},
	rezervisi: function(broj) {
		// Ako je broj zeljenih rezervacija manji ili jednak od broja slobodnih soba, moze se izvrsiti rezervacija
		if(broj <= this.brojSlobodnihSoba()) {
			this.rezervisano += broj;
		}else {
			// Ako nije, ispisemo poruku da ne moze
			alert("Nije moguce rezervisati toliko soba.");
		}
	},
	izracunajCenu: function(brojNocenja) {
		var cena = brojNocenja * 200;
		return cena;
	}
};
/*
	Nakon kreiranja objekta, rezervisemo 15 soba.
	Ovih 15 ce se dodati na inicijalnih 60, tako da ostaje 65 slobodno (140 - 75).
*/
hotel.rezervisi(15);

document.write("Podaci o hotelu:<br>");
document.write("Naziv: " + hotel.naziv + "<br>");
document.write("Adresa: " + hotel.adresa + "<br>");
document.write("Kapacitet: " + hotel.brojSoba + "<br>");
document.write("Teretana: ")
if(hotel.teretana == true) {
	document.write("DA<br>");
}else {
	document.write("NE<br>");
}
document.write("Broj slobodnih soba: " + hotel.brojSlobodnihSoba() + "<br>");

document.write("5 nocenja: " + hotel.izracunajCenu(5) + " dinara. ");