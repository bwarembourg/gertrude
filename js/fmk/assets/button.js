function Button(x,y){
    this.x = x;
    this.y = y;

    this.pushed = false;

}

Button.prototype.onCollide = function( level ){
    this.pushed = true;
    level.coffre.visible = true;
}