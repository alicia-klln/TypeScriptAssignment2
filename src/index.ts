import uebergebeName from "./namenseingabe";
import { addiereZahlen2, addiereZahlen1, addiereZahlen3, deletedAll } from "./rechentabelle";
import { wuerfeln } from "./wuerfeln";

//Namen speichern
const namebestaetigen = document.querySelector<HTMLElement>("#namenbestätigen");
namebestaetigen!.addEventListener('click', uebergebeName);

// Rechentabelle
const button1 = document.querySelector<HTMLButtonElement>("#btn1");
const button2 = document.querySelector<HTMLButtonElement>("#btn2");
const button3 = document.querySelector<HTMLButtonElement>("#btn3");

button1!.addEventListener('click', addiereZahlen1);
button2!.addEventListener('click', addiereZahlen2);
button3!.addEventListener('click', addiereZahlen3);

const deleteAll= document.querySelector<HTMLElement>("#deleteAll");
deleteAll!.addEventListener('click', deletedAll);


//Zufallszahlen würfeln

const wuerfelButton = document.querySelector<HTMLButtonElement>("#wuerfelbutton");

wuerfelButton!.addEventListener('click', wuerfeln);

