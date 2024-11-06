let currentPlayer = 'X';
let isWinner = false;
let winningOptions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7 ,8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const allSquares = document.querySelectorAll(".square");
const resetButton = document.querySelector(".reset");
const messageText = document.querySelector(".message");

allSquares.forEach((square, index) => { 
    square.addEventListener("click", () => handleClick(square, index))
});

const handleClick = (square, index) => {
    if(square.textContent !== "" || isWinner)
        return;

    if(currentPlayer === "X")
        square.textContent = "X"
    else 
        square.textContent = "0"

    isWinner = hasWinner(allSquares)

    if(!isWinner)
        currentPlayer = currentPlayer === "X" ? "0" : "X"

    isEmpty = isBoardEmpty(allSquares)

    if(isWinner)
        messageText.textContent = `Winner is Player ${currentPlayer}`;
    else if ( !isWinner && !isEmpty) 
        messageText.textContent = "It's a tie" ;
} 

const hasWinner = squares => {
      winningOptions.forEach( option => {
        let a = option[0]
        let b = option[1]
        let c = option[2]
        if( squares[a].textContent &&  
            squares[a].textContent === squares[b].textContent &&  
            squares[a].textContent === squares[c].textContent ) {
            isWinner = true;
            }
        })
        return isWinner
}

const isBoardEmpty = squares => {
    let isEmptyBoard = false
    squares.forEach(square => {
        if(square.textContent === '')
            isEmptyBoard = true
    })
    return isEmptyBoard
}

const handleReset = () => {
    currentPlayer = "X"
    isWinner = false
    allSquares.forEach(square => 
        square.textContent = ""
    )

    messageText.textContent = ""
}

resetButton.addEventListener("click", handleReset)