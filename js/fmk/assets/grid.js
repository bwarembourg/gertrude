function Grid(){
    this.lines = [];
}

Grid.prototype.init = function(){

    this.addLine("top");
    
    var randomHole = 1+ Math.ceil(Math.random() * (NB_BLOCKS_W-1-NB_HOLES-1));

    var randomBottomPlatform;
    var randomSituation = false;
    if(randomHole+NB_PLATFORM > NB_BLOCKS_W-2){
        randomSituation = true;
        randomBottomPlatform = randomHole - NB_PLATFORM;
    }
    else{
        randomBottomPlatform = randomHole;
    }

    var randomTopPlatform;
    if(randomSituation){
        randomTopPlatform = Math.ceil(Math.random() * (NB_BLOCKS_W-1-NB_PLATFORM-1));
    }
    else if(randomHole-NB_PLATFORM<=0){
        randomTopPlatform = randomHole + NB_PLATFORM;
    }
    else if(randomHole+NB_PLATFORM>=NB_BLOCKS_W-2){
        randomTopPlatform = randomHole - NB_PLATFORM;
    }
    else{
        var random = Math.ceil(Math.random() * 2);
        switch (random){
            case 1 : randomTopPlatform = randomHole + NB_PLATFORM; break;
            default : randomTopPlatform = randomHole - NB_PLATFORM; break;
        }
    }
    if(randomTopPlatform + NB_PLATFORM > NB_BLOCKS_W-2){
        okPlatforms = NB_BLOCKS_W - 2 - randomTopPlatform;
        margin = NB_PLATFORM - okPlatforms;
        randomTopPlatform -= margin;
    }
    if(randomTopPlatform == randomBottomPlatform){
        if(randomTopPlatform-1 < 1){
            randomTopPlatform++;
        }
        else{
            randomTopPlatform--;
        }
    }
    

    for(k=1; k<NB_BLOCKS_H-1;k++){  
        if (k == 3){
            this.addLine("platform", randomTopPlatform);
        }   
        else if (k == 6 ){
            this.addLine("platform", randomBottomPlatform);
        }
        else{
            this.addLine("normal");
        }   
        
    }
    this.addLine("bottom", randomHole);

    this.addCoords();
    this.lines[9].blocks[0].isPlayer = true;
    this.lines[9].blocks[1].isPlayer = true;
    this.lines[9].blocks[2].isPlayer = true;
    this.lines[9].blocks[3].isPlayer = true;
    
    
    
};

Grid.prototype.addLine = function( type, random, no ){
    var line = new Line();
    line.init(type, random);
    this.lines.push( line );
}

Grid.prototype.addCoords = function(){
    for(var i=0; i<this.lines.length; i++){
        for(var j=0; j<this.lines[i].blocks.length; j++){
            this.lines[i].blocks[j].x = MARGIN + j*BLOCK_WIDTH;
            this.lines[i].blocks[j].y = i*BLOCK_HEIGHT;
        }
    }
}



Grid.prototype.getBlock = function(x,y){
    for(var i=0; i < this.lines.length; i++){
        for(var j=0; j < this.lines[i].blocks.length; j++){
            var block = this.lines[i].blocks[j];
            if( x >= block.x && x <= block.x + BLOCK_WIDTH && y >= block.y && y <= block.y+ BLOCK_HEIGHT ){
                return block;
            }
        }
    }

    return null;
}

Grid.prototype.countBlocksWithFloor = function(){
    var counter =0;
    for(var i=0; i < this.lines.length; i++){
        for(var j=0; j < this.lines[i].blocks.length; j++){
            if(this.lines[i].blocks[j].isFloor && !this.lines[i].blocks[j].isPlayer && !this.lines[i].blocks[j].hasMonster)
                counter++;
        }
    }
    return counter;

}