let currentStep = 0;
let currentWord = '';
let currentSentence = '';
let score = 0;
let lives = localStorage.getItem('lives') ? parseInt(localStorage.getItem('lives')) : 3;
let level = localStorage.getItem('level') ? parseInt(localStorage.getItem('level')) : 1;
let timer;
let timeLeft = 25;
let incorrectAttempts = 0;

const vocabulary = [
    { word: 'apple', meaning: 'a fruit that is red or green.' },
    { word: 'dog', meaning: 'a domesticated animal often kept as a pet.' },
    { word: 'sun', meaning: 'the star at the center of our solar system.' },
    { word: 'rocket', meaning: 'a vehicle that travels into space.' },
    { word: 'book', meaning: 'a set of written pages bound together.' }
];

const sentences = [
    { sentence: 'The cat sits on the mat.', question: 'Where does the cat sit?', answer: 'mat' },
    { sentence: 'The dog runs after the ball.', question: 'What does the dog run after?', answer: 'ball' },
    { sentence: 'The sun shines in the sky.', question: 'Where does the sun shine?', answer: 'sky' }
];

function addMessageToChat(message, sender) {
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    if (sender === 'user') {
        messageElement.classList.add('user-message');
    }
    document.getElementById('conversation').appendChild(messageElement);
    document.getElementById('conversation').scrollTop = document.getElementById('conversation').scrollHeight;
}

function sendMessage() {
    const userInput = document.getElementById('userInput').value.trim();
    if (userInput === '') return;

    addMessageToChat(userInput, 'user');
    document.getElementById('user
