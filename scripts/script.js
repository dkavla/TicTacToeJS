// moduel that holds the GameBoard object
let Game = (() => {
    let _openSlots = 9;
    let _winner = '';
    let _board = [
        ' ', ' ', ' ',
        ' ', ' ', ' ',
        ' ', ' ', ' '
    ];

    let GameBoard = {
        getBoard: function() {
            return _board;
        },
        fillSlot: function(marker, slot) {
            if (_board[slot] == ' ') {
                _board[slot] = marker;
                _openSlots--;
            } else {
                console.log('Slot is filled already. Pick another')
            }
        },
        getOpenSlots: function() {
            return _openSlots;
        },
        resetGame: function() {
            _board = [
                ' ', ' ', ' ',
                ' ', ' ', ' ',
                ' ', ' ', ' '
            ];
            _openSlots = 9;
        },
        isEmpty: function() {
            return _openSlots === 9;
        }
    };
    
    // Called after each move to check if there is a winner
    let checkWinner = () => {

        if ( (_board[0] === 'X' && _board[1] === 'X' && _board[2] === 'X') || (_board[0] === 'O' && _board[1] === 'O' && _board[2] === 'O') ) {

                _winner = _board[0];
                return true;

        } else if ( (_board[0] === 'X' && _board[3] === 'X' && _board[6] === 'X') || (_board[0] === 'O' && _board[3] === 'O' && _board[6] === 'O') ) {

                _winner = _board[0];
                return true;

        } else if ( (_board[0] === 'X' && _board[4] === 'X' && _board[8] === 'X') || (_board[0] === 'O' && _board[4] === 'O' && _board[8] === 'O') ) {

            _winner = _board[0];
            return true;

        } else if ( (_board[1] === 'X' && _board[4] === 'X' && _board[7] === 'X') || (_board[1] === 'O' && _board[4] === 'O' && _board[7] === 'O') ) {

            _winner = _board[1];
            return true;

        } else if ( (_board[2] === 'X' && _board[5] === 'X' && _board[8] === 'X') || (_board[2] === 'O' && _board[5] === 'O' && _board[8] === 'O') ) {

            _winner = _board[2];
            return true;

        } else if ( (_board[2] === 'X' && _board[4] === 'X' && _board[6] === 'X') || (_board[2] === 'O' && _board[4] === 'O' && _board[6] === 'O') ) {

            _winner = _board[2];
            return true;

        } else if ( (_board[3] === 'X' && _board[4] === 'X' && _board[5] === 'X') || (_board[3] === 'O' && _board[4] === 'O' && _board[5] === 'O') ) {

            _winner = _board[3];
            return true;

        } else if ( (_board[6] === 'X' && _board[7] === 'X' && _board[8] === 'X') || (_board[6] === 'O' && _board[7] === 'O' && _board[8] === 'O') ) {

            _winner = _board[6];
            return true;

        } else {
            return false;
        }
    }

    // returns the marker of the winner
    let getWinner = () => {
        return _winner;
    }

    // receives the id of a slot and returns the corresponding index position
    let getSlotIndex = (numWord) => {
        if (numWord === "one") {
            return 0;
        } else if (numWord === "two") {
            return 1;
        } else if (numWord === "three") {
            return 2;
        } else if (numWord === "four") {
            return 3;
        } else if (numWord === "five") {
            return 4;
        } else if (numWord === "six") {
            return 5;
        } else if (numWord === "seven") {
            return 6;
        } else if (numWord === "eight") {
            return 7;
        } else {
            return 8;
        }
    }

    let isFull = () => {
        return _openSlots === 0;
    }

    return { 
        GameBoard, checkWinner, 
        getSlotIndex, getWinner, 
        isFull };
})();

// factory function for creating Player object
const Player = (marker) => {
    const getMarker = () => this.marker;
    return { getMarker };
}

let currentPlayer = 'X'; // track current player
// Create Player Objects
let p1 = Player('X');
let p2 = Player('O');
let gameActive = true;


const resetBtn = document.querySelector('.reset'); // resets the board
const posSlot = document.querySelectorAll('.slot'); // select all slots on board
const statusContainer = document.querySelector('.status-container');
const displayWinner = document.createElement('div') // winner dispaly
displayWinner.setAttribute('class', 'winner');
const turnDisplay = document.querySelector('.turn');

resetBtn.addEventListener("click", () => {
    Game.GameBoard.resetGame
    posSlot.forEach((slot) => {
        slot.innerText = '';
        Game.GameBoard.resetGame();
    });
    if (!gameActive) {
        displayWinner.remove();
        gameActive = true;
    }
});

// fills the slot with the current player's marker when clicked
// Iterates over all slots to add click event 
posSlot.forEach((slot) => {
    slot.addEventListener("click", () => {

        // check if the game is still going (no winners or not a draw)
        if (gameActive) {
            slot.innerText = currentPlayer;

            // calls fillSlot to fill the position in the Gameboard
            // objet's array board
            Game.GameBoard.fillSlot(currentPlayer, Game.getSlotIndex(slot.id));

            // switch to next player's turn
            if (currentPlayer === 'X') {
                currentPlayer = 'O';
                turnDisplay.innerText = `Player ${currentPlayer}'s Turn`;
            } else {
                currentPlayer = 'X';
                turnDisplay.innerText = `Player ${currentPlayer}'s Turn`;
            }

            if (Game.checkWinner() && gameActive) {
                gameActive = false;
                displayWinner.innerText = `Player ${Game.getWinner()} Wins`;
                statusContainer.appendChild(displayWinner);
            } else if (!Game.checkWinner() && Game.isFull()) {
                displayWinner.innerText = `Its a Draw`;
                statusContainer.appendChild(displayWinner);
                gameActive = false;
            }
        }
        
        
    });
});

