function Skeleton(x,y){
    this.x = x;
    this.y = y;
    this.life = 1;
    this.isSlime = false;
    this.heroInSight = false;
    this.goRight = true;
    this.died = false;
    this.hittedAnim = false;
    this.hittable = true;
}

Skeleton.prototype.update = function(level){
    if( this.heroInSight && !this.died){
        var newX = this.x;
        if(this.goRight){
            newX += SKELETON_SPEED;
        }
        else{
            newX -= SKELETON_SPEED;
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

    }
}

Skeleton.prototype.hitted = function( level ){
    this.hittedAnim = true;
    this.life--;
    if(this.life<=0){
        this.died = true;
    }
}