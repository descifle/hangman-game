const puzzleEl = document.querySelector('#puzzle')
const statusEl = document.querySelector('#status')
const keyButton = document.querySelector('#openkey')
// const guessesEl = document.querySelector('#guesses')
game = new Hangman('Car parts', 2)
puzzleEl.textContent = game.puzzle
statusEl.textContent = game.gameStatus

keyButton.addEventListener('click', () => {
    const keyBoard = document.querySelector('#enable_keyboard')
    keyBoard.focus()
})

window.addEventListener('keypress',(e) => {
    const guess = String.fromCharCode(e.charCode)
    game.makeGuess(guess)
    render()
})

const render = () => {
    puzzleEl.innerHTML = ''
    statusEl.textContent = game.gameStatus
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
