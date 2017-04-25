function CropManager() {
    this.crops = [];
};

CropManager.prototype.createCrops = function() {
    
    this.crops["title"] = new Crop("title", CANVAS_WIDTH, CANVAS_HEIGHT, 0, 0);
    this.crops["gameover"] = new Crop("gameover", CANVAS_WIDTH, CANVAS_HEIGHT, 0, 0);
    this.crops["tuto"] = new Crop("tuto", BCK_WIDTH, BLOCK_HEIGHT*2, 0, 0);
    this.crops["background"] = new Crop("background", BCK_WIDTH, BCK_HEIGHT, 0, 0);
    this.crops["background_level"] = new Crop("background_level", BCK_WIDTH, BCK_HEIGHT, 0, 0);

    this.crops["corner_tl"] = new Crop("chipset", BLOCK_WIDTH, BLOCK_HEIGHT, 0, 0);
    this.crops["roof"] = new Crop("chipset", BLOCK_WIDTH, BLOCK_HEIGHT, BLOCK_WIDTH, 0);
    this.crops["corner_tr"] = new Crop("chipset", BLOCK_WIDTH, BLOCK_HEIGHT, 2*BLOCK_WIDTH, 0);
    this.crops["pic"] = new Crop("chipset", BLOCK_WIDTH, BLOCK_HEIGHT, 3*BLOCK_WIDTH, 0);
    this.crops["wall_left"] = new Crop("chipset", BLOCK_WIDTH, BLOCK_HEIGHT, 0, BLOCK_HEIGHT);
    this.crops["wall_right"] = new Crop("chipset", BLOCK_WIDTH, BLOCK_HEIGHT, 2*BLOCK_WIDTH, BLOCK_HEIGHT);
    this.crops["platform_begin"] = new Crop("chipset", BLOCK_WIDTH, BLOCK_HEIGHT, 3*BLOCK_WIDTH, BLOCK_HEIGHT);
    this.crops["platform"] = new Crop("chipset", BLOCK_WIDTH, BLOCK_HEIGHT, 4*BLOCK_WIDTH, BLOCK_HEIGHT);
    this.crops["platform_end"] = new Crop("chipset", BLOCK_WIDTH, BLOCK_HEIGHT, 5*BLOCK_WIDTH, BLOCK_HEIGHT);
    this.crops["corner_bl"] = new Crop("chipset", BLOCK_WIDTH, BLOCK_HEIGHT, 0, 2*BLOCK_HEIGHT);
    this.crops["floor"] = new Crop("chipset", BLOCK_WIDTH, BLOCK_HEIGHT, BLOCK_WIDTH, 2*BLOCK_HEIGHT);
    this.crops["corner_br"] = new Crop("chipset", BLOCK_WIDTH, BLOCK_HEIGHT, 2*BLOCK_WIDTH, 2*BLOCK_HEIGHT);
    this.crops["floor_end"] = new Crop("chipset", BLOCK_WIDTH, BLOCK_HEIGHT, 3*BLOCK_WIDTH, 2*BLOCK_HEIGHT);
    this.crops["floor_begin"] = new Crop("chipset", BLOCK_WIDTH, BLOCK_HEIGHT, 5*BLOCK_WIDTH, 2*BLOCK_HEIGHT);

    this.crops["heartfull"] = new Crop("heart", HEART_WIDTH, HEART_HEIGHT, 0, 0);
    this.crops["heartempty"] = new Crop("heart", HEART_WIDTH, HEART_HEIGHT, HEART_WIDTH, 0);
    this.crops["supportheart"] = new Crop("supportheart", 3*HEART_WIDTH, HEART_HEIGHT, 0, 0);

    this.crops["floormarker"] = new Crop("floormarker", FLOOR_WIDTH, FLOOR_HEIGHT, 0, 0);
    this.crops["n0"] = new Crop("numbers", NUMBER_WIDTH, NUMBER_HEIGHT, 0, 0);
    this.crops["n1"] = new Crop("numbers", NUMBER_WIDTH, NUMBER_HEIGHT, 1*NUMBER_WIDTH, 0);
    this.crops["n2"] = new Crop("numbers", NUMBER_WIDTH, NUMBER_HEIGHT, 2*NUMBER_WIDTH, 0);
    this.crops["n3"] = new Crop("numbers", NUMBER_WIDTH, NUMBER_HEIGHT, 3*NUMBER_WIDTH, 0);
    this.crops["n4"] = new Crop("numbers", NUMBER_WIDTH, NUMBER_HEIGHT, 4*NUMBER_WIDTH, 0);
    this.crops["n5"] = new Crop("numbers", NUMBER_WIDTH, NUMBER_HEIGHT, 5*NUMBER_WIDTH, 0);
    this.crops["n6"] = new Crop("numbers", NUMBER_WIDTH, NUMBER_HEIGHT, 6*NUMBER_WIDTH, 0);
    this.crops["n7"] = new Crop("numbers", NUMBER_WIDTH, NUMBER_HEIGHT, 7*NUMBER_WIDTH, 0);
    this.crops["n8"] = new Crop("numbers", NUMBER_WIDTH, NUMBER_HEIGHT, 8*NUMBER_WIDTH, 0);
    this.crops["n9"] = new Crop("numbers", NUMBER_WIDTH, NUMBER_HEIGHT, 9*NUMBER_WIDTH, 0);
    

    this.crops["button"] = new Crop("button", BLOCK_WIDTH, BLOCK_HEIGHT, 0, 0);
    this.crops["buttonpushed"] = new Crop("button", BLOCK_WIDTH, BLOCK_HEIGHT, BLOCK_WIDTH, 0);
    
    this.crops["doorclosed"] = new Crop("door", 2*BLOCK_WIDTH, 2*BLOCK_HEIGHT, 0, 0);
    this.crops["door2"] = new Crop("door", 2*BLOCK_WIDTH, 2*BLOCK_HEIGHT, 1*2*BLOCK_WIDTH, 0); 
    this.crops["door3"] = new Crop("door", 2*BLOCK_WIDTH, 2*BLOCK_HEIGHT, 2*2*BLOCK_WIDTH, 0); 
    this.crops["door4"] = new Crop("door", 2*BLOCK_WIDTH, 2*BLOCK_HEIGHT, 3*2*BLOCK_WIDTH, 0); 
    this.crops["door5"] = new Crop("door", 2*BLOCK_WIDTH, 2*BLOCK_HEIGHT, 4*2*BLOCK_WIDTH, 0); 
    this.crops["dooropen"] = new Crop("door", 2*BLOCK_WIDTH, 2*BLOCK_HEIGHT, 5*2*BLOCK_WIDTH, 0);

    this.crops["coffre1"] = new Crop("coffre", BLOCK_WIDTH, 2*BLOCK_HEIGHT, 0*BLOCK_WIDTH, 0);
    this.crops["coffre2"] = new Crop("coffre", BLOCK_WIDTH, 2*BLOCK_HEIGHT, 1*BLOCK_WIDTH, 0);
    this.crops["coffre3"] = new Crop("coffre", BLOCK_WIDTH, 2*BLOCK_HEIGHT, 2*BLOCK_WIDTH, 0);
    this.crops["coffre4"] = new Crop("coffre", BLOCK_WIDTH, 2*BLOCK_HEIGHT, 3*BLOCK_WIDTH, 0);
    this.crops["coffre5"] = new Crop("coffre", BLOCK_WIDTH, 2*BLOCK_HEIGHT, 4*BLOCK_WIDTH, 0);
    this.crops["coffre6"] = new Crop("coffre", BLOCK_WIDTH, 2*BLOCK_HEIGHT, 5*BLOCK_WIDTH, 0);
    this.crops["coffre"] = new Crop("coffre", BLOCK_WIDTH, 2*BLOCK_HEIGHT, 6*BLOCK_WIDTH, 0);
    this.crops["coffre8"] = new Crop("coffre", BLOCK_WIDTH, 2*BLOCK_HEIGHT, 7*BLOCK_WIDTH, 0);
    this.crops["coffre9"] = new Crop("coffre", BLOCK_WIDTH, 2*BLOCK_HEIGHT, 8*BLOCK_WIDTH, 0);
    this.crops["coffre10"] = new Crop("coffre", BLOCK_WIDTH, 2*BLOCK_HEIGHT, 9*BLOCK_WIDTH, 0);
    this.crops["coffre11"] = new Crop("coffre", BLOCK_WIDTH, 2*BLOCK_HEIGHT, 10*BLOCK_WIDTH, 0);
    this.crops["coffreopen"] = new Crop("coffre", BLOCK_WIDTH, 2*BLOCK_HEIGHT, 11*BLOCK_WIDTH, 0);


    this.crops["key_1"] = new Crop("key", BLOCK_WIDTH, 2*BLOCK_HEIGHT, 0, 0);
    this.crops["key_2"] = new Crop("key", BLOCK_WIDTH, 2*BLOCK_HEIGHT, 1*BLOCK_WIDTH, 0);
    this.crops["key_3"] = new Crop("key", BLOCK_WIDTH, 2*BLOCK_HEIGHT, 2*BLOCK_WIDTH, 0);
    this.crops["key_4"] = new Crop("key", BLOCK_WIDTH, 2*BLOCK_HEIGHT, 3*BLOCK_WIDTH, 0);
    this.crops["key_5"] = new Crop("key", BLOCK_WIDTH, 2*BLOCK_HEIGHT, 4*BLOCK_WIDTH, 0);
    this.crops["key_6"] = new Crop("key", BLOCK_WIDTH, 2*BLOCK_HEIGHT, 5*BLOCK_WIDTH, 0);
    this.crops["key_7"] = new Crop("key", BLOCK_WIDTH, 2*BLOCK_HEIGHT, 6*BLOCK_WIDTH, 0);
    this.crops["key"] = new Crop("key", BLOCK_WIDTH, 2*BLOCK_HEIGHT, 7*BLOCK_WIDTH, 0);
    this.crops["key_9"] = new Crop("key", BLOCK_WIDTH, 2*BLOCK_HEIGHT, 8*BLOCK_WIDTH, 0);
    this.crops["key_10"] = new Crop("key", BLOCK_WIDTH, 2*BLOCK_HEIGHT, 9*BLOCK_WIDTH, 0);
    this.crops["key_11"] = new Crop("key", BLOCK_WIDTH, 2*BLOCK_HEIGHT, 10*BLOCK_WIDTH, 0);
    this.crops["key_12"] = new Crop("key", BLOCK_WIDTH, 2*BLOCK_HEIGHT, 11*BLOCK_WIDTH, 0);

    this.crops["hero_right_idle_1"] = new Crop("heroright", 150, 96, 0, 0);
    this.crops["hero_right_idle_2"] = new Crop("heroright", 150, 96, 150, 0);

    this.crops["hero_left_idle_1"] = new Crop("heroleft", 150, 96, 0, 0);
    this.crops["hero_left_idle_2"] = new Crop("heroleft", 150, 96, 150, 0);

    this.crops["hero_right_walk_1"] = new Crop("heroright", 150, 96, 2*150, 0);
    this.crops["hero_right_walk_2"] = new Crop("heroright", 150, 96, 3*150, 0);
    this.crops["hero_right_walk_3"] = new Crop("heroright", 150, 96, 4*150, 0);

    this.crops["hero_left_walk_1"] = new Crop("heroleft", 150, 96, 2*150, 0);
    this.crops["hero_left_walk_2"] = new Crop("heroleft", 150, 96, 3*150, 0);
    this.crops["hero_left_walk_3"] = new Crop("heroleft", 150, 96, 4*150, 0);

    this.crops["hero_right_jump"] = new Crop("heroright", 150, 96, 5*150, 0);
    this.crops["hero_left_jump"] = new Crop("heroleft", 150, 96, 5*150, 0);

    this.crops["hero_right_attack_1"] = new Crop("heroright", 150, 96, 5*150, 0);
    this.crops["hero_right_attack_2"] = new Crop("heroright", 150, 96, 6*150, 0);
    this.crops["hero_right_attack_3"] = new Crop("heroright", 150, 96, 7*150, 0);
    this.crops["hero_right_attack_4"] = new Crop("heroright", 150, 96, 8*150, 0);
    
    this.crops["hero_left_attack_1"] = new Crop("heroleft", 150, 96, 5*150, 0);
    this.crops["hero_left_attack_2"] = new Crop("heroleft", 150, 96, 6*150, 0);
    this.crops["hero_left_attack_3"] = new Crop("heroleft", 150, 96, 7*150, 0);
    this.crops["hero_left_attack_4"] = new Crop("heroleft", 150, 96, 8*150, 0);

    this.crops["hero_right_hit_1"] = new Crop("heroright", 150, 96, 9*150, 0);
    this.crops["hero_right_hit_2"] = new Crop("heroright", 150, 96, 10*150, 0);
    this.crops["hero_right_hit_3"] = new Crop("heroright", 150, 96, 11*150, 0);
    this.crops["hero_right_hit_4"] = new Crop("heroright", 150, 96, 12*150, 0);

    this.crops["hero_left_hit_1"] = new Crop("heroleft", 150, 96, 9*150, 0);
    this.crops["hero_left_hit_2"] = new Crop("heroleft", 150, 96, 10*150, 0);
    this.crops["hero_left_hit_3"] = new Crop("heroleft", 150, 96, 11*150, 0);
    this.crops["hero_left_hit_4"] = new Crop("heroleft", 150, 96, 12*150, 0);

    this.crops["hero_right_die_1"] = new Crop("heroright", 150, 96, 13*150, 0);
    this.crops["hero_right_die_2"] = new Crop("heroright", 150, 96, 14*150, 0);
    this.crops["hero_right_die_3"] = new Crop("heroright", 150, 96, 15*150, 0);
    this.crops["hero_right_die_4"] = new Crop("heroright", 150, 96, 16*150, 0);

    this.crops["hero_left_die_1"] = new Crop("heroleft", 150, 96, 13*150, 0);
    this.crops["hero_left_die_2"] = new Crop("heroleft", 150, 96, 14*150, 0);
    this.crops["hero_left_die_3"] = new Crop("heroleft", 150, 96, 15*150, 0);
    this.crops["hero_left_die_4"] = new Crop("heroleft", 150, 96, 16*150, 0);
    

    this.crops["slime_right_walk_1"] = new Crop("slimeright", 96, 96, 0, 0);
    this.crops["slime_right_walk_2"] = new Crop("slimeright", 96, 96, 1*2*SLIME_WIDTH, 0);
    this.crops["slime_right_walk_3"] = new Crop("slimeright", 96, 96, 2*2*SLIME_WIDTH, 0);
    this.crops["slime_right_walk_4"] = new Crop("slimeright", 96, 96, 3*2*SLIME_WIDTH, 0);
    this.crops["slime_right_walk_5"] = new Crop("slimeright", 96, 96, 4*2*SLIME_WIDTH, 0);
    this.crops["slime_right_walk_6"] = new Crop("slimeright", 96, 96, 5*2*SLIME_WIDTH, 0);

    this.crops["slime_left_walk_1"] = new Crop("slimeleft", 96, 96, 0, 0);
    this.crops["slime_left_walk_2"] = new Crop("slimeleft", 96, 96, 1*2*SLIME_WIDTH, 0);
    this.crops["slime_left_walk_3"] = new Crop("slimeleft", 96, 96, 2*2*SLIME_WIDTH, 0);
    this.crops["slime_left_walk_4"] = new Crop("slimeleft", 96, 96, 3*2*SLIME_WIDTH, 0);
    this.crops["slime_left_walk_5"] = new Crop("slimeleft", 96, 96, 4*2*SLIME_WIDTH, 0);
    this.crops["slime_left_walk_6"] = new Crop("slimeleft", 96, 96, 5*2*SLIME_WIDTH, 0);

    this.crops["slime_right_hit_1"] = new Crop("slimeright", 96, 96, 6*2*SLIME_WIDTH, 0);
    this.crops["slime_right_hit_2"] = new Crop("slimeright", 96, 96, 7*2*SLIME_WIDTH, 0);
    this.crops["slime_right_hit_3"] = new Crop("slimeright", 96, 96, 8*2*SLIME_WIDTH, 0);
    this.crops["slime_right_hit_4"] = new Crop("slimeright", 96, 96, 9*2*SLIME_WIDTH, 0);
    this.crops["slime_right_hit_5"] = new Crop("slimeright", 96, 96, 10*2*SLIME_WIDTH, 0);
    this.crops["slime_right_hit_6"] = new Crop("slimeright", 96, 96, 11*2*SLIME_WIDTH, 0);
    this.crops["slime_right_hit_7"] = new Crop("slimeright", 96, 96, 12*2*SLIME_WIDTH, 0);
    this.crops["slime_right_hit_8"] = new Crop("slimeright", 96, 96, 13*2*SLIME_WIDTH, 0);

    this.crops["slime_left_hit_1"] = new Crop("slimeleft", 96, 96, 6*2*SLIME_WIDTH, 0);
    this.crops["slime_left_hit_2"] = new Crop("slimeleft", 96, 96, 7*2*SLIME_WIDTH, 0);
    this.crops["slime_left_hit_3"] = new Crop("slimeleft", 96, 96, 8*2*SLIME_WIDTH, 0);
    this.crops["slime_left_hit_4"] = new Crop("slimeleft", 96, 96, 9*2*SLIME_WIDTH, 0);
    this.crops["slime_left_hit_5"] = new Crop("slimeleft", 96, 96, 10*2*SLIME_WIDTH, 0);
    this.crops["slime_left_hit_6"] = new Crop("slimeleft", 96, 96, 11*2*SLIME_WIDTH, 0);
    this.crops["slime_left_hit_7"] = new Crop("slimeleft", 96, 96, 12*2*SLIME_WIDTH, 0);
    this.crops["slime_left_hit_8"] = new Crop("slimeleft", 96, 96, 13*2*SLIME_WIDTH, 0);


    this.crops["skeleton_right_walk_1"] = new Crop("skeletonright", 96, 96, 0, 0);
    this.crops["skeleton_right_walk_2"] = new Crop("skeletonright", 96, 96, 1*2*SKELETON_WIDTH, 0);
    this.crops["skeleton_right_walk_3"] = new Crop("skeletonright", 96, 96, 2*2*SKELETON_WIDTH, 0);
    
    this.crops["skeleton_left_walk_1"] = new Crop("skeletonleft", 96, 96, 0, 0);
    this.crops["skeleton_left_walk_2"] = new Crop("skeletonleft", 96, 96, 1*2*SKELETON_WIDTH, 0);
    this.crops["skeleton_left_walk_3"] = new Crop("skeletonleft", 96, 96, 2*2*SKELETON_WIDTH, 0);

    this.crops["skeleton_right_hit_1"] = new Crop("skeletonright", 96, 96, 3*2*SKELETON_WIDTH, 0);
    this.crops["skeleton_right_hit_2"] = new Crop("skeletonright", 96, 96, 4*2*SKELETON_WIDTH, 0);
    this.crops["skeleton_right_hit_3"] = new Crop("skeletonright", 96, 96, 5*2*SKELETON_WIDTH, 0);
    this.crops["skeleton_right_hit_4"] = new Crop("skeletonright", 96, 96, 6*2*SKELETON_WIDTH, 0);
    this.crops["skeleton_right_hit_5"] = new Crop("skeletonright", 96, 96, 7*2*SKELETON_WIDTH, 0);
    this.crops["skeleton_right_hit_6"] = new Crop("skeletonright", 96, 96, 8*2*SKELETON_WIDTH, 0);
    
    this.crops["skeleton_left_hit_1"] = new Crop("skeletonleft", 96, 96, 3*2*SKELETON_WIDTH, 0);
    this.crops["skeleton_left_hit_2"] = new Crop("skeletonleft", 96, 96, 4*2*SKELETON_WIDTH, 0);
    this.crops["skeleton_left_hit_3"] = new Crop("skeletonleft", 96, 96, 5*2*SKELETON_WIDTH, 0);
    this.crops["skeleton_left_hit_4"] = new Crop("skeletonleft", 96, 96, 6*2*SKELETON_WIDTH, 0);
    this.crops["skeleton_left_hit_5"] = new Crop("skeletonleft", 96, 96, 7*2*SKELETON_WIDTH, 0);
    this.crops["skeleton_left_hit_6"] = new Crop("skeletonleft", 96, 96, 8*2*SKELETON_WIDTH, 0);

    this.crops["smoke_walk_left_1"] = new Crop("smoke_walk_left", 126, 48, 0*126, 0);
    this.crops["smoke_walk_left_2"] = new Crop("smoke_walk_left", 126, 48, 1*126, 0);
    this.crops["smoke_walk_left_3"] = new Crop("smoke_walk_left", 126, 48, 2*126, 0);
    this.crops["smoke_walk_left_4"] = new Crop("smoke_walk_left", 126, 48, 3*126, 0);
    this.crops["smoke_walk_left_5"] = new Crop("smoke_walk_left", 126, 48, 4*126, 0);
    this.crops["smoke_walk_left_6"] = new Crop("smoke_walk_left", 126, 48, 5*126, 0);
    
    this.crops["smoke_walk_right_1"] = new Crop("smoke_walk_right", 126, 48, 0*126, 0);
    this.crops["smoke_walk_right_2"] = new Crop("smoke_walk_right", 126, 48, 1*126, 0);
    this.crops["smoke_walk_right_3"] = new Crop("smoke_walk_right", 126, 48, 2*126, 0);
    this.crops["smoke_walk_right_4"] = new Crop("smoke_walk_right", 126, 48, 3*126, 0);
    this.crops["smoke_walk_right_5"] = new Crop("smoke_walk_right", 126, 48, 4*126, 0);
    this.crops["smoke_walk_right_6"] = new Crop("smoke_walk_right", 126, 48, 5*126, 0);    

};

CropManager.prototype.getCrop = function(name) {
    return this.crops[name];
};