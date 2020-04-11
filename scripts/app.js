const puzzleEl = document.querySelector('#puzzle')
const statusEl = document.querySelector('#status')
// const guessesEl = document.querySelector('#guesses')
game = new Hangman('Car parts', 2)
puzzleEl.textContent = game.puzzle
statusEl.textContent = game.gameStatus

window.addEventListener('keypress',(e) => {
    const guess = String.fromCharCode(e.charCode)
    game.makeGuess(guess)
    render()
})

const render = () => {
    puzzleEl.innerHTML = ''
    statusEl.textContent = game.gameStatus
    // console.log(game.puzzle.split(''))
    game.puzzle.split('').forEach((letter) => {
        const span = document.createElement('span')
        span.textContent = letter
        puzzleEl.appendChild(span)
    })

}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

// getPuzzle('3').then((puzzle) => {
//     console.log(puzzle)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })

// getCurrentCountry().then((country) => {
//     console.log(country.name)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })

