let straal = document.getElementById("straal");
var opp = document.getElementById("oppervlakte");
var omtr = document.getElementById("omtrek");
var bereken = document.getElementById("bereken-oo");
var oppsom;
var omsom;

bereken.addEventListener('click', berekenen)

function berekenen() {
    if (isNaN(straal.value)){
        alert("Voer een getal in.");
        console.log("oof");

        opp.innerHTML = opp.innerHTML;
        omtr.innerHTML = omtr.innerHTML;
    } else {
        oppsom = Math.PI * (Math.pow(straal.value, 2));
        omsom = 2 * Math.PI * straal.value;

        opp.innerHTML = oppsom;
        omtr.innerHTML = omsom;
    }
}
