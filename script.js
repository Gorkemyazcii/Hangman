const word_el = document.getElementById("word");
const popup = document.getElementById('popup-container')
const message_el = document.getElementById('basarı');
const wrongLetters_el = document.getElementById('wrong-letters');
const items = document.querySelectorAll('.item');
const message = document.getElementById('message');
let tekrarBtn = document.getElementById('tekrar');

const correctLetters = [];
const wrongLetters = [];
let selectedWord = getRandomWord();
tekrarBtn.addEventListener('keypress', setQuery)

// Bulunması gereken kelimeler
function getRandomWord() {
    const words = ["javascript", "java", "python", "html", "css", "nodejs", "lua", "react", "charp"];

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
    // Yazılan doğru harfleri yanyana dizer
    console.log(word_el.innerText.replace(/\n/g, ''));
    // Dizilen harflerin seçilen kelime ile eşleşiyorsa popup kutusu gelecek
    const w = word_el.innerText.replace(/\n/g, '');
    if (w === selectedWord) {
        popup.style.display = 'flex';
        message_el.innerText = "Kazandınız.";
        console.log("Bildiniz.");
    }
}
// Yanlış harf olursa çalışacak fonksiyon
function updateWrongeLetters() {
    wrongLetters_el.innerHTML = `
    ${wrongLetters.length > 0 ? '<h3>Hatalı Harfler</h3>' : ''}
    ${wrongLetters.map(letter => `<span>${letter}</span>`)}
    
    `;
    // Her yanlış kelime için yeni item eklenecek
    items.forEach((item, index) => {
        const errorCount = wrongLetters.length;

        if (index < errorCount) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
    // Yanlış harfler item sayısına eşitlenince gelecek popup kutusu
    if (wrongLetters.length === items.length) {
        popup.style.display = 'flex';
        message_el.innerText = "Kaybettiniz.";
    }

}
// Mesaj div'ine show classını ekle ve 2 saniye kaldıktan sonra kaldır
function displayMessage() {
    message.classList.add('show');

    setTimeout(function () {
        message.classList.remove('show');
    }, 2000);
}

tekrarBtn.addEventListener('keypress', function (e) {
    if (e.keyCode == "13") {

        tekrarFunction();
    }
});
// Tekrar oyna butonuna basınca oyunu sıfırla
tekrarBtn.addEventListener('click', () => tekrarFunction());
function tekrarFunction() {
    correctLetters.splice(0);
    wrongLetters.splice(0);

    selectedWord = getRandomWord();

    displayWord();
    updateWrongeLetters();

    popup.style.display = 'none';
}

// Basılan tuşların hangi tuş olduğunu gösteren fonksiyon
window.addEventListener('keydown', function (e) {
    if (e.keyCode >= 65 && e.keyCode <= 90 || e.key == "i") {

        const letter = e.key;

        // Doğru harf yoksa ekle
        if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
                correctLetters.push(letter);
                displayWord();
            }
            else {
                displayMessage();

            }
            // Yanlış harf yoksa ekle 
        } else if (!wrongLetters.includes(letter)) {
            wrongLetters.push(letter);
            updateWrongeLetters();
        }
        else {
            displayMessage();
        }

    }
})
displayWord();