class Game {
    constructor() {
        this.board = new Board();
        this.players = this.createPlayers();
        this.ready = false;
    }

    /* 
     * Creates 2 player objects
     * @return {array}  An array of 2 player objects.
     */
    createPlayers() {
        const players = [new Player('Player 1', 1, '#e15258', true),
                         new Player('Player 2', 2, '#e59a13')]
        return players;
    }

    /**
     * Begins game.
     */
    startGame() {
        this.board.drawHTMLBoard();
        this.activePlayer.activeToken.drawHTMLToken();
        this.ready = true;
    }

    /**
     * Identifies the active player.
     * @return {object}  The active player
     */
    get activePlayer() {
        return this.players.find(player => player.active);
    }
}