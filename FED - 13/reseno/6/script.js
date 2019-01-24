var url = "?ime=sinisa&prezime=mihajlovic";

// Prvo odstranimo pocetni upitnik
url = url.substring(1, url.length+1);
// Zatim radimo split po znaku '&'
var splitovano = url.split("&");

// Rezultat funkcije split() je niz, tako da rezultate ispisujemo u petlji
for(var i=0; i<splitovano.length; i++) {
	document.write(splitovano[i] + "<br>");
}