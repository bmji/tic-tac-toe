win_conditions = [
    {b1, b2, b3},
    {b4, b5, b6},
    {b7, b8, b9},
    {b1, b4, b7},
    {b2, b5, b8},
    {b3, b6, b9},
    {b1, b5, b9},
    {b3, b5, b8}
]

//how to check if player has won
    for (var i = 0; i < allBoxes.length; i++) {
        if (allBoxes.length[i] == 3) {
            textToAdd.value = 'X'
        }
    }

//switching between players
var currentTurn = 'X'
var nextTurn = 'O'
var isOTurn = false

while (isOTurn != true) {
    allBoxes.addEventListener('click', function(event) {
        if (event.target.tagName === 'DIV') {
            textToAdd.value = 'currentTurn'
            event.target.textContent = textToAdd.value
            let isOTurn = true
        } else if (isOTurn == true) {
            if (event.target.tagName === 'DIV') {
                textToAdd.value = 'nextTurn'
                event.target.textContent = textToAdd.value
                let isOTurn = false
            }
        }
    })
}