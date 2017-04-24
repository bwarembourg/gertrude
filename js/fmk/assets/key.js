function Key(x,y){
    this.x = x;
    this.y = y;
    this.visible = true;
    this.visibleAnim = true;
}

Key.prototype.onCollide = function(level){
    level.coffre.openable = true;
    this.visible = false;
}