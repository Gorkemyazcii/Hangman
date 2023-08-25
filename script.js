const word_el = document.getElementById("word");

const correctLetters = ['j', 'a', 'v', 'h', 'c', 'n'];
const wrongLetters = [];

function getRandomWord() {
    const words = ["javascript", "java", "python", "html", "css", "nodejs"];

    return words[Math.floor(Math.random() * words.length)];

}


function displayWord() {
    const selectedWord = getRandomWord();

    word_el.innerHTML = `
    ${selectedWord.split("").map(letter => `
        <div class="letter">
            ${correctLetters.includes(letter) ? letter : ''}
        </div>
    `).join("")}

    `;
    console.log(word_el.innerText.replace(/\n/g, ''));

    const w = word_el.innerText.replace(/\n/g, '');
    if (w === selectedWord) {
        console.log("Bildiniz.");
    }
}

displayWord();