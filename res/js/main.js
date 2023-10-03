const emu = document.getElementById("emu");
const counter = document.getElementById("counter");

let numberOfEmus = 0;

emu.onclick = () => {
    console.log("click");
    numberOfEmus ++;
    counter.innerText = "Emus: " + numberOfEmus;
}
