

const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");
const button3 = document.getElementById("btn3");

const berechnet1= document.getElementById("berechnet1");
const berechnet2= document.getElementById("berechnet2");
const berechnet3= document.getElementById("berechnet3");

button1!.addEventListener('click', addiereZahlen1);
button2!.addEventListener('click', addiereZahlen2);
button3!.addEventListener('click', addiereZahlen3);


function addiereZahlen1 (){
    
    const myInput1l: number = parseInt(document.querySelector<HTMLInputElement>("#input1l")!.value);
    const myInput1r: number = parseInt(document.querySelector<HTMLInputElement>("#input1r")!.value);
    const ergebnis1: number = myInput1l + myInput1r;
    console.log(ergebnis1);
    berechnet1!.innerHTML += " " + ergebnis1;
}
function addiereZahlen2 (){
    const myInput2l = parseInt(document.querySelector<HTMLInputElement>("#input2l")!.value);
    const myInput2r = parseInt(document.querySelector<HTMLInputElement>("#input2r")!.value);
    const ergebnis2 = myInput2l + myInput2r;
    console.log(ergebnis2);
    berechnet2!.innerHTML += " " + ergebnis2;
}
function addiereZahlen3 (){
    const myInput3l: number  = parseInt(document.querySelector<HTMLInputElement>("#input3l")!.value);
    const myInput3r: number = parseInt(document.querySelector<HTMLInputElement>("#input3r")!.value);
    const ergebnis3: number = myInput3l + myInput3r;
    console.log(ergebnis3);
    berechnet3!.innerHTML += " " + ergebnis3;
}
