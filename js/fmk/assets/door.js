function Door(x, y){
    this.x = x;
    this.y = y;
    this.open = false;
}

Door.prototype.onCollide = function(level){
    level.finished=true;
}