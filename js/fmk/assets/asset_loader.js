function AssetLoader() {
    this.images = [];
    this.totalToLoad = APP_TOTAL_ASSETS_NB;
    this.totalLoaded = 0;
    this.isReady = false;
};

AssetLoader.prototype.load = function() {
    LOGGER.log("loading assets");
    
    //UI
    this._loadImage("background", "resources/img/background.png", BCK_WIDTH, BCK_HEIGHT);
    this._loadImage("background_level", "resources/img/background_level.png", BCK_WIDTH, BCK_HEIGHT);
    this._loadImage("title", "resources/img/title.png", 512, 480);
    this._loadImage("gameover", "resources/img/gameover.png", 512, 480);
    this._loadImage("chipset", "resources/img/chipset.png", 288, 144);
    this._loadImage("heart", "resources/img/heart.png", 2*HEART_WIDTH, HEART_HEIGHT);
    this._loadImage("supportheart", "resources/img/supportheart.png", 3*BLOCK_WIDTH, BLOCK_HEIGHT);
    this._loadImage("floormarker", "resources/img/floor.png", FLOOR_WIDTH, FLOOR_HEIGHT);
    this._loadImage("numbers", "resources/img/numbers.png", NUMBER_WIDTH, NUMBER_HEIGHT);


    this._loadImage("button", "resources/img/button.png", 2*BLOCK_WIDTH, BLOCK_HEIGHT);
    this._loadImage("door", "resources/img/door.png", 20*BLOCK_WIDTH, 2*BLOCK_HEIGHT);
    this._loadImage("key", "resources/img/key.png", BLOCK_WIDTH*12, 2*BLOCK_HEIGHT);
    this._loadImage("coffre", "resources/img/coffre.png", 12*BLOCK_WIDTH, 2*BLOCK_HEIGHT);

    this._loadImage("heroleft", "resources/img/heroleft.png", 2550, 96);
    this._loadImage("heroright", "resources/img/heroright.png", 2550, 96);

    this._loadImage("slimeright", "resources/img/slimeright.png", 14*2*SLIME_WIDTH, 2*SLIME_HEIGHT);
    this._loadImage("slimeleft", "resources/img/slimeleft.png", 14*2*SLIME_WIDTH, 2*SLIME_HEIGHT);

    this._loadImage("skeletonright", "resources/img/skeletonright.png", 864, 96);
    this._loadImage("skeletonleft", "resources/img/skeletonleft.png", 9*2*SKELETON_WIDTH, 2*SKELETON_HEIGHT);

};

AssetLoader.prototype.getImage = function(name) {
    return this.images[name];
};

AssetLoader.prototype._loadImage = function(name, src, width, height) {
    var img = new Image(width, height);
    img.src = src;

    var me = this;
    img.onload = function() {
        me.images[name] = img;

        me.totalLoaded++;

        if (me.totalLoaded === me.totalToLoad) {
            LOGGER.log("assets loaded");
            me.isReady = true;
        }
    };
};
