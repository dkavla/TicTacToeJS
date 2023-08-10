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
            if (this.board[slot-1] == ' ') {
                this.board[slot-1] = marker;
                _openSlots--;
            } else {
                console.log('Slot is filled already. Pick another')
            }
        },
        getOpenSlots: function() {
            return _openSlots;
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

        } else if (this.board[0] === this.board[3] && this.board[0] === this.board[6]) {

                displayWinner.innerText = `Winner ${this.board[0]}`;
                statusContainer.appendChild(displayWinner);

        } else if (this.board[0] === this.board[4] && this.board[0] === this.board[8]) {

                displayWinner.innerText = `Winner ${this.board[0]}`;
                statusContainer.appendChild(displayWinner);

        } else if (this.board[1] === this.board[4] && this.board[1] === this.board[7]) {

            displayWinner.innerText = `Winner ${this.board[1]}`;
            statusContainer.appendChild(displayWinner);

        } else if (this.board[2] === this.board[5] && this.board[2] === this.board[8]) {

            displayWinner.innerText = `Winner ${this.board[2]}`;
            statusContainer.appendChild(displayWinner);

        } else if (this.board[2] === this.board[4] && this.board[2] === this.board[6]) {

            displayWinner.innerText = `Winner ${this.board[2]}`;
            statusContainer.appendChild(displayWinner);

        } else if (this.board[3] === this.board[4] && this.board[3] === this.board[5]) {

            displayWinner.innerText = `Winner ${this.board[3]}`;
            statusContainer.appendChild(displayWinner);

        } else if (this.board[6] === this.board[7] && this.board[6] === this.board[8]) {

            displayWinner.innerText = `Winner ${this.board[6]}`;
            statusContainer.appendChild(displayWinner);

        }
    }

    return { GameBoard, checkWinner };
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

