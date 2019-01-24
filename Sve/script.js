//Zadatak 1

/*
var x = 3;
var y = -4;
var z = x - y;

if(x + y > 0){
    console.log('Zbir je pozitivan')
} else if(x - y > 0) {
    console.log('Razlika je pozitivan')
}

if(x * z > 15 && y < 0){
    console.log('Proizvod je veci od 15')
} else {
    console.log('Proizvod je veci')
}
*/


//Zadatak 2

/*
var x = 9;

switch(x){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('Zadata vrednost je izmedju 1 i 5 i ona je ' + x);
        break;
    case 8:
    case 9:
    case 10:
        console.log('Zadata vrednost je izmedju 8 i 10 i ona je ' + x);
        break;
    default:
        console.log('Zadata vrednost nije u opsegu')
}
*/

//Zadatak 3

/*
var x = -7;
var y = 1;

while(x + y < 1){
    y++;
    console.log(y)
}
*/

//Zadatak 4

/*
for(var i = 0; i < 11; i++){
    if(i % 2 == 0){
        console.log(i)
    }
}
*/

//Zadatak 5

/*
var niz = ["saab", "volvo", "mercedes"];

for(var i = 0; i < niz.length; i++){
    console.log(niz[i])
}
*/

//Zadatak 6

/*
var niz = ["saab", "volvo", "mercedes"];

for(var i = 0; i < niz.length; i++){
    if(niz[i] == 'volvo'){
        console.log(niz[i])
        break;
    }
}
*/

//Zadatak 7

/*
var niz = ["saab", "volvo", "mercedes"];

for(var i = 0; i < niz.length; i++){
    if(niz[i] == 'volvo'){
        continue;
    }
    console.log(niz[i])
}
*/

//Zadatak 8

/*
for(var i = 0; i < 22; i++){
    if(i % 3 == 0){
        console.log(i)
    }
}
*/

//Zadatak 9

/*
var niz = [2, 4, 5, 6, 8];

var avg = 0;
var sum = 0;
var times = 0

for(var i = 0; i < niz.length; i++){
    sum += niz[i];
    times++;
}
avg = sum / times;

console.log(avg)
*/

//Zadatak 10

/*
var niz = [2, 4, 5, 6, 8];

for(var i = 0; i < niz.length; i++){
    if(niz[i] == 5){
        console.log(niz[i])
        break;
    } 
}
*/

//Zadatak 11

/*
var niz1 = [2, 7, 9, 9, 7, 2];
var niz2 = [5, 2, 3, 3, 7, 5];

var flag = true;

for(var i = 0; i < niz1.length / 2; i++){
    if(niz1[i] != niz1[niz1.length - 1 - i]){
        flag = false;
        console.log('Niz 1 nije simetrican')
    }
}
if(flag){
    console.log('Niz 1 je simetrican')
}

var flag = true;

for(var i = 0; i < niz2.length / 2; i++){
    if(niz2[i] != niz2[niz2.length - 1 - i]){
        flag = false;
        console.log('Niz 2 nije simetrican')
    }
}
if(flag){
    console.log('Niz 2 je simetrican')
}
*/

//Zadatak 12
/*
var m = [
    [0, 1, 2, 3],
    [0, 0, 2, 3],
    [0, 0, 0, 1],
    [0, 1, 1, 1]
]


for(var i = 0; i < m.length; i++){
    var brNula = 0;
    for(var j = 0; j < m[i].length; j++){
        if(m[i][j] == 0){
            brNula += 1;
        }
    }
    console.log('Red ' + i + ' ima ' + brNula + ' nula')
}
*/

//Zadatak 13 i 14

/*
var niz = [0.1, 0.2, 0.02, 0.12, 0.0012];

var najmanji = niz[0];
var najveci = niz[0];

for(var i in niz){
    if(niz[i] > najveci){
        najveci = niz[i];
    }
}

for(var i in niz){
    if(niz[i] < najmanji){
        najmanji = niz[i];
    }
}

console.log(najmanji);
console.log(najveci);
*/

//Zadatak 15

/*
var m = [
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [3, 4, 5, 6],
    [4, 5, 6, 7]
]

var najveciD = 0;

for(var i = 0; i < m.length; i++){
    for(var j = 0; j < m[i].length; j++){
        if(i == j){
            if(m[i][j] > najveciD){
                najveciD = m[i][j];
            }
        }
    }
}

console.log(najveciD)
*/

