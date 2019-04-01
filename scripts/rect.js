let lengte = document.getElementById("lengte");
let breedte = document.getElementById("breedte");
var opp = document.getElementById("oppervlakte");
var omtr = document.getElementById("omtrek");
var diagonaal = document.getElementById("diagonaal");
var bereken = document.getElementById("bereken-ood");
var oppsom;
var omsom;
var dsoma;
var dsomb;

bereken.addEventListener('click', berekenen)

function berekenen() {
    if (isNaN(lengte.value) || isNaN(breedte.value)){
        alert("Voer een getal in.");

        opp.innerHTML = opp.innerHTML;
        omtr.innerHTML = omtr.innerHTML;
        dsom.innerHTML = dsom.innerHTML;
    } else if (lengte.value == '' || breedte.value == ''){
        alert("Er is geen breedte en/of lengte ingevoerd")
    } else {
        oppsom = lengte.value * breedte.value;
        omsom = 2 * lengte.value + 2 * breedte.value;
        dsoma = Math.pow(lengte.value, 2) * Math.pow(breedte.value, 2);
        console.log(dsoma);

        dsomb = Math.sqrt(dsoma);
        console.log(dsomb);


        opp.innerHTML = oppsom;
        omtr.innerHTML = omsom;
        diagonaal.innerHTML = dsomb;
    }
}
