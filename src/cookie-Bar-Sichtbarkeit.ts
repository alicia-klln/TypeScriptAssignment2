
//(2/3)---------------Cookie-Bar Sichtbarkeit---------------
// Ausblenden bei "Accept" (left-button)
export function cookieBarSichtbarkeit() {
    var leftButton:any = document.getElementById("left_button"); // ID in Variable speichern
    var cookieBar:any = document.getElementById("Cookie-Bar");
    var cookieInfo:any = document.getElementById("Cookie-Info");

    leftButton.addEventListener('click', pushLeftButton); // Variable mit click-Event und Funktion verknüpfen
    function pushLeftButton(){
        cookieBar.style.display = "none"; // Sichtbarkeit der Cookie-Bar auf unsichtbar setzen
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
    var rightButton:any = document.getElementById("right_button");

    rightButton.addEventListener('click', pushRightButton);
    function pushRightButton(){
        cookieBar.style.display = "none"; // Cookie-Bar ausblenden
        cookieInfo.style.visibility = "visible"; // Cookie-Info-Fenster sichtbar machen
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
    var accept:any = document.getElementById("cookieAccept");

    accept.addEventListener('click', pushAcceptButton);
    function pushAcceptButton(){
        cookieInfo.style.display = "none";
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
}