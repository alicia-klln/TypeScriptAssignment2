//Namen speichern
const namebestaetigen = document.querySelector<HTMLElement>("#namenbestätigen");
namebestaetigen!.addEventListener('click', uebergebeName);

function uebergebeName() {
    const name = document.querySelector<HTMLInputElement>("#namenseingabe")!.value;
    const nameFertig: string = name + "!";
    // console.log(name);
    var clicked: number;
    clicked = 0;

    if (clicked < 1) {
        if (name === "") {
            alert("Gib bitte deinen Namen ein.");
        }else {
            var anrede = document.querySelector<HTMLElement>("#h2");
            var anrede2 = document.querySelector<HTMLElement>("#anrede2");
            clicked++;
            anrede!.innerHTML = "Hallo " + nameFertig + " Schön, dass du da bist!";
            anrede2!.innerHTML = "Überprüfe deine Ergebnisse, " + nameFertig;
        }    
    }
}
// Rechentabelle
const button1 = document.querySelector<HTMLButtonElement>("#btn1");
const button2 = document.querySelector<HTMLButtonElement>("#btn2");
const button3 = document.querySelector<HTMLButtonElement>("#btn3");

var berechnet1 = document.querySelector<HTMLInputElement>("#ergebnisInput1");
var berechnet2 = document.querySelector<HTMLInputElement>("#ergebnisInput2");
var berechnet3 = document.querySelector<HTMLInputElement>("#ergebnisInput3");

button1!.addEventListener('click', addiereZahlen1);
button2!.addEventListener('click', addiereZahlen2);
button3!.addEventListener('click', addiereZahlen3);

//Berechnung 1. Zeile
function addiereZahlen1 (){
    var clicked: number;
    clicked = 0;

    if (clicked < 1) {
        const myInput1l: number = parseInt(document.querySelector<HTMLInputElement>("#input1l")!.value);
        const myInput1r: number = parseInt(document.querySelector<HTMLInputElement>("#input1r")!.value);
        const ergebnis1: number = myInput1l + myInput1r;
        // console.log("Ergebnis 1: " + ergebnis1);
        var berechnet1String = ergebnis1.toString();
        berechnet1!.value = berechnet1String;
    }
}
//Berechnung 2. Zeile
function addiereZahlen2 (){
    
    var clicked: number;
    clicked = 0;

    if (clicked < 1) {
        const myInput2l: number = parseInt(document.querySelector<HTMLInputElement>("#input2l")!.value);
        const myInput2r: number = parseInt(document.querySelector<HTMLInputElement>("#input2r")!.value);
        const ergebnis2: number = myInput2l + myInput2r;
        // console.log("Ergebnis 2: " + ergebnis2);
        var berechnet2String = ergebnis2.toString();
        berechnet2!.value = berechnet2String;
    }
}
//Berechnung 3. Zeile
function addiereZahlen3 (){
    var clicked: number;
    clicked = 0;

    if (clicked < 1) {
        const myInput3l: number = parseInt(document.querySelector<HTMLInputElement>("#input3l")!.value);
        const myInput3r: number = parseInt(document.querySelector<HTMLInputElement>("#input3r")!.value);
        const ergebnis3: number = myInput3l + myInput3r;
        // console.log("Ergebnis 3: " + ergebnis3);
        var berechnet3String = ergebnis3.toString();
        berechnet3!.value = berechnet3String;
    }
}

//Alle Inhalte löschen

const deleteAll= document.querySelector<HTMLElement>("#deleteAll");
deleteAll!.addEventListener('click', deletedAll);

function deletedAll() {
    berechnet1!.value = "";  
    berechnet2!.value = "";  
    berechnet3!.value = "";   
    document.querySelector<HTMLInputElement>("#input1l")!.value = "";
    document.querySelector<HTMLInputElement>("#input1r")!.value = "";
    document.querySelector<HTMLInputElement>("#input2l")!.value = "";
    document.querySelector<HTMLInputElement>("#input2r")!.value = "";
    document.querySelector<HTMLInputElement>("#input3l")!.value = "";
    document.querySelector<HTMLInputElement>("#input3r")!.value = "";

}


//Zufallszahlen würfeln

const wuerfelButton = document.querySelector<HTMLButtonElement>("#wuerfelbutton");
var ausgabeZahl1 = document.querySelector<HTMLInputElement>("#ausgabezahl1");
var ausgabeZahl2 = document.querySelector<HTMLInputElement>("#ausgabezahl2");
var ausgabeZahl3 = document.querySelector<HTMLInputElement>("#ausgabezahl3");
const resetButton = document.querySelector<HTMLButtonElement>("#resetbutton");

wuerfelButton!.addEventListener('click', wuerfeln);

var wurf: number = 0;
var pasch: number = 0;
var dreierPasch: number = 0;

function wuerfeln () {
    var zufallsZahl1: number;
    var zufallsZahl2: number;
    var zufallsZahl3: number;

    zufallsZahl1 = Math.floor(Math.random()* 6) + 1;
    zufallsZahl2 = Math.floor(Math.random()* 6) + 1;
    zufallsZahl3 = Math.floor(Math.random()* 6) + 1;

    // console.log(zufallsZahl1 + " & " + zufallsZahl2 + " & " + zufallsZahl3);

    var zufallsZahl1String = zufallsZahl1.toString();
    ausgabeZahl1!.value = zufallsZahl1String;

    var zufallsZahl2String = zufallsZahl2.toString();
    ausgabeZahl2!.value = zufallsZahl2String;

    var zufallsZahl3String = zufallsZahl3.toString();
    ausgabeZahl3!.value = zufallsZahl3String;

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
        alert("Oha, was ein Glück. Du hast beim ersten Wurf direkt 3 gleiche gewürfelt.")
    }

    var wurfAnzahl = document.querySelector<HTMLInputElement>("#wurfAnzahl"); 
    var wurfString = wurf.toString();
    wurfAnzahl!.value = wurfString;

    var paschAnzahl = document.querySelector<HTMLInputElement>("#paschAnzahl");
    var paschString = pasch.toString();
    paschAnzahl!.value = paschString;

    var dreierAnzahl = document.querySelector<HTMLInputElement>("#dreierAnzahl");
    var dreierString = dreierPasch.toString();
    dreierAnzahl!.value = dreierString;  
    
    // console.log(wurfString);
    // console.log(paschString);
    // console.log(dreierString);

    resetButton!.addEventListener('click', reset);
    
    function reset() {
        wurf = 0;
        pasch = 0;
        dreierPasch = 0;
        ausgabeZahl1!.value = "";
        ausgabeZahl2!.value = "";
        ausgabeZahl3!.value = "";
        wurfAnzahl!.value = "0";
        paschAnzahl!.value = "0";
        dreierAnzahl!.value = "0";
        console.clear();
    }
}


