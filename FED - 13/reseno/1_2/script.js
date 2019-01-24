function generisiNaslove(pocetak, kraj) {
	// Ne primamo brojeve manje od 1 i vece od 6 (a ni pocetni broj ne sme biti veci od krajnjeg)
	if(pocetak<1 || kraj>6 || pocetak>kraj) {
		alert("Brojevi za generisanje nisu validni");
	}else {
		for(var i=pocetak; i<=kraj; i++) {
			document.write("<h" + i + ">Ovo je generisani naslov " + i + "</h" + i +">");
		}
	}
}

generisiNaslove(1, 6);