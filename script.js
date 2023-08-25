const word_el = document.getElementById("word");
const popup = document.getElementById('popup-container')
const message_el = document.getElementById('basarı');

const correctLetters = [];
const wrongLetters = [];
const selectedWord = getRandomWord();

function getRandomWord() {
    const words = ["javascript", "java", "python", "html", "css", "nodejs"];

    return words[Math.floor(Math.random() * words.length)];

}


function displayWord() {


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
        popup.style.display = 'flex';
        message_el.innerText = "Kazandınız.";
        console.log("Bildiniz.");
    }
}
window.addEventListener('keydown', function (e) {
    if (e.keyCode >= 65 && e.keyCode <= 90 || e.key == "i") {
        const letter = e.key;

        if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
                correctLetters.push(letter);
                displayWord();
            }
            else {
                console.log("Kullanılmış harf");

            }
        } else {
            if (!wrongLetters.includes(letter)) {
                wrongLetters.push(letter);
            }
        }

    }
})
displayWord();