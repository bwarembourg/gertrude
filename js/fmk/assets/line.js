function Line(){
    this.blocks = [];
}

Line.prototype.init = function( type, random ){
    switch ( type ){
        case "top" : this.generateTop(); break;
        case "normal" : this.generateNormal(); break;
        case "bottom" : this.generateFloor(random); break;
        case "platform" : this.generateWithPlatform(random); break;
        default: break;
    }
}

// Line.prototype.init = function( type, random ){
//     this.generateFloor(random);
// }

Line.prototype.generateTop = function(){
    this.addBlock("corner_tl");
    for(i=1;i<NB_BLOCKS_W-1; i++){
        this.addBlock("roof");
    }
    this.addBlock("corner_tr");
}

Line.prototype.generateNormal = function(){
    this.addBlock("wall_left");
    for(i=1;i<NB_BLOCKS_W-1; i++){
        this.addBlock("normal");
    }
    this.addBlock("wall_right");
}

Line.prototype.generateWithPlatform = function(random){
    this.addBlock("wall_left");
    for(i=1;i<NB_BLOCKS_W-1; i++){
        if(i == random ){
            this.addBlock("platform_begin");
        }
        else if(i == random + NB_PLATFORM-1){
            this.addBlock("platform_end");
        }
        else if(i>random && i< random+NB_PLATFORM-1){
            this.addBlock("platform");
        }
        else{
            this.addBlock("normal");
        }        
    }
    this.addBlock("wall_right");
}

Line.prototype.generateFloor = function( random ){
    this.addBlock("corner_bl");
    if(random==2){
        this.addBlock("floor_end");
    }
    else{
        this.addBlock("floor");
    }
    
    for(var i=2; i < NB_BLOCKS_W-1; i++ ){
        if(i == random-1 && NB_HOLES !=0 ){
            this.addBlock("floor_end");
        }
        else if(i == random + NB_HOLES && NB_HOLES != 0){
            this.addBlock("floor_begin");
        }
        else if(i>=random && i<= random+NB_HOLES-1 && NB_HOLES != 0){
            this.addBlock("normal");
        }
        else{
            this.addBlock("floor");
        }
    }
    this.addBlock("corner_br");
}

Line.prototype.addBlock = function(type){
    var block = new Block();
    block.init( type );
    this.blocks.push( block );
}