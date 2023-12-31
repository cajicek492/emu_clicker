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
const wonderhoy = new Audio("./res/audio/wonderhoy.mp3");
const titul = document.getElementById("titul");
const epsDisplay = document.getElementById("epsDisplay");

let numberOfEmus = 0;
let emusPerClick = 1;
let emuAutoClick = 0;
let emuSuperiorAutoClick = 0;
let emuUltimateAutoClick = 0;
let emuAutoInterval;
let emuSuperiorAutoInterval;
let emuUltimateAutoInterval;
let cookieRefresh; // pocet susenek v karte
let costOfBasicUpgrade = 20; // basic upgrade je na click
let costOfAdvacedUpgrade = 100;
let costOfSuperiorUpgrade = 1500;
let costOfUltimateUpgrade = 15000;
let basicEmuLvl = 1;
let advancedEmuLvl = 0;
let superiorEmuLvl = 0;
let ultimateEmuLvl = 0;
let eps = 0;

emu.onclick = () => {
  console.log("click");
  numberOfEmus += emusPerClick;
  counter.innerText = "Emus: " + numberOfEmus;
};

basicEmu.onclick = () => {
  if (numberOfEmus >= costOfBasicUpgrade) {
    console.log("upgrade bought");
    wonderhoy.play();
    numberOfEmus -= costOfBasicUpgrade;
    costOfBasicUpgrade += 40;
    basicEmuLvl++;
    emusPerClick++;
    basicEmuLvlBox.innerText = "lvl: " + basicEmuLvl;
    priceCounterBasic.innerText = "Click upgrade: " + costOfBasicUpgrade;
    counter.innerText = "Emus: " + numberOfEmus;
  }
};

advancedEmu.onclick = () => {
  if (numberOfEmus >= costOfAdvacedUpgrade) {
    console.log("it works maybe");
    wonderhoy.play();
    numberOfEmus -= costOfAdvacedUpgrade;
    costOfAdvacedUpgrade += 200;
    advancedEmuLvl++;
    eps += 5;
    epsDisplay.innerText = "Emus per second: " + eps;
    advancedEmuLvlBox.innerText = "lvl: " + advancedEmuLvl;
    priceCounterAdvanced.innerText = "Emu: " + costOfAdvacedUpgrade;
    counter.innerText = "Emus: " + numberOfEmus;
    emuAutoClick += 5;
    clearInterval(emuAutoInterval);
    emuAutoInterval = setInterval(() => {
      numberOfEmus += emuAutoClick;
      counter.innerText = "Emus: " + numberOfEmus;
    }, 1000);
  }
};

superiorEmu.onclick = () => {
  if (numberOfEmus >= costOfSuperiorUpgrade) {
    console.log("budeme na prime");
    wonderhoy.play();
    numberOfEmus -= costOfSuperiorUpgrade;
    costOfSuperiorUpgrade += 1250;
    superiorEmuLvl++;
    eps += 50;
    epsDisplay.innerText = "Emus per second: " + eps;
    superiorEmuLvlBox.innerText = "lvl: " + superiorEmuLvl;
    priceCounterSuperior.innerText = "Quack Emu: " + costOfSuperiorUpgrade;
    counter.innerText = "Emus: " + numberOfEmus;
    emuSuperiorAutoClick += 50;
    clearInterval(emuSuperiorAutoInterval);
    emuSuperiorAutoInterval = setInterval(() => {
      numberOfEmus += emuSuperiorAutoClick;
      counter.innerText = "Emus: " + numberOfEmus;
    }, 1000);
  }
};

ultimateEmu.onclick = () => {
  if (numberOfEmus >= costOfUltimateUpgrade) {
    console.log("perfection");
    wonderhoy.play();
    numberOfEmus -= costOfUltimateUpgrade;
    costOfUltimateUpgrade += 15000;
    ultimateEmuLvl++;
    eps += 200;
    epsDisplay.innerText = "Emus per second: " + eps;
    ultimateEmuLvlBox.innerText = "lvl: " + ultimateEmuLvl;
    priceCounterUltimate.innerText = "Tea party Emu: " + costOfUltimateUpgrade;
    counter.innerText = "Emus: " + numberOfEmus;
    emuUltimateAutoClick += 200;
    changeSrc();
    clearInterval(emuUltimateAutoInterval);
    emuUltimateAutoInterval = setInterval(() => {
      numberOfEmus += emuUltimateAutoClick;
      counter.innerText = "Emus: " + numberOfEmus;
    }, 1000);
  }
};
function hackerMan() {
  numberOfEmus += 25000;
  counter.innerText = "Emus: " + numberOfEmus;
}

window.onload = () => {
  alert(
    "Halllo im Emu Otori letss WONDERHOY / (pro cheaty napsat hackerMan())"
  );
};

function changeSrc() {
  if (ultimateEmuLvl > 0) {
    emu.src = "./res/img/emu_dance.gif";
  }
}
//Bylo planovano ale nakonec ne
/*function changeSrcBack() {
    emu.src = "./res/img/chibi_emu.png";
}*/

// pocet susenek v karte
function titleCookie() {
  titul.innerText = numberOfEmus + " Emus - Emu Otori Clicker";
  clearInterval(cookieRefresh);
  cookieRefresh = setInterval(() => {
    titleCookie();
  }, 750);
}
titleCookie();
