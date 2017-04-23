function Level(){
    this.grid = new Grid();
    this.hero;
    this.monsters = [];

    this.button;
    this.coffre;
    this.key;
    this.door = new Door(MARGIN+BLOCK_WIDTH, 8*BLOCK_HEIGHT);
    this.nbFloors;
    this.x =0;
    this.y =0;

    this.finished = false;
}

Level.prototype.setDifficulty = function(level){

    if(level<2){
        NB_SLIMES = 1;
        NB_PLATFORM = 6;
        NB_HOLES = 2;
    }
    else if(level < 4){
        NB_SLIMES = 3;
        NB_PLATFORM = 4;
        NB_HOLES = 3;
    }
    else if(level < 6){
        NB_HOLES = 4;
        NB_PLATFORM = 3;
    }
    else if(level < 8){
        NB_HOLES = 5;
        NB_PLATFORM = 5;
        NB_SLIMES = 1;
        NB_SKELETON = 1;
    }
    else if(level < 10){
        NB_SLIMES = 3;
    }
    else if(level < 12){
        NB_PLATFORM = 4;
    }
    else if(level < 14){
        NB_SKELETON = 2;
        NB_SLIME = 1;
    }
    else if(level < 16){
        NB_SLIME =2;
    }
    else if(level < 18){
        NB_SLIME = 3;
    }
    else if(level < 20){
        NB_PLATFORM = 3;
    }
    else if(level < 22){
        NB_HOLES = 5;
    }

}

Level.prototype.init = function( level ){

    this.setDifficulty(level);
    this.grid.init();
    this.nbFloors = this.grid.countBlocksWithFloor();
    for(k=0; k< NB_SLIMES; k++){
        this.placeMonster(true);
    }
    for(k=0; k< NB_SKELETONS; k++){
        this.placeMonster(false);
    }
    this.monsters[0].hasKey = true;

    //PLACE ITEM
    this.placeItem( "coffre" );
    this.placeItem( "button" );
}

Level.prototype.placeMonster = function(slime){
    var randPos = Math.ceil(Math.random() * (this.nbFloors)) -1;
    var x;
    var y;
    var counter = 0;
    for(i=0; i< this.grid.lines.length; i++){
        for(j=0; j< this.grid.lines[i].blocks.length; j++){
            var block = this.grid.lines[i].blocks[j];
            if(block.isFloor && !block.isPlayer && !block.hasMonster){
                if(counter==randPos){
                    x = block.x;
                    y = block.y - BLOCK_HEIGHT;
                    block.hasMonster = true;
                }
                counter++;
            }
        }
    }

    var monster;
    if(slime)
        var monster = new Slime(x, y);
    else
        var monster = new Skeleton(x, y);

    this.monsters.push(monster);
}

Level.prototype.placeItem = function(type){
    
    if(type=="button")
        var randPos = Math.ceil(Math.random() * (this.nbFloors)) -1;
    else
       var randPos = Math.ceil(Math.random() * (this.nbFloors)) -1;

    var x;
    var y;
    var counter = 0;
    for(i=0; i< this.grid.lines.length; i++){
        for(j=0; j< this.grid.lines[i].blocks.length; j++){
            var block = this.grid.lines[i].blocks[j];
            if(block.isFloor && !block.isPlayer){
                if(counter==randPos){
                    x = block.x;
                    y = block.y - BLOCK_HEIGHT;
                }
                counter++;
            }
        }
    }
    console.log("type "+type);
    switch(type){
        case "button" :
            this.button = new Button(x, y);
            break;
        case "coffre" :
            this.coffre = new Coffre(x, y);
            break;
    }
}

Level.prototype.update = function(hero){
    
    //SKELETON HANDLING
    for(i=0; i<this.monsters.length; i++){
        var monster = this.monsters[i];
        if(monster != null){
            if(!monster.isSlime){
                if(monster.y >= hero.y && monster.y <= hero.y + HERO_HEIGHT){
                    monster.heroInSight= true;
                    if(!monster.died && !monster.hittedAnim){
                        if(monster.x >= hero.x ){
                            monster.goRight = false;
                        }
                        else{
                            monster.goRight = true;
                        }
                    }
                }
            }
        }
    }
}

Level.prototype.collidesHero = function( hero ){
    for(var m=0; m<this.monsters.length; m++){
        if( hero.collides( hero.x, hero.y, this.monsters[m]) && !this.monsters[m].died ){
            hero.life--;
            hero.hitted=true;
            hero.hittedAnim = true;
            if(hero.life<=0){
                hero.life=0;
                hero.died = true;
            }
        }
    }
}

Level.prototype.collidesItem = function( hero ){
    //BUTTON
    if( hero.collides( hero.x, hero.y, this.button)){
        this.button.onCollide( this );
    }
    //KEY 
    if(this.key!=null && this.key.visible){
        if( hero.collides( hero.x, hero.y, this.key)){
            this.key.onCollide( this );
        }
    }
    //Coffre
    if(this.coffre.openable && this.coffre.visible){
        if( hero.collides( hero.x, hero.y, this.coffre)){
            this.coffre.onCollide( this );
        }
    }

    //Door
    if(this.door.open){
        if(hero.collides( hero.x, hero.y, this.door)){
            this.door.onCollide( this );
        }
    }
        
}

Level.prototype.heroAttMonster = function( x, y){
    for(var l=0; l<this.monsters.length; l++){
        var monster = this.monsters[l];
        if( x >= monster.x-BLOCK_WIDTH && x <= monster.x + SLIME_WIDTH +BLOCK_WIDTH && y >= monster.y && y <= monster.y + SLIME_HEIGHT){
            monster.hitted( this );
        }
    }
}