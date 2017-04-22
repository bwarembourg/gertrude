function CropManager() {
    this.crops = [];
};

CropManager.prototype.createCrops = function() {
    
    this.crops["title"] = new Crop("title", CANVAS_WIDTH, CANVAS_HEIGHT, 0, 0);
    this.crops["gameover"] = new Crop("gameover", CANVAS_WIDTH, CANVAS_HEIGHT, 0, 0);
    this.crops["background"] = new Crop("background", BCK_WIDTH, BCK_HEIGHT, 0, 0);

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

    this.crops["hero"] = new Crop("hero", HERO_WIDTH, HERO_HEIGHT, 0, 0);
    this.crops["slime"] = new Crop("slime", SLIME_WIDTH, SLIME_HEIGHT, 0, 0);

    // this.crops["mc_left_0"] = new Crop("mc_left", MC_WIDTH, MC_HEIGHT, 0, 0);
    // this.crops["mc_left_1"] = new Crop("mc_left", MC_WIDTH, MC_HEIGHT, MC_WIDTH, 0);
    // this.crops["mc_left_2"] = new Crop("mc_left", MC_WIDTH, MC_HEIGHT, 2*MC_WIDTH, 0);
    // this.crops["mc_left_3"] = new Crop("mc_left", MC_WIDTH, MC_HEIGHT, 3*MC_WIDTH, 0);
    // this.crops["mc_left_4"] = new Crop("mc_left", MC_WIDTH, MC_HEIGHT, 4*MC_WIDTH, 0);
    // this.crops["mc_left_5"] = new Crop("mc_left", MC_WIDTH, MC_HEIGHT, 5*MC_WIDTH, 0);
};

CropManager.prototype.getCrop = function(name) {
    return this.crops[name];
};