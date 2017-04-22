function GameOverState() {
    this.background = ASSET_MANAGER.getCrop("gameover");
};

GameOverState.prototype.update = function() {
    this.background.render(0, 0);

    var me = this;
};

GameOverState.prototype.reset = function() {
};

GameOverState.prototype.onKeyPressed = function() {
    STATE_MANAGER.switchToState("game");
}

GameOverState.prototype.onKeyUp = function(){
    
}