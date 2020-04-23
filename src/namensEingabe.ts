//(4)---------------Namenseingabe über Eingabefeld---------------
export function namensEingabe():boolean {
    var nameInput:any = document.getElementById("nameInput");
    var name:any = document.getElementById("vorname");
    name.value; //mit value kann Wert des Eingabeelements abgerufen werden
    //if-Bedlingung für die Reaktion auf die Eingabe eines Namens
    if (!clicked) { //Wenn clicked = true
        Array.from(document.getElementsByClassName("personalisierung")).forEach(function (element) { // zerlegt Inhalt in Array und ruft Funktion mit Parameter element auf
            element.innerHTML += " " + name + "!"; // Inhalt wird mit neuen Inhalten ergänzt
            nameInput.style.display = "none"; // Fenster für Namenseingabe wird ausgeblendet
        });
        clicked = !clicked;
    } 
    return false; 
}
// Helper functions
let clicked = false;


