//Namen speichern
const namebestaetigen = document.querySelector<HTMLElement>("#namenbestätigen");
namebestaetigen!.addEventListener('click', uebergebeName);

function uebergebeName() {
    const name = document.querySelector<HTMLInputElement>("#namenseingabe")!.value;
    console.log(name);

    var clicked: number;
    clicked = 0;

    if (clicked < 1) {
        if (name === null) {
            alert("Gib bitte deinen Namen ein.");
        }else {
            var anrede = document.querySelector<HTMLElement>("#h2");
            var anrede2 = document.querySelector<HTMLElement>("#anrede2");
            clicked++;
            anrede!.innerHTML = "Hallo " + name + "! Schön, dass du da bist!";
            anrede2!.innerHTML = "Überprüfe deine Ergebnisse, " + name;
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
    var clicked;
    clicked = 0;

    if (clicked < 1) {
        const myInput1l: number = parseInt(document.querySelector<HTMLInputElement>("#input1l")!.value);
        const myInput1r: number = parseInt(document.querySelector<HTMLInputElement>("#input1r")!.value);
        const ergebnis1: number = myInput1l + myInput1r;
        clicked++;
        console.log("Ergebnis 1: " + ergebnis1);
        let berechnet1Value: any = berechnet1!.value;
        berechnet1Value = ergebnis1;

    }else {
        berechnet1!.value = "";
    }
}
//Berechnung 2. Zeile
function addiereZahlen2 (){
    
    var clicked;
    clicked = 0;

    if (clicked < 1) {
        const myInput2l: number = parseInt(document.querySelector<HTMLInputElement>("#input2l")!.value);
        const myInput2r: number = parseInt(document.querySelector<HTMLInputElement>("#input2r")!.value);
        const ergebnis2: number = myInput2l + myInput2r;
        clicked++;
        console.log("Ergebnis 2: " + ergebnis2);
        let berechnet2Value: any = berechnet2!.value;
        berechnet2Value = ergebnis2;
    }else {
        berechnet2!.value = "";
    }
}
//Berechnung 3. Zeile
function addiereZahlen3 (){
    var clicked;
    clicked = 0;

    if (clicked < 1) {
        const myInput3l: number = parseInt(document.querySelector<HTMLInputElement>("#input3l")!.value);
        const myInput3r: number = parseInt(document.querySelector<HTMLInputElement>("#input3r")!.value);
        const ergebnis3: number = myInput3l + myInput3r;
        clicked++;
        console.log("Ergebnis 3: " + ergebnis3);
        var berechnet3Value: any = berechnet3!.value;
        berechnet3Value = ergebnis3;
    }else {
        berechnet3Value = "";
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


//Zufallszahl würfeln

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
    var zufallsZahl1: any;
    var zufallsZahl2: any;
    var zufallsZahl3: any;

    zufallsZahl1 = Math.floor(Math.random()* 6) + 1;
    zufallsZahl2 = Math.floor(Math.random()* 6) + 1;
    zufallsZahl3 = Math.floor(Math.random()* 6) + 1;

    console.log(zufallsZahl1 + " & " + zufallsZahl2 + " & " + zufallsZahl3);
    
    var ausgabeZahl1Value: any = ausgabeZahl1!.value;
    ausgabeZahl1Value = zufallsZahl1;
    var ausgabeZahl2Value: any = ausgabeZahl2!.value;
    ausgabeZahl2Value = zufallsZahl2;
    var ausgabeZahl3Value: any = ausgabeZahl3!.value;
    ausgabeZahl3Value = zufallsZahl3;
    wurf++;
    // console.log("Zahl1 " + zufallsZahl1);
    // ausgabeZahl1 = zufallsZahl1;
        
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

    var wurfAnzahl = document.querySelector<HTMLInputElement>("#wurfAnzahl")!.value;
    var wurfValue: any = wurfAnzahl;
    wurfValue = wurf;   

    var paschAnzahl = document.querySelector<HTMLInputElement>("#paschAnzahl")!.value;
    var paschValue: any = paschAnzahl;
    paschValue = pasch;  

    var dreierAnzahl = document.querySelector<HTMLInputElement>("#dreierAnzahl")!.value;
    var dreierValue: any = dreierAnzahl;
    dreierValue = dreierPasch;  
    
    console.log(wurfValue);
    console.log(paschValue);
    console.log(dreierValue);

    resetButton!.addEventListener('click', reset);
    function reset() {
        wurf = 0;
        pasch = 0;
        dreierPasch = 0;
        var ausgabeZahl1Value: any = 0;
        ausgabeZahl1Value = ausgabeZahl1;
        var ausgabeZahl2Value: any = 0;
        ausgabeZahl2Value = ausgabeZahl2;
        var ausgabeZahl3Value: any = 0;
        ausgabeZahl3Value = ausgabeZahl3;
        var wurfValue: any = 0;
        wurfValue = wurfAnzahl;
        var paschValue: any = 0;
        paschValue = paschAnzahl;
        var dreierValue: any = 0;
        dreierValue = dreierAnzahl;
    }
}


