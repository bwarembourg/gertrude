function Level(){
    this.grid = new Grid();
    this.hero;
    this.monsters = [];

    this.nbFloors;
    this.x =0;
    this.y =0;
}

Level.prototype.init = function(){

    this.grid.init();
    this.nbFloors = this.grid.countBlocksWithFloor();
    for(i=0; i< NB_SLIMES; i++){
        this.placeSlime();
    }

}

Level.prototype.placeSlime = function(){
    var randPos = Math.ceil(Math.random() * (this.nbFloors)) -1;
    var x;
    var y;
    var counter =0;
    for(i=0; i< this.grid.lines.length; i++){
        for(j=0; j< this.grid.lines[i].blocks.length; j++){
            var block = this.grid.lines[i].blocks[j];
            if(block.isFloor && !block.isPlayer){
                counter++;
                if(counter==randPos){
                    x = block.x;
                    y = block.y - BLOCK_HEIGHT;
                }
            }
        }
    }

    var slime = new Slime(x, y);

    this.monsters.push(slime);
}