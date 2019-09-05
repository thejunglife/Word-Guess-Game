//create click any button to start

//create underscores for letters that are guessed correctly
//get users guess if correct put in current word
// else put in letter already guessed
// Number of Guesses Remaning

// list of words to be used
let gameWords = ['TyrionLannister', 'SansaStark', 'JonSnow', 'DaenerysTargaryen', 'CerseiLannister']

// will randomize words 
const randomWord =  function () {
return gameWords[Math.floor(Math.random() * gameWords.length)]
 .toLowerCase()
};

let wins = 0;
let losses = 0;
let guesses = 10;
let lettersGuessed = []
let word = randomWord ()

const reset = function () {
  word = randomWord()
  lettersGuessed = []
  guesses = 10
  displayWord()
  document.getElementById('wins').textContent = 'WINS: ' + wins
  document.getElementById('losses').textContent = 'LOSSES: ' + losses
  lettersGuessed.join(', ')
  document.getElementById('guessesLeft').textContent = 'Guesses Left: ' + guesses


}

const displayWord = function (chosen) {
  let underScore = ''
  let winStatus = true
word.split('').forEach(function (letter) {
  if (letter === chosen || lettersGuessed.indexOf (letter) 
  !== -1) {
    
    underScore += `${letter} `
  } else {
    underScore += '_ '
    winStatus = false 
  }
})
if (winStatus) {
  alert(`You Won! The Word Was: ${word}`)
  wins++
  reset()
}
document.getElementById('currentWord').textContent = underScore
}

document.onkeyup = function (event) {
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    if (lettersGuessed.indexOf(event.key) === -1) {
      lettersGuessed.push(event.key)
      document.getElementById('lettersGuessed').textContent = lettersGuessed.join(', ')
    if (word.includes(event.key)) {
      displayWord()
    } else {
      guesses--
      document.getElementById('guessesLeft').textContent = 'Guesses Left: ' + guesses
      if (guesses <= 0)  {
        alert(`You Lost! The Word Was: ${word}`)
        losses++
        reset()
        
      }
    }
  }
}
}


displayWord()