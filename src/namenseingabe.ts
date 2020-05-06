export default function uebergebeName() {
    const name = document.querySelector<HTMLInputElement>("#namenseingabe")!.value;
    const nameFertig: string = name + "!";
    // console.log(name);
    var clicked: number;
    clicked = 0;

    if (clicked < 1) {
        if (name === "") {
            alert("Gib bitte deinen Namen ein.");
        }else {
            var anrede = document.querySelector<HTMLElement>("#h2");
            var anrede2 = document.querySelector<HTMLElement>("#anrede2");
            clicked++;
            anrede!.innerHTML = "Hallo " + nameFertig + " Schön, dass du da bist!";
            anrede2!.innerHTML = "Überprüfe deine Ergebnisse, " + nameFertig;
        }    
    }
}