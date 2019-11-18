class Map {
  constructor(){
    this.width = this._width;
    this.height = this._height;
    this.map = this._map;
  }

  _map(width, height){
    var retAry = [];
    var obj = {x:undefined,y:undefined, image:""};
    for (var i = 0; i < height; i++) {
      for (var j = 0; j < width; j++) {
        obj = {x:j, y:i}
        retAry.push(obj);
      }
    }
    console.log(retAry);
    return retAry;
  }
//corners start at top left then top right then bottom left then bottom right
//corner 1 = {x:0, y:0}
//corner 2 = {x:max-1, y:0}
//corner 3 = {x:0, y:max-1}
//corner 4 = {x:max-1, y:max-1}

  _mapAppear(width=10, height=10){
    var bob = this._map(width, height);
    var whole = width*height;
    for (var i = 0; i < whole; i++) {
      if (bob[i].y <= 0 || bob[i].x >= width-1) {
        bob[i].image = "=";
      }else {
        bob[i].image = "#"
      }
    }
    for (var j = 0; j < whole; j++) {
      if (bob[j].y >= height-1 || bob[j].x <=0) {
        bob[j].image = "|";//going to need to put a <br> here
      }
      if (bob[j].y == 0 || bob[j].y == height-1) {
        if (bob[j].x == 0 || bob[j].x == width-1) {
          bob[j].image = "+";
        }
      }
    }
    return bob;
  }

}
lol = new Map();
document.getElementById("map").innerHTML = lol._mapAppear(10,10);
