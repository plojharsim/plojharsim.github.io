let currentVocab = [];
let currentWord = null;
let direction = null;
let correctCount = 0;  // Počet správných odpovědí
let errorCount = 0;    // Počet chyb
let totalAnswers = 0;  // Celkový počet odpovědí

const questionEl = document.getElementById("question");
const answerInput = document.getElementById("answerInput");
const submitBtn = document.getElementById("submitBtn");
const resultEl = document.getElementById("result");
const languageSelect = document.getElementById("languageSelect");
const correctCountEl = document.getElementById("correctCount");
const errorCountEl = document.getElementById("errorCount");
const successRateEl = document.getElementById("successRate");

function loadVocab() {
    const selectedDb = languageSelect.value;
    currentVocab = vocabDatabases[selectedDb] || [];
    if (currentVocab.length === 0) {
        resultEl.textContent = "Žádná slovíčka pro tento jazyk";
        resultEl.style.color = "#ff4d4d";
        return;
    }
    nextWord();
}

function nextWord() {
    if (currentVocab.length === 0) {
        questionEl.textContent = "Žádná slovíčka k dispozici";
        return;
    }
    currentWord = currentVocab[Math.floor(Math.random() * currentVocab.length)];
    direction = Math.random() > 0.5 ? "toTarget" : "toSource";
    
    direction = "toSource";

    if (direction === "toTarget") {
        questionEl.textContent = currentWord.cs;
    } else {
        questionEl.textContent = languageSelect.value === "cs-en" ? currentWord.en : currentWord.de;
    }
    answerInput.value = "";
    resultEl.textContent = "";
    answerInput.focus();
}

function updateStats() {
    totalAnswers = correctCount + errorCount;
    const successRate = totalAnswers > 0 ? Math.round((correctCount / totalAnswers) * 100) : 0;
    correctCountEl.textContent = correctCount;
    errorCountEl.textContent = errorCount;
    successRateEl.textContent = `${successRate}%`;
}

function checkAnswer() {
    const userAnswer = answerInput.value.trim().toLowerCase();
    const correctAnswer = direction === "toTarget"
        ? (languageSelect.value === "cs-en" ? currentWord.en : currentWord.de).toLowerCase()
        : currentWord.cs.toLowerCase();

    if (userAnswer === correctAnswer) {
        resultEl.textContent = "Správně!";
        resultEl.style.color = "#00ff7f";
        correctCount++;
        setTimeout(nextWord, 1000);
    } else {
        resultEl.textContent = `Špatně! Správná odpověď: ${correctAnswer}`;
        resultEl.style.color = "#ff4d4d";
        errorCount++;
        setTimeout(nextWord, 2000);
    }
    updateStats(); // Aktualizace statistik po každé odpovědi
}

// Event Listenery
submitBtn.addEventListener("click", checkAnswer);
answerInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") checkAnswer();
});
languageSelect.addEventListener("change", () => {
    // Reset statistik při změně jazyka (volitelné)
    correctCount = 0;
    errorCount = 0;
    totalAnswers = 0;
    updateStats();
    loadVocab();
});

// Inicializace
loadVocab();
updateStats(); // Zobrazí výchozí statistiky (0, 0, 0%)