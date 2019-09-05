//create click any button to start

//create underscores for letters that are guessed correctly
//get users guess if correct put in current word
// else put in letter already guessed
// Number of Guesses Remaning

// list of words to be used
let gameWords = ['Tyrion Lannister', 'Sansa Stark', 'Jon Snow', 'Daenerys Targaryen', 'Cersei Lannister']
// will randomize words 
let randomWord = Math.floor(Math.random() * gameWords.length);
let wordChosen = gameWords[randomWord]
let rightWord = [];
let wrongGuess= [];
// test
console.log(wordChosen)

let totalWins = 0;
let currentWord = [];
let lettersGuessed = [];
let choicesLeft = 10;
let underScore = [];

// get user input and start game
document.addEventListener('keypress', (event) => {
  let keyword = String.fromCharCode(event.keyCode);
