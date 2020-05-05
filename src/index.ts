//Namen speichern
const namebestaetigen = document.getElementById("namenbestätigen");
namebestaetigen!.addEventListener('click', uebergebeName);

function uebergebeName() {
    const name = document.getElementById("namenseingabe")!.value;
    console.log(name);   

    var clicked;
    clicked = 0;

    if (clicked < 1) {
        if (name === "") {
            alert("Gib bitte deinen Namen ein.");
        }else {
            var anrede = document.getElementById("h2");
            var anrede2 = document.getElementById("anrede2");
            clicked++;
            anrede!.innerHTML = "Hallo " + name + "! Schön, dass du da bist!";
            anrede2!.innerHTML = "Überprüfe deine Ergebnisse, " + name;
        }    
    }
}
const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");
const button3 = document.getElementById("btn3");

var berechnet1 = document.getElementById("ergebnisInput1");
var berechnet2 = document.getElementById("ergebnisInput2");
var berechnet3 = document.getElementById("ergebnisInput3");

button1!.addEventListener('click', addiereZahlen1);
button2!.addEventListener('click', addiereZahlen2);
button3!.addEventListener('click', addiereZahlen3);

function addiereZahlen1 (){
    var clicked;
    clicked = 0;

    if (clicked < 1) {
        const myInput1l = parseInt(document.getElementById("input1l")!.value);
        const myInput1r = parseInt(document.getElementById("input1r")!.value);
        const ergebnis1 = myInput1l + myInput1r;
        clicked++;
        console.log("Ergebnis 1: " + ergebnis1);
        berechnet1!.value = ergebnis1;

    }else {
        berechnet1!.value = "";
    }
}
function addiereZahlen2 (){
    
    var clicked;
    clicked = 0;

    if (clicked < 1) {
        const myInput2l = parseInt(document.getElementById("input2l")!.value);
        const myInput2r = parseInt(document.getElementById("input2r")!.value);
        const ergebnis2 = myInput2l + myInput2r;
        clicked++;
        console.log("Ergebnis 2: " + ergebnis2);
        berechnet2!.value = ergebnis2;
    }else {
        berechnet2!.value = "";
    }
}
function addiereZahlen3 (){
    var clicked;
    clicked = 0;

    if (clicked < 1) {
        const myInput3l = parseInt(document.getElementById("input3l")!.value);
        const myInput3r = parseInt(document.getElementById("input3r")!.value);
        const ergebnis3 = myInput3l + myInput3r;
        clicked++;
        console.log("Ergebnis 3: " + ergebnis3);
        berechnet3!.value = ergebnis3;
    }else {
        berechnet3!.value = "";
    }
}
const deleteAll = document.getElementById("deleteAll");

deleteAll!.addEventListener('click', deletedAll);

function deletedAll() {
    berechnet1!.value = "";  
    berechnet2!.value = "";  
    berechnet3!.value = "";   
    document.getElementById("input1l")!.value = "";
    document.getElementById("input1r")!.value = "";
    document.getElementById("input2l")!.value = "";
    document.getElementById("input2r")!.value = "";
    document.getElementById("input3l")!.value = "";
    document.getElementById("input3r")!.value = "";

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


