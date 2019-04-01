let celIn = document.getElementById("celsiusIn");
let fahrOutCel = document.getElementById("fahrOutCel");
var klevinOut = document.getElementById("klevinOut");
var bereken = document.getElementById("berekenCelIn");
var celToKalSom;
var celToFahrSom;

bereken.addEventListener('click', berekenen)

function berekenen() {
    if (isNaN(celIn.value)){
        alert("Voer een getal in.");

        fahrOutCel.innerHTML = fahrOutCel.innerHTML;
        klevinOut.innerHTML = klevinOut.innerHTML;
    } else {
        celToKalSom = celIn.value += 273;
        celToFahrSoma = 9*celIn.value/5;


        klevinOut.innerHTML = celToKalSom;
        fahrOutCel.innerHTML = celToFahrSom;
    }
}
