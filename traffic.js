let redEl=document.getElementById("red");
let orangeEl=document.getElementById("orange");
let greenEl=document.getElementById("green");

function redclick(){
    redEl.style.background="red"
    orangeEl.style.background="gray"
    greenEl.style.background="gray"

}
function orangeclick(){
    redEl.style.background="gray"
    orangeEl.style.background="orange"
    greenEl.style.background="gray"


}
function greenclick(){
    redEl.style.background="gray"
    orangeEl.style.background="gray"
    greenEl.style.background="green"

}