const emu = document.getElementById("emu"); // emu na click
const counter = document.getElementById("counter");
const basicEmu = document.getElementById("basicEmu"); // upgrade obrazek
const advancedEmu = document.getElementById("advancedEmu");
const priceCounterBasic = document.getElementById("priceCounterBasic");

let numberOfEmus = 0;
let emusPerClick = 1;
let emuAutoClick = 0;
let emuAutoInterval;
let costOfBasicUpgrade = 20; // basic upgrade je na click
let costOfAdvacedUpgrade = 100;


emu.onclick = () => {
    console.log("click");
    numberOfEmus += emusPerClick;
    counter.innerText = "Emus: " + numberOfEmus;
}


basicEmu.onclick = () => {
    if(numberOfEmus >= costOfBasicUpgrade){
        console.log("upgrade bought");
        numberOfEmus -= costOfBasicUpgrade;
        costOfBasicUpgrade += 20;
        emusPerClick++;
        priceCounterBasic.innerText = "Click upgrade: " + costOfBasicUpgrade;
        counter.innerText = "Emus: " + numberOfEmus;
    }
}

advancedEmu.onclick = () => {
    if(numberOfEmus >= costOfAdvacedUpgrade){
        console.log("it works maybe");
        numberOfEmus -= costOfAdvacedUpgrade;
        counter.innerText = "Emus: " + numberOfEmus;
        emuAutoClick += 1;
        clearInterval(emuAutoInterval);
        emuAutoInterval = setInterval(() => {
            numberOfEmus += emuAutoClick;
            counter.innerText = "Emus: " + numberOfEmus;
        },1000);
    }
}

function hackerMan () {
    numberOfEmus += 10000;
    counter.innerText = "Emus: " + numberOfEmus;
}
hackerMan();
window.onload = () => {
    alert("Halllo im Emu Otori letss WONDERHOY");
}