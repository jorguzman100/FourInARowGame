const game = new Game();

let startBtn = document.getElementById('begin-game');

/**
 * Listens for click on `#begin-game`and calls startGame() on game object
 */
startBtn.addEventListener('click', function() {
    game.startGame();
    this.style.display = 'none';
    document.getElementById('play-area').style.opacity = '1';
});