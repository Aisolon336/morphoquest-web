let root = "git";
let meaning = ["gehen"];
let morphemes = [];

function addMorpheme(text, mean) {
  morphemes.push(text);
  meaning.push(mean);
  updateDisplay();
}

function reset() {
  morphemes = [];
  meaning = ["gehen"];
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("word").innerText = "Wort: " + root + morphemes.join("");
  document.getElementById("meaning").innerText = "Bedeutung: " + meaning.join(" + ");
}
