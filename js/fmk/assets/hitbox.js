function HitBox(x, y){
    this.x = x;
    this.y = y;    
    this.xLimit = x + HERO_WIDTH;
    this.yLimit = y + HERO_HEIGHT;
    this.width = HERO_WIDTH;
    this.height = HERO_HEIGHT;
}

HitBox.prototype.update = function(x, y){
    this.x = x;
    this.y = y;
    this.xLimit = x + HERO_WIDTH;
    this.yLimit = y + HERO_HEIGHT;
}