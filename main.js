//switching between players
var currentTurn = 'X'
var nextTurn = 'O'
var isOTurn = false

var allBoxes = document.querySelector('.boxes')
var gameResult = document.querySelector('.game-result')
var box1 = document.querySelector('#b1')
var box2 = document.querySelector('#b2')
var box3 = document.querySelector('#b3')
var box4 = document.querySelector('#b4')
var box5 = document.querySelector('#b5')
var box6 = document.querySelector('#b6')
var box7 = document.querySelector('#b7')
var box8 = document.querySelector('#b8')
var box9 = document.querySelector('#b9')
var restartGame = document.querySelector('.restart')


//how to check if player has won
function checkWin(player) {
    if (box1.textContent == player && box2.textContent == player && box3.textContent == player) {
        gameResult.textContent = player + ' has won!'
    } else if (box4.textContent == player && box5.textContent == player && box6.textContent == player) {
        gameResult.textContent = player + ' has won!'
    } else if (box7.textContent == player && box8.textContent == player && box9.textContent == player) {
        gameResult.textContent = player + ' has won!'
    } else if (box1.textContent == player && box4.textContent == player && box7.textContent == player) {
        gameResult.textContent = player + ' has won!'
    } else if (box2.textContent == player && box5.textContent == player && box8.textContent == player) {
        gameResult.textContent = player + ' has won!'
    } else if (box3.textContent == player && box6.textContent == player && box9.textContent == player) {
        gameResult.textContent = player + ' has won!'
    } else if (box1.textContent == player && box5.textContent == player && box9.textContent == player) {
        gameResult.textContent = player + ' has won!'
    } else if (box3.textContent == player && box5.textContent == player && box7.textContent == player) {
        gameResult.textContent = player + ' has won!'
    } else if (box1.textContent != '' && box2.textContent != '' && box3.textContent != '' && box4.textContent != '' && box5.textContent != '' && box6.textContent != '' && box7.textContent != '' && box8.textContent != '' && box9.textContent != '') {
        gameResult.textContent = 'Draw!'
    }
}

allBoxes.addEventListener('click', function(event) {
    if (event.target.textContent != '') {
        alert('This box is already checked!')
    } else if (isOTurn != true) {
        event.target.textContent = currentTurn
        event.target.classList.add('design')
        checkWin(event.target.textContent)
        isOTurn = !isOTurn
    } else if (isOTurn == true) {
        event.target.textContent = nextTurn
        event.target.classList.add('design')
        checkWin(event.target.textContent)
        isOTurn = !isOTurn
    }
})

restartGame.addEventListener('click', function(event) {
    location.reload();
})