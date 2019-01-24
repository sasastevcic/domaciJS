var hotel = {
	naziv: "Hotel Park",
	adresa: "Novosadskog sajma 35",
	brojSoba: 150,
	rezervisano: 150,
	teretana: true,
	brojSlobodnihSoba: function() {
		var slobodno = this.brojSoba - this.rezervisano;
		return slobodno;
	},
	postoSlobodno: function() {
		var posto = ((this.brojSlobodnihSoba() / this.brojSoba) * 100).toFixed(1);
		return posto;
	}
};

document.getElementById("hotelName").textContent = hotel.naziv;
document.getElementById("hotelAddress").textContent = hotel.adresa;
document.getElementById("hotelCapacity").textContent = hotel.brojSoba;
if(hotel.brojSlobodnihSoba() == 0) {
	document.getElementById("hotelAvailability").textContent = "Nema";
	document.getElementById("hotelAvailability").setAttribute("class", "hotelData red");
}else {
	document.getElementById("hotelAvailability").textContent = hotel.postoSlobodno() + "%";
}


if(hotel.teretana == true) {
	document.getElementById("hotelGym").setAttribute("class", "hotelData green");
	document.getElementById("hotelGym").textContent = "Da";
}else {
	document.getElementById("hotelGym").setAttribute("class", "hotelData red");
	document.getElementById("hotelGym").textContent = "Ne";
}