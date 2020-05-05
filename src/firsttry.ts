// const button1 = document.getElementById("btn1");
// const button2 = document.getElementById("btn2");
// const button3 = document.getElementById("btn3");

// const berechnet1 = document.getElementById("ergebnisInput1");
// const berechnet2 = document.getElementById("ergebnisInput2");
// const berechnet3 = document.getElementById("ergebnisInput3");

// button1!.addEventListener('click', addiereZahlen1);
// button2!.addEventListener('click', addiereZahlen2);
// button3!.addEventListener('click', addiereZahlen3);

// function addiereZahlen1 (){
//     var clicked;
//     clicked = 0;
//     console.log(clicked);

//     if (clicked < 1) {
//         const myInput1l = parseInt(document.querySelector<HTMLInputElement>("#input1l")!.value);
//         const myInput1r = parseInt(document.querySelector<HTMLInputElement>("#input1r")!.value);
//         const ergebnis1 = myInput1l + myInput1r;
//         clicked++;
//         console.log(ergebnis1);
//         berechnet1!.innerHTML = ergebnis1;
//     }else {
//         berechnet1!.value = "";
//         }
// }
 
// function addiereZahlen2 (){
//     var clicked;
//     clicked = 0;
//     console.log(clicked);

//     if (clicked < 1) {
//         const myInput2l = parseInt(document.querySelector<HTMLInputElement>("#input2l")!.value);
//         const myInput2r = parseInt(document.querySelector<HTMLInputElement>("#input2r")!.value);
//         const ergebnis2 = myInput2l + myInput2r;
//         clicked++;
//         console.log(ergebnis2);
//         berechnet2!.value = ergebnis2;
//     }else {
//         berechnet2!.value = "";
//     }
// } 

// function addiereZahlen3 (){
//     var clicked;
//     clicked = 0;
//     console.log(clicked);

//     if (clicked < 1) {
//         const myInput3l = parseInt(document.getElementById("input3l")!.value);
//         const myInput3r = parseInt(document.getElementById("input3r")!.value);
//         const ergebnis3 = myInput3l + myInput3r;
//         clicked++;
//         console.log(ergebnis3);
//         berechnet3!.value = ergebnis3;
//     }else {
//         berechnet3!.value = "";
// }
// }

// const deleteAll = document.getElementById("deleteAll");

// deleteAll!.addEventListener('click', deletedAll);

// function deletedAll() {
//     berechnet1!.value = "";  
//     berechnet2!.value = "";  
//     berechnet3!.value = "";   
// }

// // //Namen eingeben
// // const eingabeBestätigen = document.getElementById("namenbestätigen");
// // const name = document.getElementById("namenseingabe");

// // eingabeBestätigen.addEventListener('click', speichern, eintragen);
// // function speichern() {
// //     var name = localStorage.getItem(name).value;
// //     if (name == null) {name = "unbekannt";}
// //     console.log(name);
// //     localStorage.setItem('name', name);
// //     localStorage.getItem('Name');
// // }
// // function eintragen() {
// //     document.getElementById("name1").value = Name;
// // }

// //Zufallszahl würfeln

// const wuerfelButton = document.getElementById("wuerfelbutton");
// const ausgabeZahl1 = document.getElementById("ausgabezahl1");
// const ausgabeZahl2 = document.getElementById("ausgabezahl2");
// const ausgabeZahl3 = document.getElementById("ausgabezahl3");
// const resetButton = document.getElementById("resetbutton");

// wuerfelButton!.addEventListener('click', wuerfeln);


// var wurf = 0;
// var pasch = 0;
// var dreierPasch = 0;

// function wuerfeln () {
//     var zufallsZahl1;
//     var zufallsZahl2;
//     var zufallsZahl3;

//     zufallsZahl1 = Math.floor(Math.random()* 6) + 1;
//     zufallsZahl2 = Math.floor(Math.random()* 6) + 1;
//     zufallsZahl3 = Math.floor(Math.random()* 6) + 1;

//     console.log(zufallsZahl1 + " & " + zufallsZahl2 + " & " + zufallsZahl3);
    
//     ausgabeZahl1!.value = zufallsZahl1;
//     ausgabeZahl2!.value = zufallsZahl2;
//     ausgabeZahl3!.value = zufallsZahl3;
    
//     wurf++;
        
//     if (zufallsZahl1 === zufallsZahl2 || 
//         zufallsZahl1 === zufallsZahl3 ||  
//         zufallsZahl2 === zufallsZahl3 ){
//         pasch+= 1;
//         console.log("Juhu ein Pasch!");        
//     }
//     if (zufallsZahl1 === zufallsZahl2 && zufallsZahl1 === zufallsZahl3 && zufallsZahl2 === zufallsZahl3){
//         dreierPasch+= 1;  
//         console.log("Super, sogar ein Dreierpasch!");  
             
//     }
//     if (wurf === pasch && wurf === dreierPasch && pasch === dreierPasch) {
//         alert("Oha, was ein Glück. ")
//     }

//     let wurfAnzahl = document.getElementById("wurfAnzahl") as HTMLElement;
//     let paschAnzahl = document.getElementById("paschAnzahl") as HTMLElement;
//     let dreierAnzahl = document.getElementById("dreierAnzahl") as HTMLElement;

//     wurfAnzahl.value = wurf;
//     paschAnzahl.value = pasch;
//     dreierAnzahl.value = dreierPasch;

//     resetButton!.addEventListener('click', reset);
//     function reset() {
//         wurf = 0;
//         pasch = 0;
//         dreierPasch = 0;
//         ausgabeZahl1!.value = "";
//         ausgabeZahl2!.value = "";
//         ausgabeZahl3!.value = "";
//         wurfAnzahl.innerHTML = "";
//         paschAnzahl.innerHTML = "";
//         dreierAnzahl.innerHTML = "";
//     }

    
//         // var clicked;
//         // clicked = 0;
        

//         // if (gewinnBotschaft.innerHTML = "Super, du hast zwei gleiche Zahlen gewürfelt") {
//         //     clicked++;
//         //     console.log("geklickt: " + clicked);
//         //     gewinnBotschaft.innerHTML = "";
//         // }
    

// }




