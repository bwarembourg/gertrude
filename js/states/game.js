function Game() {
    this.stateName="Game";
    this.key = 0;

    this.levels = [];
    this.level = 0;

    this.jumpReleased = true;
    this.hero = new Hero(MARGIN+BLOCK_WIDTH, 8*BLOCK_HEIGHT);

    this.background = ASSET_MANAGER.getCrop("background");
    this.cornerTl = ASSET_MANAGER.getCrop("corner_tl");
    this.roof = ASSET_MANAGER.getCrop("roof");
    this.cornerTr = ASSET_MANAGER.getCrop("corner_tr");
    this.pic = ASSET_MANAGER.getCrop("pic");
    this.wallLeft = ASSET_MANAGER.getCrop("wall_left");
    this.wallRight = ASSET_MANAGER.getCrop("wall_right");
    this.platformBegin = ASSET_MANAGER.getCrop("platform_begin");
    this.platform = ASSET_MANAGER.getCrop("platform");
    this.platformEnd = ASSET_MANAGER.getCrop("platform_end");
    this.cornerBl = ASSET_MANAGER.getCrop("corner_bl");
    this.floor = ASSET_MANAGER.getCrop("floor");
    this.cornerBr = ASSET_MANAGER.getCrop("corner_br");
    this.floorEnd = ASSET_MANAGER.getCrop("floor_end");
    this.floorBegin = ASSET_MANAGER.getCrop("floor_begin");
    this.heroSprite = ASSET_MANAGER.getCrop("hero");
    this.slimeSprite = ASSET_MANAGER.getCrop("slime");

    this.music = new Audio('resources/sounds/music.mp3');
    this.music.loop = true;
    this.music.play();

    this.generateNewLevel();
    this.generateNewLevel();
};

//
// UPDATE
//
Game.prototype.update = function() {

    this.background.render(BCK_X, BCK_Y);
    
    for(var i=0; i< this.levels[this.level].grid.lines.length; i++){
        for( var j=0; j< this.levels[this.level].grid.lines[i].blocks.length; j++){
            var x = MARGIN + this.levels[this.level].x + j*BLOCK_WIDTH;
            var y = this.levels[this.level].y + i*BLOCK_HEIGHT;
            switch( this.levels[this.level].grid.lines[i].blocks[j].type ){
                case "corner_tl" : this.cornerTl.render( x, y ); break;
                case "roof": this.roof.render( x, y ); break;
                case "corner_tr" : this.cornerTr.render( x, y ); break;
                case "wall_left": this.wallLeft.render( x, y ); break;
                case "wall_right": this.wallRight.render( x, y ); break;
                case "corner_bl" : this.cornerBl.render( x, y); break;
                case "corner_br" : this.cornerBr.render( x, y); break;
                case "floor" : this.floor.render( x, y ); break;
                case "floor_begin" : this.floorBegin.render( x, y); break;
                case "floor_end" : this.floorEnd.render( x, y); break;
                case "platform_begin" : this.platformBegin.render( x, y ); break;
                case "platform_end" : this.platformEnd.render( x, y ); break;
                case "platform" : this.platform.render( x, y ); break;
                default: break;
            }
        }
    }
    this.hero.update(this.key, this.levels[this.level]);
    this.heroSprite.render( this.hero.x, this.hero.y );
    for(var i=0; i< this.levels[this.level].monsters.length; i++){
        var monster = this.levels[this.level].monsters[i];
        monster.update();
        if(monster.isSlime)
            this.slimeSprite.render( monster.x, monster.y);
    }

    if(this.hero.jumpReleased){
        this.jumpReleased = true;
    }
    if(this.hero.y>BCK_HEIGHT){
        STATE_MANAGER.switchToState("gameover");
    }
    
    //this.key = 0;
};

Game.prototype.onKeyPressed = function(e) {
    console.log(e.which);
    //UP
    if(e.which == 38 && this.jumpReleased){
        if(!this.hero.jumping && !this.falling)
            this.hero.firstJump = true;
        this.hero.jumping = true;
        this.jumpReleased = false;
    }
    else{
        this.key = e.which;
    }
        
}

Game.prototype.onKeyUp = function(e) {
    if(e.which != 38)
        this.key = 0;
    else{
        this.jumpReleased = true;
    }
}

Game.prototype.reset = function() {
    this.music.pause();
    this.music.currentTime =0;
    this.hero = new Hero( MARGIN+BLOCK_WIDTH, 8*BLOCK_HEIGHT );
    this.levels = [];
    this.generateNewLevel();
    this.generateNewLevel();
    this.level = 0;
};

Game.prototype.generateNewLevel = function(){
    var level = new Level();
    level.init();
    this.levels.push(level);
}
