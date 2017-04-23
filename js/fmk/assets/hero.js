function Hero(x, y){
    this.x = x;
    this.y = y;
    this.hitBox = new HitBox(x, y);
    
    this.restCounter=0;
    this.attackCounter=0;
    this.hitted=false;
    this.hittedAnim = false;
    this.goRight = true;
    this.falling = false;
    //JUMPING PROPERTIES
    this.jumping = false;
    this.jumpingUp = true;
    this.firstJump = false;
    this.jumpReleased = true;
    this.attacking = false;
    this.died = false;
    this.hittable = true;

    this.initialY;
    this.life = 3;
}

Hero.prototype.update = function(key, level){
    
    
    var newX = this.x; 
    var newY = this.y;

    switch(key){
        //LEFT
        case 37 : 
            this.moving = true;
            this.goRight = false;
            newX -= SPEED_X; 
            break;
        //RIGHT
        case 39 : 
            this.moving = true;
            this.goRight = true;
            newX += SPEED_X; 
            break;
        default: 
            this.moving = false;
            break;
    }

    var newY = this.getNewYJump();

    //COLLIDES WITH WALLS
    if(!this.collidesWWalls( newX, this.y, level )){
        this.x = newX;
    }

    //PLATFORM AND JUMP STUFF
    if( !this.collidesWPlatform( this.x, newY, level ) || 
        this.jumpingUp ||
        this.collidesPlatformFromBottom( this.x, newY, level )
        ){

        this.y = newY;
    }
    else{
        this.jumping = false;
        this.jumpingUp = true;
        this.falling = false;
    }

    if(!this.isOnFloor( this.x, this.y, level) && !this.jumping){        
        this.falling = true;
        this.y += SPEED_JUMP;
    }
    
    //COLLIDES WITH MONSTERS
    if(this.hitted){
        this.restCounter++;
        if(this.restCounter>=REST_TIME){
            this.hitted=false;
            this.restCounter=0;
        }
    }
    else{
        level.collidesHero(this);
    }

    //COLLIDES WITH ITEM
    level.collidesItem(this);

    this.hitBox.update(this.x, this.y);
}

Hero.prototype.collidesWPlatform = function( x, y, level){

    for(i=0; i< level.grid.lines.length; i++){
        for(j=0; j<level.grid.lines[i].blocks.length; j++){
            if( this.collides(x, y, level.grid.lines[i].blocks[j]) && level.grid.lines[i].blocks[j].platform){
                return true;
            }
       }
    }

    return false;
}

Hero.prototype.collidesPlatformFromBottom = function( x, y, level ){
    for(i=0; i< level.grid.lines.length; i++){
        for(j=0; j<level.grid.lines[i].blocks.length; j++){
            if( this.collides(x, y, level.grid.lines[i].blocks[j]) && level.grid.lines[i].blocks[j].platform){
                if(y + HERO_HEIGHT > level.grid.lines[i].blocks[j].y + BLOCK_HEIGHT ){
                    return true;
                }
            }
       }
    }

    return false;
}

Hero.prototype.collidesWWalls = function(x, y, level){
    for(i=0; i< level.grid.lines.length; i++){
        for(j=0; j<level.grid.lines[i].blocks.length; j++){
            if( this.collides(x, y, level.grid.lines[i].blocks[j]) && level.grid.lines[i].blocks[j].brickStuff ){
                return true;
            }
        }
    }
    
    return false;
}

Hero.prototype.collidesWRoofs = function(){
    if(this.y <= BLOCK_HEIGHT)
        return true;
    return false;
}

Hero.prototype.collides = function(x, y, block){
    if( x < block.x + BLOCK_WIDTH &&
        x + this.hitBox.width > block.x &&
        y < block.y + BLOCK_HEIGHT &&
        y + this.hitBox.height > block.y
    ){
        return true;
    }
    else{
        return false;
    }
}

Hero.prototype.isOnFloor = function(x, y, level){
    var y = this.y + HERO_HEIGHT + 10;
    var x = this.x;
    if(!this.goRight){
        x += HERO_HEIGHT - 10;
    }
    else {
        x += 10;
    }

    var block = level.grid.getBlock(x, y);

    if( block == null){
        return false;
    }
    else {
        
        if(!block.isFloor ){
            return false;
        }
    }


    return true;
}

Hero.prototype.getNewYJump = function(){

    if(this.firstJump){
        this.initialY = this.y;
        this.firstJump = false;
        this.jumpReleased = false;
    }
    
    if(this.jumping){
        //LIMITE HAUT
        if(this.jumpingUp && (this.y <= this.initialY - JUMP_HEIGHT*BLOCK_HEIGHT || this.collidesWRoofs()) ){
            this.jumpingUp = false;
        }
        //LIMITE BAS 
        if(!this.jumpingUp && this.y >= this.initialY){
            this.jumping = false;
            this.jumpingUp = true;
            return this.y;
        }

        if(this.jumpingUp){
            var newY = this.y - SPEED_JUMP;
            return newY;
        }
        else{
            var newY = this.y + SPEED_JUMP;
            return newY;
        }

    }
    else {
        return this.y;
    }
}

Hero.prototype.attack = function(level){
    this.attacking = true;

    var xAtt;
    var yAtt = this.y + 15;

    if( this.goRight){
        var xAtt = this.x + HERO_WIDTH+15;
    }
    else{
        var xAtt = this.x - 15;
    }

    level.heroAttMonster(xAtt, yAtt);
}