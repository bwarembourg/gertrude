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

Level.prototype.init = function(){

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
                counter++;
                if(counter==randPos){
                    x = block.x;
                    y = block.y - BLOCK_HEIGHT;
                    block.hasMonster = true;
                }
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
        var randPos = Math.ceil(Math.random() * (NB_PLATFORM));
    else
       var randPos = Math.ceil(Math.random() * (this.nbFloors)) -1;

    var x;
    var y;
    var counter = 0;
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
        if( x >= monster.x && x <= monster.x + SLIME_WIDTH && y >= monster.y && y <= monster.y + SLIME_HEIGHT){
            monster.hitted( this );
        }
    }
}