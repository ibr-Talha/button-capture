var sayac = 0;
var nesne = document.getElementById("nesne");
const codesArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const randomColor = () => {
    let hexCode = '#'
    for (let x = 0; x < 6; x++) {
        hexCode += codesArray[Math.floor(Math.random() * codesArray.length)]
    }
    return hexCode
}

nesne.onmouseover = function (e) {
    sayac++;
    var xpos = parseInt(Math.random() * 1000);
    var ypos = parseInt(Math.random() * 800);
    nesne.style.backgroundColor = randomColor()

    nesne.style.left = xpos + "px";
    nesne.style.top = ypos + "px";
    sayac == 10 ? window.alert(sayac + "Devam etmek istiyor musun ?") : "";
    sayac % 10 == 0 ? document.body.style.background = randomColor() : document.getElementById("icerik").innerHTML = "";
    if (sayac >= 50) {
        window.alert(`${sayac} defa döndü hadi iyi geceler`);
        window.close();
    }


}
