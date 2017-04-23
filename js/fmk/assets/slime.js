function Slime(x,y){
    this.x = x;
    this.y = y;
    this.life=1;
    this.isSlime = true;
    this.goRight=true;
    this.died = false;
    this.hasKey = false;
    this.hittedAnim = false;
    this.hittable = true;

    randDir = Math.ceil(Math.random() * (this.nbFloors));
    if(randDir == 1){
        this.goRight = true;
    }
    else{
        this.goRight = false;
    }
    
}

Slime.prototype.update = function(level){
    if(!this.died){
        var newX = this.x;
        if(this.goRight){
            newX += SLIME_SPEED;
        }
        else{
            newX -= SLIME_SPEED;
        }

        if(!this.goRight){
            var block = level.grid.getBlock( newX, this.y + SLIME_HEIGHT+10);
        }
        else{
            var block = level.grid.getBlock( newX+SLIME_WIDTH, this.y + SLIME_HEIGHT+10);
        }
        if(block != null && block.isFloor){
            this.x = newX;
        }
        else{
            this.goRight = !this.goRight;
        }
    }
}

Slime.prototype.hitted = function( level ){
    this.hittedAnim = true;
    this.life--;
    if(this.life<=0){
        this.died = true;
    }
    if(this.hasKey){
        level.key = new Key(this.x, this.y);
    }
}

