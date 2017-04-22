function AnimManager() {
    this.animations = []; 
};

AnimManager.prototype.createAnimations = function() {

    frames = [];
    frames[0] = new Frame(ASSET_MANAGER.getCrop("mc_0"), 3);
    frames[1] = new Frame(ASSET_MANAGER.getCrop("mc_1"), 3);
    frames[2] = new Frame(ASSET_MANAGER.getCrop("mc_2"), 3);
    frames[3] = new Frame(ASSET_MANAGER.getCrop("mc_3"), 3);
    frames[4] = new Frame(ASSET_MANAGER.getCrop("mc_4"), 3);
    frames[5] = new Frame(ASSET_MANAGER.getCrop("mc_5"), 3);
    this.animations["mc"] = new Anim(frames);

    frames = [];
    frames[0] = new Frame(ASSET_MANAGER.getCrop("mc_top_0"), 3);
    frames[1] = new Frame(ASSET_MANAGER.getCrop("mc_top_1"), 3);
    frames[2] = new Frame(ASSET_MANAGER.getCrop("mc_top_2"), 3);
    frames[3] = new Frame(ASSET_MANAGER.getCrop("mc_top_3"), 3);
    frames[4] = new Frame(ASSET_MANAGER.getCrop("mc_top_4"), 3);
    this.animations["mc_top"] = new Anim(frames);

    frames = [];
    frames[0] = new Frame(ASSET_MANAGER.getCrop("mc_left_0"), 3);
    frames[1] = new Frame(ASSET_MANAGER.getCrop("mc_left_1"), 3);
    frames[2] = new Frame(ASSET_MANAGER.getCrop("mc_left_2"), 3);
    frames[3] = new Frame(ASSET_MANAGER.getCrop("mc_left_3"), 3);
    frames[4] = new Frame(ASSET_MANAGER.getCrop("mc_left_4"), 3);
    frames[5] = new Frame(ASSET_MANAGER.getCrop("mc_left_5"), 3);
    this.animations["mc_left"] = new Anim(frames);
        
    this.animations["hero_walk_left"] = new Anim(frames);

};

AnimManager.prototype.getAnimation = function(name) {
    return this.animations[name];
};

AnimManager.prototype.copyAnimation = function(sourceName) {
    return new Anim(this.animations[sourceName].frames);
};