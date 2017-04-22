function TitleState() {
    this.background = ASSET_MANAGER.getCrop("title");

    
};

TitleState.prototype.update = function() {
    this.background.render(0, 0);
    if(clickHappened){
    
    }

    var me = this;

};

TitleState.prototype.onKeyPressed = function() {
    STATE_MANAGER.switchToState("game");
}

TitleState.prototype.onKeyUp = function(){
    
}

TitleState.prototype.reset = function() {
    // body
};