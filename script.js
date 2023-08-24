const word_el = document.getElementById("word");

function getRandomWord() {
    const words = ["javascript", "java", "python", "html", "css", "nodejs"];

    return words[Math.floor(Math.random() * words.length)];

}


function displayWord() {
    const selectedWord = getRandomWord();

    word_el.innerHTML = `
    ${selectedWord.split("").map(letter => `
        <div class="letter">
            ${letter}
        </div>
    `).join("")}
    `;
}
displayWord();