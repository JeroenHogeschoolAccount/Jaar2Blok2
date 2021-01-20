// JavaScript Document


var vierkant = document.getElementById("vierkant");

// Button dat het vierkant laat zien
var button = document.getElementById("menubutton");

// kruisje dat de vierkant laat verdwijnen
var kruisje = document.getElementsByClassName("kruisje")[0];


/*
// wanneer op de button wordt gedrukt komt de vierkant tevoorschijn
button.onclick = function() {
  vierkant.style.display = "block";
}

// wanneer op het kruisje wordt gedrukt verdwijnt de vierkant
kruisje.onclick = function() {
  vierkant.style.display = "none";
}
*/


button.addEventListener("click", zien); 

function zien(){
    vierkant.classList.add = ("block");
}

kruisje.addEventListener("click", weg); 

function weg(){
    vierkant.classList.add = ("none");
}

        

/*
kruisje.addEventListener("click", function() {
    vierkant.style.display = "none";
}
*/