//Zadatak 16

/*
var m = [];

var vrsta = 5;
var kolona = 5;

for(var i = 0; i < vrsta; i++){
    m[i] = [];
    for(var j = 0; j < kolona; j++){
        m[i][j] = j + 1;
    }
}
console.log(m)
*/

//Zadatak 17

/*
var vocke1 = ["banana", "kruska", "jabuka"];
var vocke2 = ["tresnja", "sljiva", "jagoda"];
var vocke3 = [];

for(var i in vocke1){
    vocke3.push(vocke1[i]);
}
for(var i in vocke2){
    vocke3.push(vocke2[i]);
}

console.log(vocke3)
*/

//Zadatak 18

/*
var vocke1 = ["banana", "kruska", "jabuka", "sljiva"];
var vocke2 = ["tresnja", "sljiva", "jagoda", "kupina", "malina"];
var vocke3 = [];

for(var i in vocke1){
    vocke3.push(vocke1[i]);
}

for(var i in vocke2){
    if(!vocke3.includes(vocke2[i])){
        vocke3.push(vocke2[i])
    }
}

console.log(vocke3)
*/

//Zadatak 19

/*
var automobili = [ 
    ["mercedes", "b"], 
    ["opel", "d"], 
    ["toyota", "d"], 
    ["bmw", "b"], 
    ["volvo", "d"]
];

var benzin = [];
var dizel = [];

for(var i in automobili){
    if(automobili[i][1] == 'b'){
        benzin.push(automobili[i][0]);
    } else {
        dizel.push(automobili[i][0]);
    }
}
console.log(benzin)
console.log(dizel)
*/

//Zadatak 20, 21, 22

/*
var zaposleni = [
    ["pera", "jova", "marko"],
    [28,      31,     19]
];

for(var i = 0; i < zaposleni[0].length; i++){
    console.log('Zaposleni ' + zaposleni[0][i] + ' ima godina ' + zaposleni[1][i])
}

for(var i = 0; i < zaposleni.length; i++){
    for(var j = 0; j < zaposleni[i].length; j++){
        if(zaposleni[i][j] == 'jova'){
            console.log('Zaposleni ' + zaposleni[i][j] + ' ima godina ' + zaposleni[1][j])
        }
    }
}

var sum = 0;
var times = 0;
var avg = 0;

for(var i = 0; i < zaposleni[1].length; i++){
    sum += zaposleni[1][i];
    times++;
}

avg = sum / times;
console.log(avg)
*/

//Zadatak 23

/*
var zaposleni = [
    ["pera",      "jova",     "marko"],
    [28,          31,         39],
    ["inzenjer",  "tehnicar", "doktor"],
    [700,         0,        0]
];

for(var i = 0; i < zaposleni.length; i++){
    for(var j = 0; j < zaposleni[i].length; j++){
        if(zaposleni[i][j] == 700){
            zaposleni[i][j+1] = zaposleni[i][j] * 0.7;
            zaposleni[i][j+2] = zaposleni[i][j] / 2 + zaposleni[i][j+1];
        }
    }
}

for(var i = 0; i < zaposleni[0].length; i++){
    console.log('Zaposleni ' + zaposleni[0][i] + ' je ' + zaposleni[2][i] + ' i ima platu ' + zaposleni[3][i] + '$')
}
*/

//Zadatak 24

/*
var zaposleni = [
    ["pera",      "jova",     "marko"],
    [28,          31,         39],
    ["inzenjer",  "tehnicar", "doktor"],
    [700,         0,        0]
];

var d = new Date();
var godina = d.getFullYear();

var godiste = [];

for(var i = 0; i < zaposleni[1].length; i++){
    var g = zaposleni[1][i];
    godiste.push(godina - g);
}

console.log(godiste)
zaposleni.push(godiste)
console.log(zaposleni)
*/

//Zadatak 25

/*
var m = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

glavna = 0;
sporedna = 0;



for(var i = 0; i < m.length; i++){
    for(var j = 0; j < m[i].length; j++){
        if(i == j){
            glavna += m[i][j];
        }
    }
}

for(var i = 0; i < m.length; i++){
    for(var j = 2; j >= 0; j--){
        if(i == 2 - j){
            sporedna += m[i][j];
        }
    }
}

ukupno = glavna + sporedna;

console.log(ukupno)
*/

