

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
    if (ergebnis1 > 100){
        alert("Deine Zahl ist ja ganz schön groß");
    }
}

function addiereZahlen2 (this: any){
    

    const myInput2l = parseInt(document.querySelector<HTMLInputElement>("#input2l")!.value);
    const myInput2r = parseInt(document.querySelector<HTMLInputElement>("#input2r")!.value);
    
    var clicked: number;
    clicked = 0;

    if(clicked < 2){
        clicked++;
        var ergebnis2 = myInput2l + myInput2r;
        ergebnis2 = parseInt(this.ergebnis2);
        console.log(ergebnis2);
        berechnet2!.innerHTML += " " + ergebnis2;
    }
    else{
        document.getElementById("btn2")!.disabled = true; 
    }
    document.getElementById("btn2")!.disabled = true; 
}

function addiereZahlen3 (){
    const myInput3l = parseInt(document.querySelector<HTMLInputElement>("#input3l")!.value);
    const myInput3r: number = parseInt(document.querySelector<HTMLInputElement>("#input3r")!.value);
    const ergebnis3: number = myInput3l + myInput3r;
    if (myInput3l !< 0) {
        alert("Bitte gib Zahlen ein");
    } else {
        console.log(ergebnis3);
        berechnet3!.innerHTML += " " + ergebnis3;
    }
}
const deleteAll = document.getElementById("deleteAll");

deleteAll!.addEventListener('click', deletedAll);
function deletedAll() {

        document.getElementById("input1l")!.remove;   // Funktioniert noch nicht!
        console.log("cleared");
}
var p_neu = document.createElement("p");
var t_neu = document.createTextNode("Neuer Absatz");
p_neu.appendChild(t_neu);


document.getElementById("absatz")?.appendChild(p_neu);


