// moduel that holds the GameBoard object
let Game = (() => {
    let _openSlots = 9

    let GameBoard = {
        board: [
            ' ', ' ', ' ',
            ' ', ' ', ' ',
            ' ', ' ', ' '
        ],
        fillSlot: function(marker, slot) {
            if (this.board[slot] == ' ') {
                this.board[slot] = marker;
                _openSlots--;
            } else {
                console.log('Slot is filled already. Pick another')
            }
        },
        getOpenSlots: function() {
            return _openSlots;
        },
        resetGame: function() {
            this.board = [
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
        const statusContainer = document.querySelector('.status-container');
        const displayWinner = document.createElement('div')
        displayWinner.setAttribute('class', 'winner');

        if (this.board[0] === this.board[1] && this.board[0] === this.board[2]) {

                displayWinner.innerText = `Winner ${this.board[0]}`;
                statusContainer.appendChild(displayWinner);
                return true;

        } else if (this.board[0] === this.board[3] && this.board[0] === this.board[6]) {

                displayWinner.innerText = `Winner ${this.board[0]}`;
                statusContainer.appendChild(displayWinner);
                return true;

        } else if (this.board[0] === this.board[4] && this.board[0] === this.board[8]) {

                displayWinner.innerText = `Winner ${this.board[0]}`;
                statusContainer.appendChild(displayWinner);
                return true;

        } else if (this.board[1] === this.board[4] && this.board[1] === this.board[7]) {

            displayWinner.innerText = `Winner ${this.board[1]}`;
            statusContainer.appendChild(displayWinner);
            return true;

        } else if (this.board[2] === this.board[5] && this.board[2] === this.board[8]) {

            displayWinner.innerText = `Winner ${this.board[2]}`;
            statusContainer.appendChild(displayWinner);
            return true;

        } else if (this.board[2] === this.board[4] && this.board[2] === this.board[6]) {

            displayWinner.innerText = `Winner ${this.board[2]}`;
            statusContainer.appendChild(displayWinner);
            return true;

        } else if (this.board[3] === this.board[4] && this.board[3] === this.board[5]) {

            displayWinner.innerText = `Winner ${this.board[3]}`;
            statusContainer.appendChild(displayWinner);
            return true;

        } else if (this.board[6] === this.board[7] && this.board[6] === this.board[8]) {

            displayWinner.innerText = `Winner ${this.board[6]}`;
            statusContainer.appendChild(displayWinner);
            return true;

        } else {
            return false;
        }
    }

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

    return { GameBoard, checkWinner, getSlotIndex };
})();

const Player = (marker) => {
    this.won = false;
    const setWinner = () => this.won = true;
    const getMarker = () => this.marker;
    return { setWinner, getMarker };
}

let currentPlayer = 'X'; // track current player
// Create Player Objects
let p1 = Player('X');
let p2 = Player('O');

// resets the board
const resetBtn = document.querySelector('.reset');
const posSlot = document.querySelectorAll('.slot');

resetBtn.addEventListener("click", () => {
    Game.GameBoard.resetGame
    posSlot.forEach((slot) => {
        slot.innerText = '';
        Game.GameBoard.resetGame();
    })
})

// fills the slot with the current player's marker when clicked
// Iterates over all slots to add click event 
posSlot.forEach((slot) => {
    slot.addEventListener("click", () => {
        slot.innerText = currentPlayer;

        // calls fillSlot to fill the position in the Gameboard
        // objet's array board
        Game.GameBoard.fillSlot(currentPlayer, Game.getSlotIndex(slot.id));
        if (currentPlayer === 'X') {
            currentPlayer = 'O';
        } else {
            currentPlayer = 'X';
        }
    });
});
