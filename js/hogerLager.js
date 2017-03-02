'use strict'

var easy = 100, medium = 200, hard = 400

function randomNumber(difficulty = easy){
    return Math.floor((Math.random()*difficulty)+1)
}

function checkNumber(guess){
    switch (true){
        case (guess > random) : return "Lager!"
        case (guess < random) : return "Hoger!"
        default : return "Juist!"
    }
}

function guess(){
    var msg = checkNumber(document.getElementById("input").value)
    document.getElementById("gameMessagebox").childNodes[1].innerHTML = msg
}

var random = randomNumber()
document.getElementById("btn").onclick = guess; 