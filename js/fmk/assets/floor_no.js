function FloorNo(){
    this.x = FLOOR_X+FLOOR_WIDTH;
    this.y = FLOOR_Y;
}

FloorNo.prototype.getNumbers = function(level){
    var floorNo = level+1;
    floorNoStr = floorNo.toString();
    var numbers = [];
    for(i=0; i< floorNoStr.length; i++){
        numbers.push( parseInt(floorNoStr[i]) );
    }
    console.log(numbers);
    return numbers;
}