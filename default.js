//(1)-------------Canvas-Beispiel: HELLO zeichnen-----------------------
var canvas = document.getElementById("canvas"); //Element mit id="canvas" ansprechen
var buchstabe = canvas.getContext("2d"); //Kontext

function drawH () {
    //H zeichnen
    buchstabe.beginPath();
    buchstabe.moveTo(25, 25);
    buchstabe.lineTo(25, 125); // I
    buchstabe.moveTo(25, 75);
    buchstabe.lineTo(50, 75); // -
    buchstabe.moveTo(50, 25);
    buchstabe.lineTo(50, 125); // I
    buchstabe.stroke();
}
setTimeout(drawH, 500); // H nach 0,5 Sekunden einblenden lassen
function drawE () {
    //E zeichnen
    buchstabe.beginPath();
    buchstabe.moveTo(75, 25);
    buchstabe.lineTo(75, 125); // I
    buchstabe.moveTo(75, 25);
    buchstabe.lineTo(100, 25); // - oben
    buchstabe.moveTo(75, 75);
    buchstabe.lineTo(100, 75); // - mitte
    buchstabe.moveTo(75, 125);
    buchstabe.lineTo(100, 125); // - unten
    buchstabe.stroke();
}
setTimeout(drawE, 800); // E nach 0,8 Sekunden einblenden lassen
function drawL () {
    //L zeichnen
    buchstabe.beginPath();
    buchstabe.moveTo(125, 25);
    buchstabe.lineTo(125, 125); // I
    buchstabe.lineTo(150, 125); // - unten
    buchstabe.stroke();
}
setTimeout(drawL, 1100); // L nach 1,1 Sekunden einblenden lassen
function drawL2 () {
    //L zeichnen
    buchstabe.beginPath();
    buchstabe.moveTo(175, 25);
    buchstabe.lineTo(175, 125); // I
    buchstabe.lineTo(200, 125); // - unten
    buchstabe.stroke();
}
setTimeout(drawL2, 1400); // L nach 1,4 Sekunden einblenden lassen
function drawO () {
    //O zeichnen
    buchstabe.beginPath();
    buchstabe.moveTo(225, 25);
    buchstabe.lineTo(225, 125); // I
    buchstabe.lineTo(250, 125); // - unten
    buchstabe.lineTo(250, 25); // I
    buchstabe.lineTo(225, 25); // - oben
    buchstabe.stroke();
}
setTimeout(drawO, 1700); // O nach 1,7 Sekunden einblenden lassen

function changeCanvas1(){
    canvas.style.opacity = "50%";
}
setTimeout(changeCanvas1, 2500); // Canvas-Element nach 2,5 Sekunden mit nur noch 50%iger Sichtbarkeit anzeigen
function changeCanvas2(){
    canvas.style.opacity = "30%";
}
setTimeout(changeCanvas2, 3000); // Canvas-Element nach 3,0 Sekunden mit nur noch 30%iger Sichtbarkeit anzeigen
function hideCanvas(){
    canvas.style.display = "none";
}
setTimeout(hideCanvas, 3500); // Canvas-Element wird nach 3,5 Sekunden ausgeblendet

//(2/3)---------------Cookie-Bar Sichtbarkeit---------------
// Ausblenden bei "Accept" (left-button)
var leftButton = document.getElementById("left_button"); // ID in Variable speichern

leftButton.addEventListener('click', pushLeftButton); // Variable mit click-Event und Funktion verknüpfen
function pushLeftButton(){
    document.getElementById("Cookie-Bar").style.display = "none"; // Sichtbarkeit der Cookie-Bar auf unsichtbar setzen
}
// Mouseover-Effect bei "Accept" (left-button)
leftButton.addEventListener('mouseover', mouseoverLeftButton);
function mouseoverLeftButton(){
    leftButton.style.background = "black"; // CSS Eigenschaft "background" auf schwarz setzen
    leftButton.style.color = "white"; // CSS Eigenschaft "color"(Schriftfarbe) auf weiß setzen
}
// Mouseout-Effect bei "Accept" (left-button)
leftButton.addEventListener('mouseout', mouseoutLeftButton);
function mouseoutLeftButton(){
    leftButton.style.background = ""; // CSS Eigenschaft "background" auf den Originalzustand setzen
    leftButton.style.color = ""; // CSS Eigenschaft "color" auf den Originalzustand setzen
}
// Ausblenden bei "Get more information" und öffnen des Cookie-Infofensters
var rightButton = document.getElementById("right_button");

