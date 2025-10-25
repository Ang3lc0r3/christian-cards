let deck = [];
let currentIndex = 0;

// Load all image paths into the deck
function preloadDeck() {
    deck = [];
    for (let i = 1; i <= 50; i++) {
        deck.push(`cards/${i}.png`);
    }
}

function shuffleDeck() {
    preloadDeck();
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    currentIndex = 0;
    alert("Deck shuffled!");
    document.getElementById("cardImage").src = "placeholder.png";
}

function drawCard() {
    if (currentIndex >= deck.length) {
        alert("No more cards in the deck!");
        return;
    }
    document.getElementById("cardImage").src = deck[currentIndex];
    currentIndex++;
}
