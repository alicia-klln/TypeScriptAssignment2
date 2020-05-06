var ausgabeZahl1 = document.querySelector<HTMLInputElement>("#ausgabezahl1");
var ausgabeZahl2 = document.querySelector<HTMLInputElement>("#ausgabezahl2");
var ausgabeZahl3 = document.querySelector<HTMLInputElement>("#ausgabezahl3");
const resetButton = document.querySelector<HTMLButtonElement>("#resetbutton");

var wurf: number = 0;
var pasch: number = 0;
var dreierPasch: number = 0;

export function wuerfeln () {
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