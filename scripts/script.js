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
    
    return { GameBoard };
})();

const Player = (marker) => {
    this.won = false;
    const setWinner = () => this.won = true;
    const getMarker = () => this.marker;
    return { setWinner, getMarker };
}

console.log(Game.GameBoard.getOpenSlots());

