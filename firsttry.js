
//Inhalte der spalten mit Klasse one verändern
var leftSide = document.querySelectorAll(".one");
for (var i = 0;i < leftSide.length; i++) {
    leftSide[i].style.background = "wheat";
    console.log("left");
}
var rightSide = document.querySelectorAll(".two");
for (var i = 0;i < rightSide.length; i++) {
    rightSide[i].style.background = "pink";
    console.log("huhu");
}
button1 = document.getElementById("btn1");
button2 = document.getElementById("btn2");
button3 = document.getElementById("btn3");
button4 = document.getElementById("btn4");

berechnet1 = document.getElementById("berechnet1");
berechnet2 = document.getElementById("berechnet2");
berechnet3 = document.getElementById("berechnet3");
berechnet4 = document.getElementById("berechnet4");

button1.addEventListener('click', addiereZahlen1);
button2.addEventListener('click', addiereZahlen2);
button3.addEventListener('click', addiereZahlen3);
button4.addEventListener('click', addiereZahlen4);

function addiereZahlen1 (){
    const myInput1l = parseInt(document.getElementById("input1l").value);
    const myInput1r = parseInt(document.getElementById("input1r").value);
    const ergebnis1 = myInput1l + myInput1r;
    console.log(ergebnis1);
    berechnet1.innerHTML += " " + ergebnis1;
}
function addiereZahlen2 (){
    const myInput2l = parseInt(document.getElementById("input2l").value);
    const myInput2r = parseInt(document.getElementById("input2r").value);
    const ergebnis2 = myInput2l + myInput2r;
    console.log(ergebnis2);
    berechnet2.innerHTML += " " + ergebnis2;
}
function addiereZahlen3 (){
    const myInput3l = parseInt(document.getElementById("input3l").value);
    const myInput3r = parseInt(document.getElementById("input3r").value);
    const ergebnis3 = myInput3l + myInput3r;
    console.log(ergebnis3);
    berechnet3.innerHTML += " " + ergebnis3;
}