//Zadatak 26

/*
var m = [
    [1, 2, 3, 5],
    [4, 5, 6, 8],
    [7, 8, 9, 9],
    [8, 5, 3, 1]
]

var kolona = 0;
var red = 0;

for(var i = 0; i < m.length; i++){
    kolona += m[i][1];
}
for(var i = 0; i < m.length; i++){
    red += m[2][i];
}

ukupno = kolona + red;
console.log(ukupno)
*/

//Zadatak 27

/*
var m = [
    [1, 2, 3, 5],
    [4, 5, 6, 8],
    [7, 8, 9, 9],
    [8, 5, 3, 1]
]

var rezultat = 0;
for (i = 0; i < 4; i++) {
    for (j = 0; j < 4; j++) {
        if (matrica[i][j] % 2 == 0) {
        	rezultat += matrica[i][j];
        }
    }
}

console.log("Rez je " + rezultat);

*/

//Zadatak 28

/*
var m = [
    [1, 2, 3, 5],
    [4, 5, 6, 8],
    [7, 8, 9, 9],
    [8, 5, 3, 1]
]

for(var i = 0; i < m.length; i++){
    for(var j = 0; j < m[i].length; j++){
        if(m[i][j] == 3){
            m[i][j] = 0;
        } else if(m[i][j] == 5) {
            m[i][j] = -1;
        }
    }
}
console.log(m)
*/

//Zadatak 29

/*
var degreesF = 60;
var degreesC = (degreesF - 32) * 5 / 9;
document.write(degreesF + " stepeni farenhajta je " + Math.round(degreesC) + " stepeni celzijusa.<br>");

//Zadatak 30
for (var i = 0; i <= 100; i+=10) {
    var c = i;
    var f = c * 9/5 + 32;
    document.write(c + " stepeni celzijusa je " + Math.round(f) + " stepeni farenhajta.<br>");
}

*/

//Zadatak 30

/*
var user_pass_list = [];

function addToList(parameter) {
	var p = parameter.split("|");
	user_pass_list.push(p);
}

addToList("pera|peric");
addToList("marko|markovic");

for (var index in user_pass_list) {
	var new_list = user_pass_list[index];
	document.write("Korisnicko ime je " + new_list[0] + "<br>");
	document.write("Lozinka je " + new_list[1]  + "<br>");
}
*/

//Zadatak 31

/*
function spojiStringove(par1, par2) {
    var z = par1.substring(0, 3);
    var z2 = par2.substring(par2.length - 3);

    var z3 = z + z + z2;
    document.write(z3);
}

// Drugi nacin 
function spojiStringove2(par1, par2) {
    var z = par1.substring(0, 3);
    var z2 = par2.substring(par2.length - 3);

    var array = [];
    for (var i = 0; i < 2; i++) {
        array[i] = z;
    }

    //["abc", "abc"]
    var result = array.join('');
    var z3 = result + z2;
    return z3;
}

var z3 = spojiStringove2("abcdef", "ghijkl");
document.write(z3 + "<br>");
*/

//Zadatak 32

/*
function akronimFja(parametar1) {
    var splitted = parametar1.split(" ");
    var akronim = "";

    for (var index in splitted) {
        // var n = splitted[index];
        // akronim += n[0];
        akronim += splitted[index][0];
    }



    return akronim.toUpperCase();
}
var x = akronimFja("random access memory");
document.write(x);
*/

//Zadatak 33

/*
function student(oc, podaci) {
	var suma = 0;
	// duzinu niza putem length atributa
	var duzina_niza = oc.length;
	for (var i = 0; i < oc.length; i++) {
		suma += oc[i];
	}

	var srednja_vrednost = suma / duzina_niza;
	return "Student " + podaci[0] + " " + podaci[1] + ", sa prosekom " 
		+ srednja_vrednost;
}

var ocene = [8, 7, 6, 9, 8, 10, 8];
var ime_prez = ["Marko", "Markovic"];

var rez = student(ocene, ime_prez);
console.log(rez);
*/

//Zadatak 34

