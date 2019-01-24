var danas = new Date();
var dan = danas.getDay();

// Dani u vikendu su (brojevi koje nam vrati funkcija getDay())
//	6 - subota
//	0 - nedelja
// Kada proveravamo, mozemo odmah nedelju da preskocimo, tako da racunamo samo za dane 1-6
if(dan > 0) {
	razlika = 6 - dan;
}else {
	razlika = 0;
}

document.write("Ostalo je jos " + razlika + " dana do vikenda.")