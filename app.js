let root = "git";
let meaning = ["gehen"];
let morphemes = [];
let currentLang = "de";

const morphemeData = {
  de: [
    { text: "-iyor", meaning: "Präsens" },
    { text: "-um", meaning: "1. Person Singular" },
    { text: "-me", meaning: "Negation" },
    { text: "-di", meaning: "Vergangenheit" }
  ],
  en: [
    { text: "-iyor", meaning: "present tense" },
    { text: "-um", meaning: "1st person singular" },
    { text: "-me", meaning: "negation" },
    { text: "-di", meaning: "past tense" }
  ],
  tr: [
    { text: "-iyor", meaning: "geniş zaman" },
    { text: "-um", meaning: "ben (1. tekil kişi)" },
    { text: "-me", meaning: "olumsuzluk" },
    { text: "-di", meaning: "geçmiş zaman" }
  ]
};

const uiText = {
  de: {
    title: "🧠 MorphoQuest",
    wordLabel: "Wort: ",
    meaningLabel: "Bedeutung: ",
    reset: "Zurücksetzen"
  },
  en: {
    title: "🧠 MorphoQuest",
    wordLabel: "Word: ",
    meaningLabel: "Meaning: ",
    reset: "Reset"
  },
  tr: {
    title: "🧠 MorphoQuest",
    wordLabel: "Kelime: ",
    meaningLabel: "Anlam: ",
    reset: "Sıfırla"
  }
};

function addMorpheme(text, mean) {
  morphemes.push(text);
  meaning.push(mean);
  updateDisplay();
}

function reset() {
  morphemes = [];
  meaning = [uiText[currentLang].wordLabel.trim()];
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("word").innerText = uiText[currentLang].wordLabel + root + morphemes.join("");
  document.getElementById("meaning").innerText = uiText[currentLang].meaningLabel + meaning.join(" + ");
}

function changeLanguage(lang) {
  currentLang = lang;
  document.getElementById("title").innerText = uiText[lang].title;
  document.getElementById("resetBtn").innerText = uiText[lang].reset;
  reset();
  renderButtons();
}

function renderButtons() {
  const container = document.getElementById("buttons");
  container.innerHTML = "";
  morphemeData[currentLang].forEach(m => {
    const btn = document.createElement("button");
    btn.innerText = m.text + " – " + m.meaning;
    btn.onclick = () => addMorpheme(m.text, m.meaning);
    container.appendChild(btn);
  });
}

// Initial render
renderButtons();
updateDisplay();
