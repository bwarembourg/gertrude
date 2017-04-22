function Renderer() {
    this.renderables = [];
    this.texts = [];
};

Renderer.prototype.render = function() {
    CTX.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    for (var i = 0; i < this.renderables.length; i++) {
        var renderable = this.renderables[i];
        var crop = renderable.crop;
        var spritesheet = ASSET_MANAGER.getSpritesheet(crop.spritesheetName);

        CTX.drawImage(
            spritesheet, 
            crop.sourceX, crop.sourceY, 
            crop.sourceWidth, crop.sourceHeight, 
            renderable.canvasX, renderable.canvasY, 
            crop.sourceWidth, crop.sourceHeight
        );

        for(var j = 0; j < this.texts.length; j++){

            if(this.texts[j]!=null && this.texts[j].toDisplay && STATE_MANAGER.currentState.stateName=="Game"){
                CTX.font = this.texts[j].font;
                CTX.fillStyle = this.texts[j].color;
                this.texts[j].getText(CTX);
            }
        }

    }
    this.renderables = null;
    this.renderables = [];
};

Renderer.prototype.addToRenderList = function(crop, destX, destY) {
    this.renderables.push({ 
        crop : crop, 
        canvasX : destX,
        canvasY : destY 
    });
};