//(1)-------------Canvas-Beispiel: HELLO zeichnen-----------------------

export function canvasZeichnung():void {
    var canvas:any = document.getElementById("canvas"); //Element mit id="canvas" ansprechen
    var buchstabe:any = canvas.getContext("2d"); //Kontext

    function drawH ():void {
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
    function drawE():void  {
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
    function drawL ():void {
        //L zeichnen
        buchstabe.beginPath();
        buchstabe.moveTo(125, 25);
        buchstabe.lineTo(125, 125); // I
        buchstabe.lineTo(150, 125); // - unten
        buchstabe.stroke();
    }
    setTimeout(drawL, 1100); // L nach 1,1 Sekunden einblenden lassen
    function drawL2 ():void {
        //L zeichnen
        buchstabe.beginPath();
        buchstabe.moveTo(175, 25);
        buchstabe.lineTo(175, 125); // I
        buchstabe.lineTo(200, 125); // - unten
        buchstabe.stroke();
    }
    setTimeout(drawL2, 1400); // L nach 1,4 Sekunden einblenden lassen
    function drawO ():void {
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
}