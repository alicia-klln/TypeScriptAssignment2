button1 = document.getElementById("btn1");
button2 = document.getElementById("btn2");
button3 = document.getElementById("btn3");

berechnet1 = document.getElementById("ergebnisInput1");
berechnet2 = document.getElementById("ergebnisInput2");
berechnet3 = document.getElementById("ergebnisInput3");

button1.addEventListener('click', addiereZahlen1);
button2.addEventListener('click', addiereZahlen2);
button3.addEventListener('click', addiereZahlen3);

function addiereZahlen1 (){
    var clicked;
    clicked = 0;
    console.log(clicked);

    if (clicked < 1) {
        const myInput1l = parseInt(document.getElementById("input1l").value);
        const myInput1r = parseInt(document.getElementById("input1r").value);
        const ergebnis1 = myInput1l + myInput1r;
        clicked++;
        console.log(ergebnis1);
        berechnet1.value = ergebnis1;
    }else {
        berechnet1.value = "";
        }
}
 
function addiereZahlen2 (){
    var clicked;
    clicked = 0;
    console.log(clicked);

    if (clicked < 1) {
        const myInput2l = parseInt(document.getElementById("input2l").value);
        const myInput2r = parseInt(document.getElementById("input2r").value);
        const ergebnis2 = myInput2l + myInput2r;
        clicked++;
        console.log(ergebnis2);
        berechnet2.value = ergebnis2;
    }else {
        berechnet2.value = "";
    }
} 

function addiereZahlen3 (){
    var clicked;
    clicked = 0;
    console.log(clicked);

    if (clicked < 1) {
        const myInput3l = parseInt(document.getElementById("input3l").value);
        const myInput3r = parseInt(document.getElementById("input3r").value);
        const ergebnis3 = myInput3l + myInput3r;
        clicked++;
        console.log(ergebnis3);
        berechnet3.value = ergebnis3;
    }else {
        berechnet3.value = "";
}
}

deleteAll = document.getElementById("deleteAll");

deleteAll.addEventListener('click', deletedAll);

function deletedAll() {
    berechnet1.value = "";  
    berechnet2.value = "";  
    berechnet3.value = "";   
}

//Namen eingeben
eingabeBestätigen = document.getElementById("namenbestätigen");
const name = document.getElementById("namenseingabe");

eingabeBestätigen.addEventListener('click', speichern, eintragen);
function speichern() {
    var name = localStorage.getItem(name).value;
    if (name == null) {name = "unbekannt";}
    console.log(name);
    localStorage.setItem('name', name);
    localStorage.getItem('Name');
}
function eintragen() {
    document.getElementById("name1").value = Name;
}

//Zufallszahl würfeln

wuerfelButton = document.getElementById("wuerfelbutton");
ausgabeZahl1 = document.getElementById("ausgabezahl1");
ausgabeZahl2 = document.getElementById("ausgabezahl2");
ausgabeZahl3 = document.getElementById("ausgabezahl3");
resetButton = document.getElementById("resetbutton");

wuerfelButton.addEventListener('click', wuerfeln);


wurf = 0;
pasch = 0;
dreierPasch = 0;

function wuerfeln () {
    var zufallsZahl1;
    var zufallsZahl2;
    var zufallsZahl3;

    zufallsZahl1 = Math.floor(Math.random()* 6) + 1;
    zufallsZahl2 = Math.floor(Math.random()* 6) + 1;
    zufallsZahl3 = Math.floor(Math.random()* 6) + 1;

    console.log(zufallsZahl1 + " & " + zufallsZahl2 + " & " + zufallsZahl3);
    
    ausgabeZahl1.value = zufallsZahl1;
    ausgabeZahl2.value = zufallsZahl2;
    ausgabeZahl3.value = zufallsZahl3;
    
    wurf++;
        
    if (zufallsZahl1 === zufallsZahl2 | 
        zufallsZahl1 === zufallsZahl3 |  
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

    document.getElementById("wurfAnzahl").innerHTML = wurf;
    document.getElementById("paschAnzahl").innerHTML = pasch;
    document.getElementById("dreierAnzahl").innerHTML = dreierPasch;

    resetButton.addEventListener('click', reset);
    function reset() {
        wurf = 0;
        pasch = 0;
        dreierPasch = 0;
        ausgabeZahl1.value = "";
        ausgabeZahl2.value = "";
        ausgabeZahl3.value = "";
        document.getElementById("wurfAnzahl").innerHTML = "";
        document.getElementById("paschAnzahl").innerHTML = "";
        document.getElementById("dreierAnzahl").innerHTML = "";
    }

    
        // var clicked;
        // clicked = 0;
        

        // if (gewinnBotschaft.innerHTML = "Super, du hast zwei gleiche Zahlen gewürfelt") {
        //     clicked++;
        //     console.log("geklickt: " + clicked);
        //     gewinnBotschaft.innerHTML = "";
        // }
    

}




