class Grid {
  constructor(){
    this._name = undefined;
    this.map = undefined;
  }


//corners start at top left then top right then bottom left then bottom right
//corner 1 = {x:0, y:0}
//corner 2 = {x:max-1, y:0}
//corner 3 = {x:0, y:max-1}
//corner 4 = {x:max-1, y:max-1}

  _mapAppear(width=10, height=10){
    var retAry = [];
    var bob = this._map(width, height);
    var whole = width*height;
    for (var i = 0; i < whole; i++) {
      if (bob[i].y <= 0 || bob[i].x >= width-1) {
        bob[i].image = "=";
        retAry.push(bob[i].image);
      }
    }
    for (var j = 0; j < whole; j++) {
      if (bob[j].y >= height-1 || bob[j].x <=0) {
        bob[j].image = "|";
        retAry.push(bob[j].image)
      }
      if (bob[j].y == 0 || bob[j].y == height-1) {
        if (bob[j].x == 0 || bob[j].x == width-1) {
          bob[j].image = "+";
          retAry.push(bob[j].image);
        }
      }else {
        bob[j].image = "#";
        retAry.push(bob[j].image)
      }
    }
    return this.image;
  }



}
