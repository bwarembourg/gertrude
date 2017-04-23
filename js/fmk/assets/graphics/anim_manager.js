function AnimManager() {
    this.animations = []; 
};

AnimManager.prototype.createAnimations = function() {

    frames = [];
    frames[0] = new Frame(ASSET_MANAGER.getCrop("hero_right_idle_1"), 5);
    frames[1] = new Frame(ASSET_MANAGER.getCrop("hero_right_idle_2"), 5);
    this.animations["hero_right_idle"] = new Anim(frames);

    frames = [];
    frames[0] = new Frame(ASSET_MANAGER.getCrop("hero_left_idle_1"), 5);
    frames[1] = new Frame(ASSET_MANAGER.getCrop("hero_left_idle_2"), 5);
    this.animations["hero_left_idle"] = new Anim(frames);

    frames = [];
    frames[0] = new Frame(ASSET_MANAGER.getCrop("hero_right_walk_1"), 5);
    frames[1] = new Frame(ASSET_MANAGER.getCrop("hero_right_walk_2"), 5);
    frames[2] = new Frame(ASSET_MANAGER.getCrop("hero_right_walk_3"), 5);
    this.animations["hero_right_walk"] = new Anim(frames);

    frames = [];
    frames[0] = new Frame(ASSET_MANAGER.getCrop("hero_left_walk_1"), 5);
    frames[1] = new Frame(ASSET_MANAGER.getCrop("hero_left_walk_2"), 5);
    frames[2] = new Frame(ASSET_MANAGER.getCrop("hero_left_walk_3"), 5);
    this.animations["hero_left_walk"] = new Anim(frames);

    frames = [];
    frames[0] = new Frame(ASSET_MANAGER.getCrop("hero_right_attack_1"), 2);
    frames[1] = new Frame(ASSET_MANAGER.getCrop("hero_right_attack_2"), 2);
    frames[2] = new Frame(ASSET_MANAGER.getCrop("hero_right_attack_3"), 2);
    frames[3] = new Frame(ASSET_MANAGER.getCrop("hero_right_attack_4"), 2);
    this.animations["hero_right_attack"] = new Anim(frames);

    frames = [];
    frames[0] = new Frame(ASSET_MANAGER.getCrop("hero_left_attack_1"), 2);
    frames[1] = new Frame(ASSET_MANAGER.getCrop("hero_left_attack_2"), 2);
    frames[2] = new Frame(ASSET_MANAGER.getCrop("hero_left_attack_3"), 2);
    frames[3] = new Frame(ASSET_MANAGER.getCrop("hero_left_attack_4"), 2);
    this.animations["hero_left_attack"] = new Anim(frames);
    
    frames = [];
    frames[0] = new Frame(ASSET_MANAGER.getCrop("hero_left_hit_1"), 2);
    frames[1] = new Frame(ASSET_MANAGER.getCrop("hero_left_hit_2"), 2);
    frames[2] = new Frame(ASSET_MANAGER.getCrop("hero_left_hit_3"), 2);
    frames[3] = new Frame(ASSET_MANAGER.getCrop("hero_left_hit_4"), 2);
    this.animations["hero_left_hit"] = new Anim(frames);
    
    frames = [];
    frames[0] = new Frame(ASSET_MANAGER.getCrop("hero_right_hit_1"), 2);
    frames[1] = new Frame(ASSET_MANAGER.getCrop("hero_right_hit_2"), 2);
    frames[2] = new Frame(ASSET_MANAGER.getCrop("hero_right_hit_3"), 2);
    frames[3] = new Frame(ASSET_MANAGER.getCrop("hero_right_hit_4"), 2);
    this.animations["hero_right_hit"] = new Anim(frames);
    
    frames = [];
    frames[0] = new Frame(ASSET_MANAGER.getCrop("hero_right_die_1"), 2);
    frames[1] = new Frame(ASSET_MANAGER.getCrop("hero_right_die_2"), 2);
    frames[2] = new Frame(ASSET_MANAGER.getCrop("hero_right_die_3"), 2);
    frames[3] = new Frame(ASSET_MANAGER.getCrop("hero_right_die_4"), 100);
    this.animations["hero_right_die"] = new Anim(frames);

    frames = [];
    frames[0] = new Frame(ASSET_MANAGER.getCrop("hero_left_die_1"), 2);
    frames[1] = new Frame(ASSET_MANAGER.getCrop("hero_left_die_2"), 2);
    frames[2] = new Frame(ASSET_MANAGER.getCrop("hero_left_die_3"), 2);
    frames[3] = new Frame(ASSET_MANAGER.getCrop("hero_left_die_4"), 100);
    this.animations["hero_left_die"] = new Anim(frames);
    

    frames = [];
    frames[0] = new Frame(ASSET_MANAGER.getCrop("slime_right_walk_1"), 8);
    frames[1] = new Frame(ASSET_MANAGER.getCrop("slime_right_walk_2"), 8);
    frames[2] = new Frame(ASSET_MANAGER.getCrop("slime_right_walk_3"), 8);
    frames[3] = new Frame(ASSET_MANAGER.getCrop("slime_right_walk_4"), 8);
    frames[4] = new Frame(ASSET_MANAGER.getCrop("slime_right_walk_5"), 8);
    frames[5] = new Frame(ASSET_MANAGER.getCrop("slime_right_walk_6"), 8);
    this.animations["slime_right_walk"] = new Anim(frames);

    frames = [];
    frames[0] = new Frame(ASSET_MANAGER.getCrop("slime_left_walk_1"), 8);
    frames[1] = new Frame(ASSET_MANAGER.getCrop("slime_left_walk_2"), 8);
    frames[2] = new Frame(ASSET_MANAGER.getCrop("slime_left_walk_3"), 8);
    frames[3] = new Frame(ASSET_MANAGER.getCrop("slime_left_walk_4"), 8);
    frames[4] = new Frame(ASSET_MANAGER.getCrop("slime_left_walk_5"), 8);
    frames[5] = new Frame(ASSET_MANAGER.getCrop("slime_left_walk_6"), 8);
    this.animations["slime_left_walk"] = new Anim(frames);

    frames = [];
    frames[0] = new Frame(ASSET_MANAGER.getCrop("slime_right_hit_1"), 2);
    frames[1] = new Frame(ASSET_MANAGER.getCrop("slime_right_hit_2"), 2);
    frames[2] = new Frame(ASSET_MANAGER.getCrop("slime_right_hit_3"), 2);
    frames[3] = new Frame(ASSET_MANAGER.getCrop("slime_right_hit_4"), 2);
    frames[4] = new Frame(ASSET_MANAGER.getCrop("slime_right_hit_5"), 2);
    frames[5] = new Frame(ASSET_MANAGER.getCrop("slime_right_hit_6"), 2);
    frames[6] = new Frame(ASSET_MANAGER.getCrop("slime_right_hit_7"), 2);
    frames[7] = new Frame(ASSET_MANAGER.getCrop("slime_right_hit_8"), 2);
    this.animations["slime_right_hit"] = new Anim(frames);

    frames = [];
    frames[0] = new Frame(ASSET_MANAGER.getCrop("slime_left_hit_1"), 2);
    frames[1] = new Frame(ASSET_MANAGER.getCrop("slime_left_hit_2"), 2);
    frames[2] = new Frame(ASSET_MANAGER.getCrop("slime_left_hit_3"), 2);
    frames[3] = new Frame(ASSET_MANAGER.getCrop("slime_left_hit_4"), 2);
    frames[4] = new Frame(ASSET_MANAGER.getCrop("slime_left_hit_5"), 2);
    frames[5] = new Frame(ASSET_MANAGER.getCrop("slime_left_hit_6"), 2);
    frames[6] = new Frame(ASSET_MANAGER.getCrop("slime_left_hit_7"), 2);
    frames[7] = new Frame(ASSET_MANAGER.getCrop("slime_left_hit_8"), 2);
    this.animations["slime_left_hit"] = new Anim(frames);
    

    frames = [];
    frames[0] = new Frame(ASSET_MANAGER.getCrop("skeleton_right_walk_1"), 5);
    frames[1] = new Frame(ASSET_MANAGER.getCrop("skeleton_right_walk_2"), 5);
    frames[2] = new Frame(ASSET_MANAGER.getCrop("skeleton_right_walk_3"), 5);
    this.animations["skeleton_right_walk"] = new Anim(frames);

    frames = [];
    frames[0] = new Frame(ASSET_MANAGER.getCrop("skeleton_left_walk_1"), 5);
    frames[1] = new Frame(ASSET_MANAGER.getCrop("skeleton_left_walk_2"), 5);
    frames[2] = new Frame(ASSET_MANAGER.getCrop("skeleton_left_walk_3"), 5);
    this.animations["skeleton_left_walk"] = new Anim(frames);

    frames = [];
    frames[0] = new Frame(ASSET_MANAGER.getCrop("skeleton_right_hit_1"), 2);
    frames[1] = new Frame(ASSET_MANAGER.getCrop("skeleton_right_hit_2"), 2);
    frames[2] = new Frame(ASSET_MANAGER.getCrop("skeleton_right_hit_3"), 2);
    frames[3] = new Frame(ASSET_MANAGER.getCrop("skeleton_right_hit_4"), 2);
    frames[4] = new Frame(ASSET_MANAGER.getCrop("skeleton_right_hit_5"), 2);
    frames[5] = new Frame(ASSET_MANAGER.getCrop("skeleton_right_hit_6"), 2);
    this.animations["skeleton_right_hit"] = new Anim(frames);

    frames = [];
    frames[0] = new Frame(ASSET_MANAGER.getCrop("skeleton_left_hit_1"), 2);
    frames[1] = new Frame(ASSET_MANAGER.getCrop("skeleton_left_hit_2"), 2);
    frames[2] = new Frame(ASSET_MANAGER.getCrop("skeleton_left_hit_3"), 2);
    frames[3] = new Frame(ASSET_MANAGER.getCrop("skeleton_left_hit_4"), 2);
    frames[4] = new Frame(ASSET_MANAGER.getCrop("skeleton_left_hit_5"), 2);
    frames[5] = new Frame(ASSET_MANAGER.getCrop("skeleton_left_hit_6"), 2);
    this.animations["skeleton_left_hit"] = new Anim(frames);

};

AnimManager.prototype.getAnimation = function(name) {
    return this.animations[name];
};

AnimManager.prototype.copyAnimation = function(sourceName) {
    return new Anim(this.animations[sourceName].frames);
};