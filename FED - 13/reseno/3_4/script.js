function sadrzi(string, drugiString) {
	// Provera da li je neki string sadrzan u nekom drugom radimo tako sto proverimo da li funkcija indexOf vraca -1
	// Da bi zanemarili velika i mala slova, spustimo oba stringau mala sa funkcijom toLowerCase()
	if(string.toLowerCase().indexOf(drugiString.toLowerCase()) != -1) {
		return true;
	}else {
		return false;
	}
}

var da_li_sadrzi =  sadrzi("Dobar dan", "dan");
document.write(da_li_sadrzi);