/*
var drzave = { 1 : "RS" , 2 : "RU" , 3 : "UK", 4 : "ESP" };
var gradovi = [ ["London", 3], ["Novi Sad", 1], ["Moskva", 2], ["Madrid", 4]];

for (var i in gradovi) {
	var grad = gradovi[i];
	var drzava = drzave[grad[1]];
	document.write(grad[0] + " - " + drzava + "<br>");
}
*/

//Zadatak 35

/*
function html(broj){
    var niz = [1, 2, 3, 4, 5, 6];
    niz.length = broj;
    for(var i in niz){
        document.write('<h' + niz[i] + '>Ovo je generisani naslov</h' + niz[i] + '>');
    }
}
html(4);
*/

//Zadatak 36

/*
function html(br1, br2){
    var niz = [1, 2, 3, 4, 5, 6];
    var noviNiz = niz.slice(br1 - 1, br2);
    for(var i in noviNiz){
        document.write('<h' + noviNiz[i] + '>Ovo je generisani naslov</h' + noviNiz[i] + '>');
    }
}
html(2, 4);

*Drugi nacin*

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

*/

//Zadatak 37

/*
function oslonac(prvi, drugi){
    if(prvi.toLowerCase().indexOf(drugi.toLowerCase()) != -1){
        return true;
    } else {
        return false;
    }
}

var da_li_sadrzi =  oslonac("Dobar dan", "dan");
document.write(da_li_sadrzi);

*Drugi nacin*

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

var i = oslonac('dobar dan', '22');
console.log(i)
*/

//Zadatak 38

/*
function matBr(jmbg){
    if(jmbg.length != 13){
        return false;
    }
    var dan = 0;
    var mesec = 0;
    var godina = 0;
    var pol = 0;
    dan = jmbg.substring(0, 2);
    mesec = jmbg.substring(2, 4);
    godina = '1' + jmbg.substring(4, 7);
    pol = jmbg.substring(9, 12);
    
    if(pol < 500){
        pol = 'muski';
    } else {
        pol = 'zenski';
    }

    
    console.log('Datum rodjenja: ' + dan + '.' + mesec + '.' + godina + '. Pol: ' + pol);
}

matBr('2010990800041');
matBr('211099080501');
matBr('2210990805001');
matBr('2310990804991');

*Drugi nacin*

var JMBG = "1512003305745"

var dan = JMBG.substring(0, 2);
var mesec = JMBG.substring(2,4);
var godina = JMBG.substring(4,7);

	Gruba aproksimacija:
		- 	Posto godini rodjenja fali prva cifra, smatracemo da, ako je godina rodjena veca od 800, osoba je rodjena u
			20. veku, pa treba dodati 1 na pocetak. Inace dodajemo 2.

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
*/


//Zadatak 39

/*
var ime = [];

function adresa(url){
    var naziv = url.split('&');
    ime.push(naziv);

    for(var i in ime){
        var punoIme = ime[i][0];
        var sinisa = punoIme.slice(1);
        
        document.write(sinisa + '<br>');
        document.write(ime[i][1]);

    }
}

adresa('?ime=sinisa&prezime=mihajlovic');

*Drugi nacin*

var url = "?ime=sinisa&prezime=mihajlovic";

// Prvo odstranimo pocetni upitnik
url = url.substring(1, url.length+1);
// Zatim radimo split po znaku '&'
var splitovano = url.split("&");

// Rezultat funkcije split() je niz, tako da rezultate ispisujemo u petlji
for(var i=0; i<splitovano.length; i++) {
	document.write(splitovano[i] + "<br>");
}
*/

//Zadatak 40

/*
function weekend(dan){
    var danas = new Date();
    var dan = danas.getDay(); // 0 - nedelja, 6 - subota
    
    var ostaloDana = 6 - dan;

    document.write("Preostalo dana do subote " + ostaloDana);
}

weekend('1');

*Drugi nacin*

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
*/

//Zadatak 41

/*
function click(){
    document.write("Hello world");
}



function click(ime, prezime){
    return document.write("Hello "+ ime + prezime);
}


function ispisi(select){
    var ispis = select.value;
    document.getElementById('input').value = ispis;
}

function insert(){
    var tmp = document.getElementById('input').value;
    document.getElementById('secret').innerHTML = tmp;
    document.getElementById('secret').style.visibility = 'visible';
}
*/
