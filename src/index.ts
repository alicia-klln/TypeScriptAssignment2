

const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");
const button3 = document.getElementById("btn3");

var berechnet1 = document.querySelector<HTMLInputElement>("#ergebnisInput1");
var berechnet2 = document.querySelector<HTMLInputElement>("#ergebnisInput2");
var berechnet3 = document.querySelector<HTMLInputElement>("#ergebnisInput3");

var wertberechnet1 = parseInt(berechnet1!.value);
var wertberechnet2 = parseInt(berechnet2!.value);
var wertberechnet3 = parseInt(berechnet3!.value);

button1!.addEventListener('click', addiereZahlen1);
button2!.addEventListener('click', addiereZahlen2);
button3!.addEventListener('click', addiereZahlen3);

function addiereZahlen1 (){
    var clicked;
    clicked = 0;
    console.log(clicked);

    if (clicked < 1) {
        const myInput1l: number = parseInt(document.querySelector<HTMLInputElement>("#input1l")!.value);
        const myInput1r: number = parseInt(document.querySelector<HTMLInputElement>("#input1r")!.value);
        const ergebnis1: number = myInput1l + myInput1r;
        clicked++;
        console.log("Ergebnis 1: " + ergebnis1);
        wertberechnet1 = ergebnis1;

    }else {
        wertberechnet1 = 0;
    }
}

function addiereZahlen2 (){
    
    var clicked: number;
    clicked = 0;
    console.log(clicked);

    if (clicked < 1) {
        const myInput2l: number  = parseInt(document.querySelector<HTMLInputElement>("#input2l")!.value);
        const myInput2r: number  = parseInt(document.querySelector<HTMLInputElement>("#input2r")!.value);
        const ergebnis2: number  = myInput2l + myInput2r;
        clicked++;
        console.log("Ergebnis 2: " + ergebnis2);
        wertberechnet2 = ergebnis2;
    }else {
        wertberechnet2 = 0;
    }
}

function addiereZahlen3 (){
    var clicked;
    clicked = 0;
    console.log(clicked);

    if (clicked < 1) {
        const myInput3l: number = parseInt(document.querySelector<HTMLInputElement>("#input3l")!.value);
        const myInput3r: number = parseInt(document.querySelector<HTMLInputElement>("#input3r")!.value);
        const ergebnis3: number = myInput3l + myInput3r;
        clicked++;
        console.log("Ergebnis 3: " + ergebnis3);
        wertberechnet3 = ergebnis3;
    }else {
        wertberechnet3 = 0;
}
}
const deleteAll = document.getElementById("deleteAll");

deleteAll!.addEventListener('click', deletedAll);
function deletedAll() {
    wertberechnet1 = 0;
    wertberechnet2 = 0;
    wertberechnet3 = 0;  
}




//Zufallszahl würfeln

const wuerfelButton = document.getElementById("wuerfelbutton");
var ausgabeZahl1 = document.querySelector<HTMLInputElement>("#ausgabezahl1");
var ausgabeZahl2 = document.querySelector<HTMLInputElement>("#ausgabezahl2");
var ausgabeZahl3 = document.querySelector<HTMLInputElement>("#ausgabezahl3");
const resetButton = document.getElementById("resetbutton");

wuerfelButton!.addEventListener('click', wuerfeln);


var wurf = 0;
var pasch = 0;
var dreierPasch = 0;

function wuerfeln () {
    var zufallsZahl1;
    var zufallsZahl2;
    var zufallsZahl3;

    zufallsZahl1 = Math.floor(Math.random()* 6) + 1;
    zufallsZahl2 = Math.floor(Math.random()* 6) + 1;
    zufallsZahl3 = Math.floor(Math.random()* 6) + 1;

    console.log(zufallsZahl1 + " & " + zufallsZahl2 + " & " + zufallsZahl3);
    
    ausgabeZahl1!.value = zufallsZahl1;
    ausgabeZahl2!.value = zufallsZahl2;
    ausgabeZahl3!.value = zufallsZahl3;
    
    wurf++;
        
    if (zufallsZahl1 === zufallsZahl2 || 
        zufallsZahl1 === zufallsZahl3 ||  
        zufallsZahl2 === zufallsZahl3 ){
        pasch+= 1;
        console.log("Juhu ein Pasch!");        
    }
    if (zufallsZahl1 === zufallsZahl2 && zufallsZahl1 === zufallsZahl3 && zufallsZahl2 === zufallsZahl3){
        dreierPasch+= 1;  
        console.log("Super, sogar ein Dreierpasch!");  
             
    }
    if (wurf === pasch && wurf === dreierPasch && pasch === dreierPasch) {
        alert("Oha, was ein Glück. ")
    }

    document.getElementById("wurfAnzahl")!.value = wurf;
    document.getElementById("paschAnzahl")!.value = pasch;
    document.getElementById("dreierAnzahl")!.value = dreierPasch;

    resetButton!.addEventListener('click', reset);
    function reset() {
        wurf = 0;
        pasch = 0;
        dreierPasch = 0;
        ausgabeZahl1!.value = "";
        ausgabeZahl2!.value = "";
        ausgabeZahl3!.value = "";
        document.getElementById("wurfAnzahl")!.value = 0;
        document.getElementById("paschAnzahl")!.value = 0;
        document.getElementById("dreierAnzahl")!.value = 0;
    }
}


