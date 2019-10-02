class TicTacToe {
    constructor() {
        this.player1 = {
            mark: 'x',
            myTurn: true
        };

        this.player2 = {
            mark: 'o',
            myTurn: false
        };
    
        this.turns = [[null, null, null], [null, null, null], [null, null, null]]
        this.winMark = null;
    }

    getCurrentPlayerSymbol() {
        return this.player1.myTurn ? this.player1.mark : this.player2.mark;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.turns[rowIndex][columnIndex] === null) {
            this.turns[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            this.player1.myTurn = !this.player1.myTurn;
            this.player2.myTurn = !this.player2.myTurn;
        }
    }

    isFinished() {
        
        if (this.getWinner() || this.isDraw()) {
            return true;
        }

        return false;
    }

    getWinner() {

        if ((this.turns[0][0] === this.turns[0][1]) && (this.turns[0][0] === this.turns[0][2]) && (this.turns[0][0] !== null)) {
            this.winMark = this.turns[0][0];
        } else if ((this.turns[0][0] === this.turns[1][0]) && (this.turns[0][0] === this.turns[2][0]) && (this.turns[0][0] !== null)) {
            this.winMark = this.turns[0][0];
        } else if ((this.turns[0][0] === this.turns[1][1]) && (this.turns[0][0] === this.turns[2][2]) && (this.turns[0][0] !== null)) {
            this.winMark = this.turns[0][0];
        } else if ((this.turns[1][1] === this.turns[1][0]) && (this.turns[1][1] === this.turns[1][2]) && (this.turns[1][1] !== null)) {
            this.winMark = this.turns[1][1];
        } else if ((this.turns[1][1] === this.turns[0][1]) && (this.turns[1][1] === this.turns[2][1]) && (this.turns[1][1] !== null)) {
            this.winMark = this.turns[1][1];
        } else if ((this.turns[1][1] === this.turns[0][2]) && (this.turns[1][1]=== this.turns[2][0]) && (this.turns[1][1] !== null)) {
            this.winMark = this.turns[1][1];
        } else if ((this.turns[2][2] === this.turns[2][0]) && (this.turns[2][2] === this.turns[2][1]) && (this.turns[2][2] !== null)) {
            this.winMark = this.turns[2][2];
        } else if ((this.turns[2][2] === this.turns[0][2]) && (this.turns[2][2] === this.turns[1][2]) && (this.turns[2][2] !== null)) {
            this.winMark = this.turns[2][2];
        }

        return this.winMark;
    }

    noMoreTurns() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (!this.turns[i][j]) {
                    return false;
                }
            }
        }
        return true;
    }

    isDraw() {
        if (this.noMoreTurns() && !this.getWinner()) {
            return true;
        }
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.turns[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