rightButton.addEventListener('click', pushRightButton);
function pushRightButton(){
    document.getElementById("Cookie-Bar").style.display = "none"; // Cookie-Bar ausblenden
    document.getElementById("Cookie-Info").style.visibility = "visible"; // Cookie-Info-Fenster sichtbar machen
}
// Mouseover-Effect bei "Get more information"
rightButton.addEventListener('mouseover', mouseoverRightButton);
function mouseoverRightButton(){
    rightButton.style.background = "black";
    rightButton.style.color = "white";
}
// Mouseout-Effect bei "Get more information"
rightButton.addEventListener('mouseout', mouseoutRightButton);
function mouseoutRightButton(){
    rightButton.style.background = "";
    rightButton.style.color = "";
}

//(2/3)---------------Cookie-Infofenster Sichtbarkeit---------------
// Ausblenden des Cookie-Infofensters
var accept = document.getElementById("cookieAccept");

accept.addEventListener('click', pushAcceptButton);
function pushAcceptButton(){
    document.getElementById("Cookie-Info").style.display = "none";
}
accept.addEventListener('mouseover', mouseoverAcceptButton);
function mouseoverAcceptButton(){
    accept.style.background = "black";
    accept.style.color = "white";
}
accept.addEventListener('mouseout', mouseoutAcceptButton);
function mouseoutAcceptButton(){
    accept.style.background = "";
    accept.style.color = "";
}

//(4)---------------Namenseingabe über Eingabefeld---------------
function namensEingabe() {
    var name = document.getElementById("vorname").value; //mit value kann Wert des Eingabeelements abgerufen werden
    //if-Bedingung für die Reaktion auf die Eingabe eines Namens
    if (!clicked) { //Wenn clicked = true
        Array.from(document.getElementsByClassName("personalisierung")).forEach(function (element) { // zerlegt Inhalt in Array und ruft Funktion mit Parameter element auf
            element.innerHTML += " " + name + "!"; // Inhalt wird mit neuen Inhalten ergänzt
            document.getElementById("nameInput").style.display = "none"; // Fenster für Namenseingabe wird ausgeblendet
        });
        clicked = !clicked;
    } 
    return false; 
}
// Helper functions
let clicked = false;

//(5)---------------XXX---------------
let a = 2000; // Variable a initialisieren
let b = 2; // Variable b initialisieren
let multiplikation = a * b; // Multiplikationsvariable initialisieren
let ergebnis = multiplikation / 1000; //Ergebnisvariable für spätere Ausgabe in Sekunden

setTimeout(altersEingabe, multiplikation); // FUnktion altersEingabe erst nach berechneter Zeit einmalig starten
function altersEingabe() {
    alert("Du bist jetzt schon seit " + ergebnis + " Sekunden auf dieser Website."); // Infomeldung mit berechnetem Sekunden 
    var alter = prompt("Verrätst du mir dein Alter? Bite gib die entsprechende Zahl ein!"); //Abfragefenster für Alter
    
    if(alter == 18){ //(Bedingung)
        alert("Toll, du bist jetzt volljährig!"); //Anweisung
    }else if (alter < 18 && alter > 0) {
        alert("Du bist ja noch ein Kind!");
    }else if (alter > 18 && alter < 25) {
        alert("Jetzt bist du schon ein bisschen mehr erwachsen.");
    }else if (alter >= 25 && alter < 30) {
        alert("Du gehst ja schon stark auf die 30 zu!");
    }else if (alter == 30) {
        alert("Puhh schon 30 Jahre alt.");
    }else if (alter > 30 && alter <= 50) {
        alert("Du bist ja gar nicht mehr so jung wie ich dachte.");
    }else if (alter > 50 && alter <= 90) {
        alert("Sind deine besten Zeiten schon vorbei.");
    }else if (alter > 90 && alter < 100){
        alert ("Respekt dass du einen Computer benutzt.")
    }
    else { // greift bei Nichterfüllung der anderen Kriterien
        alert("Da hast du wohl etwas falsch eingegeben. Die Seite wird neu geladen, dann kannst du nochmal dein richtiges Alter eingeben.");
        location.reload(); //Website wird neu geladen, nachdem man kein gültiges Alter eingegeben hat
        
    }
}