function Game() {
    this.stateName="Game";
    this.key = 0;

    this.levels = [];
    this.level = 0;
    this.transition = false;

    this.jumpReleased = true;
    this.hero = new Hero(MARGIN+BLOCK_WIDTH, 8*BLOCK_HEIGHT);
    this.floorNo = new FloorNo();

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
    this.heartFull = ASSET_MANAGER.getCrop("heartfull");
    this.heartEmpty = ASSET_MANAGER.getCrop("heartempty");
    this.buttonSprite = ASSET_MANAGER.getCrop("button");
    this.buttonPushedSprite = ASSET_MANAGER.getCrop("buttonpushed");
    this.coffreSprite = ASSET_MANAGER.getCrop("coffre");
    this.coffreOpenSprite = ASSET_MANAGER.getCrop("coffreopen");
    this.doorClosedSprite = ASSET_MANAGER.getCrop("doorclosed");
    this.doorOpenSprite = ASSET_MANAGER.getCrop("dooropen");
    this.keySprite = ASSET_MANAGER.getCrop("key");

    this.supportHeart = ASSET_MANAGER.getCrop("supportheart");
    this.floorMarker = ASSET_MANAGER.getCrop("floormarker");

    this.heroRightIdle = ASSET_MANAGER.getAnimation("hero_right_idle");
    this.heroLeftIdle = ASSET_MANAGER.getAnimation("hero_left_idle");
    this.heroRightWalk = ASSET_MANAGER.getAnimation("hero_right_walk");
    this.heroLeftWalk = ASSET_MANAGER.getAnimation("hero_left_walk");
    this.heroRightJump = ASSET_MANAGER.getCrop("hero_right_jump");
    this.heroLeftJump = ASSET_MANAGER.getCrop("hero_left_jump");
    this.heroRightAttack = ASSET_MANAGER.getAnimation("hero_right_attack");
    this.heroLeftAttack = ASSET_MANAGER.getAnimation("hero_left_attack");
    this.heroRightHit = ASSET_MANAGER.getAnimation("hero_right_hit");
    this.heroLeftHit = ASSET_MANAGER.getAnimation("hero_left_hit");
    this.heroRightDie = ASSET_MANAGER.getAnimation("hero_right_die");
    this.heroLeftDie = ASSET_MANAGER.getAnimation("hero_left_die");

    this.slimeRightWalk = ASSET_MANAGER.getAnimation("slime_right_walk");
    this.slimeLeftWalk = ASSET_MANAGER.getAnimation("slime_left_walk");
    this.slimeRightHit = ASSET_MANAGER.getAnimation("slime_right_hit");
    this.slimeLeftHit = ASSET_MANAGER.getAnimation("slime_left_hit");
    this.slimeRightDead = ASSET_MANAGER.getCrop("slime_right_hit_8");
    this.slimeLeftDead = ASSET_MANAGER.getCrop("slime_left_hit_8");

    this.skeletonSprite = ASSET_MANAGER.getCrop("skeleton_right_walk_1");
    this.skeletonRightWalk = ASSET_MANAGER.getAnimation("skeleton_right_walk");
    this.skeletonLeftWalk = ASSET_MANAGER.getAnimation("skeleton_left_walk"); 
    this.skeletonRightHit = ASSET_MANAGER.getAnimation("skeleton_right_hit");
    this.skeletonLeftHit = ASSET_MANAGER.getAnimation("skeleton_left_hit");
    this.skeletonRightDead = ASSET_MANAGER.getCrop("skeleton_right_hit_6");
    this.skeletonLeftDead = ASSET_MANAGER.getCrop("skeleton_left_hit_6");
    

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
    
    this.levels[this.level].update( this.hero );
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
    //ITEMS
    var button = this.levels[ this.level ].button;
    if(!button.pushed)
        this.buttonSprite.render( button.x, button.y );
    else
        this.buttonPushedSprite.render( button.x, button.y );
    
    var coffre = this.levels[ this.level ].coffre;
    if(coffre.visible){
        if(!coffre.open)
            this.coffreSprite.render( coffre.x, coffre.y - BLOCK_WIDTH );
        else
            this.coffreOpenSprite.render( coffre.x, coffre.y - BLOCK_WIDTH );
    }

    var door = this.levels[ this.level ].door;
    if(!door.open)
        this.doorClosedSprite.render( door.x, door.y - BLOCK_HEIGHT );
    else   
        this.doorOpenSprite.render( door.x, door.y - BLOCK_HEIGHT);

    //HERO
    this.hero.update(this.key, this.levels[this.level]);
    
    if(this.hero.hittedAnim && this.hero.hittable){
        var ended;
        if(this.hero.goRight)
            var ended = this.heroRightHit.playOnce( this.hero.x - 51, this.hero.y - BLOCK_HEIGHT ); 
        else
            var ended = this.heroLeftHit.playOnce( this.hero.x - 51, this.hero.y - BLOCK_HEIGHT ); 
        if(ended == 'N'){
            this.hero.hittedAnim = false;
        }
        
    }
    else if(this.hero.died){
        var ended;
        if(this.hero.goRight)
            var ended = this.heroRightDie.playOnce( this.hero.x - 51, this.hero.y - BLOCK_HEIGHT ); 
        else   
            var ended = this.heroLeftDie.playOnce( this.hero.x - 51, this.hero.y - BLOCK_HEIGHT ); 
        if(ended == 'N'){
            this.hero.hittable = false;
            STATE_MANAGER.switchToState("gameover");
        }
    }
    else if(this.hero.attacking){
        var ended;
        if(this.hero.goRight)
            var ended = this.heroRightAttack.playOnce( this.hero.x - 51, this.hero.y - BLOCK_HEIGHT );
        else
            var ended = this.heroLeftAttack.playOnce( this.hero.x - 51, this.hero.y - BLOCK_HEIGHT );
        if(ended == 'N'){
            this.hero.attacking = false;
        }

    }
    else if(!this.hero.jumping){
        if(!this.hero.moving){
            if(this.hero.goRight)
                this.heroRightIdle.play( this.hero.x - 51, this.hero.y - BLOCK_HEIGHT);
            else
                this.heroLeftIdle.play( this.hero.x - 51, this.hero.y - BLOCK_HEIGHT);
        }
        else {
            if(this.hero.goRight)
                this.heroRightWalk.play( this.hero.x - 51, this.hero.y - BLOCK_HEIGHT);
            else   
                this.heroLeftWalk.play( this.hero.x - 51, this.hero.y - BLOCK_HEIGHT);
        }
    }
    else{
        if(this.hero.goRight)
            this.heroRightJump.render( this.hero.x - 51, this.hero.y - BLOCK_HEIGHT);
        else
            this.heroLeftJump.render( this.hero.x - 51, this.hero.y - BLOCK_HEIGHT);
    }

    //MONSTRES
    for(var i=0; i< this.levels[this.level].monsters.length; i++){
        var monster = this.levels[this.level].monsters[i];
        monster.update(this.levels[this.level]);
        if(monster.isSlime){
            if(monster.hittedAnim && monster.hittable){
                var ended;
                if(monster.goRight)
                    var ended = this.slimeRightHit.playOnce( monster.x - SLIME_WIDTH/2, monster.y - SLIME_HEIGHT);
                else
                    var ended = this.slimeLeftHit.playOnce( monster.x - SLIME_WIDTH/2, monster.y - SLIME_HEIGHT);
                if(ended == 'N'){
                    monster.hittedAnim = false;
                }
            }
            else if(monster.died){
                monster.hittable =false;
                if(monster.goRight)
                    this.slimeRightDead.render( monster.x - SLIME_WIDTH/2, monster.y - SLIME_HEIGHT);
                else
                    this.slimeLeftDead.render( monster.x - SLIME_WIDTH/2, monster.y - SLIME_HEIGHT);
            }
            else{
                if(monster.goRight)
                    this.slimeRightWalk.play( monster.x - SLIME_WIDTH/2, monster.y - SLIME_HEIGHT);
                else
                    this.slimeLeftWalk.play( monster.x - SLIME_WIDTH/2, monster.y - SLIME_HEIGHT);
            }
            
        }
        else{
            if(monster.hittedAnim && monster.hittable){
                var ended;
                if(monster.goRight)
                    var ended = this.skeletonRightHit.playOnce( monster.x - SKELETON_WIDTH/2, monster.y - SKELETON_HEIGHT);
                else
                    var ended = this.skeletonLeftHit.playOnce( monster.x - SKELETON_WIDTH/2, monster.y - SKELETON_HEIGHT);
                if(ended == 'N'){
                    monster.hittedAnim = false;
                }
            }
            else if(monster.died){
                monster.hittable = false;
                if(monster.goRight)
                    this.skeletonRightDead.render( monster.x - SKELETON_WIDTH/2, monster.y - SKELETON_HEIGHT);
                else
                    this.skeletonLeftDead.render( monster.x - SKELETON_WIDTH/2, monster.y - SKELETON_HEIGHT);
            }
            else{
                if( !monster.heroInSight ){
                    this.skeletonSprite.render( monster.x - SKELETON_WIDTH/2, monster.y - SKELETON_HEIGHT);
                }
                else{
                    if( monster.goRight )
                        this.skeletonRightWalk.play(monster.x - SKELETON_WIDTH/2, monster.y - SKELETON_HEIGHT);
                    else   
                        this.skeletonLeftWalk.play(monster.x - SKELETON_WIDTH/2, monster.y - SKELETON_HEIGHT);
                }
            }
        }
    }

    //KEY
    var key = this.levels[ this.level ].key;
    if(key!= null && key.visible){
        this.keySprite.render( key.x, key.y - BLOCK_HEIGHT);
    }

    if(this.hero.jumpReleased){
        this.jumpReleased = true;
    }
    if(this.hero.y>BCK_HEIGHT){
        STATE_MANAGER.switchToState("gameover");
    }
    
    //UI
    this.floorMarker.render(FLOOR_X, FLOOR_Y);
    var numbers = this.floorNo.getNumbers( this.level );
    for(n=0; n<numbers.length; n++){
        ASSET_MANAGER.getCrop("n"+numbers[n]).render( this.floorNo.x + n*(NUMBER_WIDTH-12), this.floorNo.y);
    }


    this.supportHeart.render(LIFE_X, LIFE_Y);
    switch( this.hero.life ){
        case 0 : 
            this.heartEmpty.render(LIFE_X, LIFE_Y);
            this.heartEmpty.render(LIFE_X+HEART_WIDTH, LIFE_Y);
            this.heartEmpty.render(LIFE_X+2*HEART_WIDTH, LIFE_Y);
            break;
        case 1 :
            this.heartFull.render(LIFE_X, LIFE_Y);
            this.heartEmpty.render(LIFE_X+HEART_WIDTH, LIFE_Y);
            this.heartEmpty.render(LIFE_X+2*HEART_WIDTH, LIFE_Y);
            break;
        case 2 :
            this.heartFull.render(LIFE_X, LIFE_Y);
            this.heartFull.render(LIFE_X+HEART_WIDTH, LIFE_Y);
            this.heartEmpty.render(LIFE_X+2*HEART_WIDTH, LIFE_Y);
            break;
        case 3 :
            this.heartFull.render(LIFE_X, LIFE_Y);
            this.heartFull.render(LIFE_X+HEART_WIDTH, LIFE_Y);
            this.heartFull.render(LIFE_X+2*HEART_WIDTH, LIFE_Y);
            break;
    }
    
    if( this.levels[this.level].finished ){
        this.transition = true;
        this.level++;
        this.generateNewLevel();
    }
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
    //ATTACK
    else if(e.which == 88){
        this.hero.attack( this.levels[ this.level ] );
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
    console.log("key : "+e.which);

}

Game.prototype.reset = function() {
    this.music.pause();
    this.music.currentTime =0;
    this.music.play();
    this.hero = new Hero( MARGIN+BLOCK_WIDTH, 8*BLOCK_HEIGHT );
    this.levels = [];
    this.level = 0;
    this.generateNewLevel();
    this.generateNewLevel();
};

Game.prototype.generateNewLevel = function(){
    this.hero = new Hero(MARGIN+BLOCK_WIDTH, 8*BLOCK_HEIGHT);
    var level = new Level();
    level.init( this.level );
    this.levels.push(level);
}
