function abrirformt(){
    let forma = document.getElementById('formatador');

    if(forma.style.height == '250px') {

        forma = document.getElementById('formatador').style.height = '0px';

    } else {
        forma = document.getElementById('formatador').style.height = '250px';
    }
}

function clicou() {
    let formu = document.getElementById('campo').value;
    document.getElementById('campo-teste').innerHTML = formu;
}


function titleh1() {
    let formu = document.getElementById('campo').value;
    document.getElementById('campo-teste').innerHTML = '<h1>'+formu+'</h1>' ;

}
function titleh2() {
    let formu = document.getElementById('campo').value;
    document.getElementById('campo-teste').innerHTML = '<h3>'+formu+'</h3>' ;

}

function caracteres() {
    let caracte = document.getElementById('campo');

    caracte = toString(caracte);

    alert(caracte.length);
}