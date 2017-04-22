var canvas = document.getElementById("game_canvas");

var rect = canvas.getBoundingClientRect();

canvas.addEventListener('click', function(event) {
    clickHappened = true;
    clickX = event.clientX - rect.left;
    clickY = event.clientY - rect.top;
 }, false);

var clickHappened = false;
var clickX;
var clickY;

var clickOnButtonPass = function(){
    if( clickX > BUTTON_PASS_X && 
        clickX < BUTTON_PASS_X + BUTTON_WIDTH &&
        clickY > BUTTON_PASS_Y &&
        clickY < BUTTON_PASS_Y + BUTTON_HEIGHT){
            return true;
        }
    return false;
}

var clickOnButtonVision = function(){
    if( clickX > BUTTON_VISION_X &&
        clickX < BUTTON_VISION_X + BUTTON_WIDTH &&
        clickY > BUTTON_VISION_Y && 
        clickY < BUTTON_VISION_Y + BUTTON_HEIGHT){
            return true;
        }
    return false;
}

var clickOnButtonNoone = function(){
    if( clickX > BUTTON_NOONE_X && 
        clickX < BUTTON_NOONE_X + BUTTON_WIDTH &&
        clickY > BUTTON_NOONE_Y &&
        clickY < BUTTON_NOONE_Y + BUTTON_HEIGHT){
            return true;
        }
    return false;
}

var clickOnPerso1 = function(){
        if( clickX > PERSO1_X && 
        clickX < PERSO1_X + PERSO1_WIDTH &&
        clickY > PERSO1_Y &&
        clickY < PERSO1_Y + PERSO1_HEIGHT){
            return true;
        }
    return false;
}

var clickOnPerso2 = function(){
        if( clickX > PERSO2_X && 
        clickX < PERSO2_X + PERSO2_WIDTH &&
        clickY > PERSO2_Y &&
        clickY < PERSO2_Y + PERSO2_HEIGHT){
            return true;
        }
    return false;
}


var clickOnPerso3 = function(){
        if( clickX > PERSO3_X && 
        clickX < PERSO3_X + PERSO3_WIDTH &&
        clickY > PERSO3_Y &&
        clickY < PERSO3_Y + PERSO3_HEIGHT){
            return true;
        }
    return false;
}


var clickOnPerso4 = function(){
        if( clickX > PERSO4_X && 
        clickX < PERSO4_X + PERSO4_WIDTH &&
        clickY > PERSO4_Y &&
        clickY < PERSO4_Y + PERSO4_HEIGHT){
            return true;
        }
    return false;
}

var clickOnFR = function(){
    if( clickX > 362 && 
        clickX < 362 + 128 &&
        clickY > 462 &&
        clickY < 462 + 128){
            return true;
        }
    return false;
}


var clickOnUK = function(){
    if( clickX > 510 && 
        clickX < 510 + 128 &&
        clickY > 462 &&
        clickY < 462 + 128){
            return true;
        }
    return false;
}