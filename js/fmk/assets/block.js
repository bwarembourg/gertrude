function Block(){
    this.type;
    this.x;
    this.y;

    this.brickStuff = false;
    this.isFloor = false;
    this.platform = false;
    this.player = false;
}

Block.prototype.init = function(type){
    this.type = type;
    if( this.type == "wall_left" || 
        this.type == "wall_right" 
        ){

        this.brickStuff = true;
    }
    if(this.type == "floor" || 
            this.type == "floor_begin" || 
            this.type == "floor_end" ||
            this.type == "platform" ||
            this.type == "platform_begin" ||
            this.type == "platform_end"){
        this.isFloor = true;
    }
    if( this.type == "platform" ||
        this.type == "platform_end" ||
        this.type == "platform_begin"){

        this.platform = true;
    }
}