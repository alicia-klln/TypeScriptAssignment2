//(5)---------------Berechnung---------------
export function berechnen():any {
    let a = 2000; // Variable a initialisieren
    let b = 2; // Variable b initialisieren
    let multiplikation = a * b; // Multiplikationsvariable initialisieren
    let ergebnis = multiplikation / 1000; //Ergebnisvariable für spätere Ausgabe in Sekunden
    
    setTimeout(altersEingabe, multiplikation); // FUnktion altersEingabe erst nach berechneter Zeit einmalig starten
    function altersEingabe() {
        alert("Du bist jetzt schon seit " + ergebnis + " Sekunden auf dieser Website."); // Infomeldung mit berechnetem Sekunden 
        var alter:any = prompt("Verrätst du mir dein Alter? Bite gib die entsprechende Zahl ein!"); //Abfragefenster für Alter
        
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
    }