var JMBG = "1512003305745"

var dan = JMBG.substring(0, 2);
var mesec = JMBG.substring(2,4);
var godina = JMBG.substring(4,7);
/*
	Gruba aproksimacija:
		- 	Posto godini rodjenja fali prva cifra, smatracemo da, ako je godina rodjena veca od 800, osoba je rodjena u
			20. veku, pa treba dodati 1 na pocetak. Inace dodajemo 2.
*/
if(godina > 800) {
	godina = "1" + godina;
}else {
	godina = "2" + godina;
}

var pol = JMBG.substring(9, 12);
if(pol < 500) {
	pol = "Muski";
}else {
	pol = "Zenski"
}

document.write("<h1>Analiza JMBG: " + JMBG + "</h1>");
document.write("<b>Datum rodjena: </b>" + dan + "." + mesec + "." + godina + ".")
document.write("<br><b>Pol:</b> " + pol);