

var berechnet1 = document.querySelector<HTMLInputElement>("#ergebnisInput1");
var berechnet2 = document.querySelector<HTMLInputElement>("#ergebnisInput2");
var berechnet3 = document.querySelector<HTMLInputElement>("#ergebnisInput3");

export function addiereZahlen1 (){
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
export function addiereZahlen2 (){
    
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
export function addiereZahlen3 (){
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



export function deletedAll() {
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