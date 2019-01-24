
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