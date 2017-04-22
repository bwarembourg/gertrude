function AssetLoader() {
    this.images = [];
    this.totalToLoad = APP_TOTAL_ASSETS_NB;
    this.totalLoaded = 0;
    this.isReady = false;
};

AssetLoader.prototype.load = function() {
    LOGGER.log("loading assets");
    this._loadImage("background", "resources/img/background.jpg", BCK_WIDTH, BCK_HEIGHT);
    this._loadImage("title", "resources/img/title.jpg", 512, 480);
    this._loadImage("gameover", "resources/img/gameover.jpg", 512, 480);
    this._loadImage("chipset", "resources/img/chipset.png", 288, 144);
    this._loadImage("hero", "resources/img/hero.png", HERO_WIDTH, HERO_HEIGHT);
    this._loadImage("slime", "resources/img/slime.png", SLIME_WIDTH, SLIME_HEIGHT);
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
