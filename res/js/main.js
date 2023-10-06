const emu = document.getElementById("emu"); // emu na click
const counter = document.getElementById("counter"); //pocitat poctu emu
const basicEmu = document.getElementById("basicEmu"); // upgrade obrazek
const advancedEmu = document.getElementById("advancedEmu"); 
const superiorEmu = document.getElementById("superiorEmu");
const ultimateEmu = document.getElementById("ultimateEmu");
const priceCounterBasic = document.getElementById("priceCounterBasic"); //pocitce cen
const priceCounterAdvanced = document.getElementById("priceCounterAdvanced");
const priceCounterSuperior = document.getElementById("priceCounterSuperior");
const priceCounterUltimate = document.getElementById("priceCounterUltimate");
const basicEmuLvlBox = document.getElementById("basicEmuLvlBox"); // disply lvl
const advancedEmuLvlBox = document.getElementById("advancedEmuLvlBox"); 
const superiorEmuLvlBox = document.getElementById("superiorEmuLvlBox"); 
const ultimateEmuLvlBox = document.getElementById("ultimateEmuLvlBox"); 
const wonderhoy = new Audio("./res/img/wonderhoy.mp3");


let numberOfEmus = 0;
let emusPerClick = 1;
let emuAutoClick = 0;
let emuSuperiorAutoClick = 0;
let emuUltimateAutoClick = 0;
let emuAutoInterval;
let emuSuperiorAutoInterval;
let emuUltimateAutoInterval;
let upgradeCheck;
let costOfBasicUpgrade = 20; // basic upgrade je na click
let costOfAdvacedUpgrade = 100;
let costOfSuperiorUpgrade = 1000;
let costOfUltimateUpgrade = 10000;
let basicEmuLvl = 1;
let advancedEmuLvl = 0;
let superiorEmuLvl = 0;
let ultimateEmuLvl = 0;


emu.onclick = () => {
    console.log("click");
    numberOfEmus += emusPerClick;
    counter.innerText = "Emus: " + numberOfEmus;
}


basicEmu.onclick = () => {
    if(numberOfEmus >= costOfBasicUpgrade){
        console.log("upgrade bought");
        wonderhoy.play();
        numberOfEmus -= costOfBasicUpgrade;
        costOfBasicUpgrade += 20;
        basicEmuLvl++;
        emusPerClick++;
        basicEmuLvlBox.innerText = "lvl: " + basicEmuLvl;
        priceCounterBasic.innerText = "Click upgrade: " + costOfBasicUpgrade;
        counter.innerText = "Emus: " + numberOfEmus;
    }
}

advancedEmu.onclick = () => {
    if(numberOfEmus >= costOfAdvacedUpgrade){
        console.log("it works maybe");
        wonderhoy.play();
        numberOfEmus -= costOfAdvacedUpgrade;
        costOfAdvacedUpgrade += 100;
        advancedEmuLvl++;
        advancedEmuLvlBox.innerText = "lvl: " + advancedEmuLvl;
        priceCounterAdvanced.innerText = "Emu: " + costOfAdvacedUpgrade;
        counter.innerText = "Emus: " + numberOfEmus;
        emuAutoClick += 5;
        clearInterval(emuAutoInterval);
        emuAutoInterval = setInterval(() => {
            numberOfEmus += emuAutoClick;
            counter.innerText = "Emus: " + numberOfEmus;
        },1000);
    }
}

superiorEmu.onclick = () => {
    if(numberOfEmus >= costOfSuperiorUpgrade){
        console.log("budeme na prime");
        wonderhoy.play();
        numberOfEmus -= costOfSuperiorUpgrade;
        costOfSuperiorUpgrade += 1000;
        superiorEmuLvl++;
        superiorEmuLvlBox.innerText = "lvl: " + superiorEmuLvl;
        priceCounterSuperior.innerText = "Quack Emu: " + costOfSuperiorUpgrade;
        counter.innerText = "Emus: " + numberOfEmus;
        emuSuperiorAutoClick += 50;
        clearInterval(emuSuperiorAutoInterval);
        emuSuperiorAutoInterval =setInterval(() => {
            numberOfEmus += emuSuperiorAutoClick;
            counter.innerText = "Emus: " + numberOfEmus;
        },1000);
    }
}

ultimateEmu.onclick = () => {
    if(numberOfEmus >= costOfUltimateUpgrade){
        console.log("perfection");
        wonderhoy.play();
        numberOfEmus -= costOfUltimateUpgrade;
        costOfUltimateUpgrade += 5000;
        ultimateEmuLvl++;
        ultimateEmuLvlBox.innerText = "lvl: " + ultimateEmuLvl;
        priceCounterUltimate.innerText = "Tea party Emu: " + costOfUltimateUpgrade;
        counter.innerText = "Emus: " + numberOfEmus;
        emuUltimateAutoClick += 200;
        clearInterval(upgradeCheck);
        upgradeCheck = setInterval(() => {
            changeSrc();
        },1000);
        clearInterval(emuUltimateAutoInterval);
        emuUltimateAutoInterval = setInterval(() => {
            numberOfEmus += emuUltimateAutoClick;
            counter.innerText = "Emus: " + numberOfEmus;
        },1000);
    }
}
function hackerMan () {
    numberOfEmus += 25000;
    counter.innerText = "Emus: " + numberOfEmus;
}

window.onload = () => {
    alert("Halllo im Emu Otori letss WONDERHOY / (pro cheaty napsat hackerMan())");
    
}

function changeSrc() {
 if(ultimateEmuLvl > 0) {
    emu.src = "./res/img/emu_dance.gif";
 }
}

