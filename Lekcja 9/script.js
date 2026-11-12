"use strict";


let counter = 0;

let items = ["Postaw na czarny","Zjedz kebaba", "Jesteś magikiem", "Postawiłeś na czerwony i przegrałeś"]

function addPoint(){
    counter = counter + 1
    document.getElementById("counter-display").textContent = counter;
}

function reset(){
    counter = 0;
    document.getElementById("counter-display").textContent = counter;
}

function draw(){
    let index = Math.floor(Math.random() * items.length);
    document.getElementById("random-display").textContent = items[index];
}