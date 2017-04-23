function Coffre(x,y){
    this.x = x;
    this.y = y;
    this.visible = false;
    this.open = false;
    this.openable = false;
}

Coffre.prototype.onCollide = function(level){
    this.open=true;
    level.door.open=true;
}