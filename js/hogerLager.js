'use strict'

var easy = 100, medium = 200, hard = 400

function randomNumber(difficulty = easy){
    return Math.floor((Math.random()*difficulty)+1)
}

function checkNumber(guess){
    switch (true){
        case(guess == ""): return "Voer een getal in!"
        case (guess > random) : return "Lager!"
        case (guess < random) : return "Hoger!"
        case (guess == random) : return "Juist!"
        default: return "Dit is geen getal!"
    }
}

function guess(){
    var msg = checkNumber(document.getElementById("input").value)
    document.getElementById("gameMessagebox").childNodes[1].innerHTML = msg
}

function generateRandom(){
    switch(document.getElementById("difficulty").value){
        case ("easy"):random = randomNumber(easy);document.getElementById("gameTitle").childNodes[3].innerHTML = "kies een getal tussen 1 en 100"; break;
        case ("medium"):random = randomNumber(medium);document.getElementById("gameTitle").childNodes[3].innerHTML = "kies een getal tussen 1 en 200"; break;
        case ("hard"): random = randomNumber(hard);document.getElementById("gameTitle").childNodes[3].innerHTML = "kies een getal tussen 1 en 400"; break;
    }
}

var random = randomNumber()

document.getElementById("btn").onclick = guess; 
document.getElementById("difficulty").onchange = generateRandom;