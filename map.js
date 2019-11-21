class Map {
  constructor(data) {
   this._width = undefined;
   this._height = undefined;

  }

  _map(width, height){
    var retAry = [];
    for (var i = 0; i < height; i++) {
      for (var j = 0; j < width; j++) {
        let obj = new Cell();
        obj.obj.x = i;
        obj.obj.y = j;
        retAry.push(obj);
      }
    }
    return retAry;
  }

  _mapAppear(width=45, height=45){
    var bob = this._map(width, height);
    var whole = width*height;
    for (var i = 0; i < whole; i++) {
      if (bob[i].obj.y <= 0 || bob[i].obj.x >= width-1) {
        bob[i].obj.name = "=";
      }
      if (bob[i].obj.y >= height-1 || bob[i].obj.x <=0) {
        bob[i].obj.name = "|<br>";
      }
      if (bob[i].obj.y == 0 || bob[i].obj.y == height-1) {
        if (bob[i].obj.x == 0 || bob[i].obj.x == width-1) {
          bob[i].obj.name = "+<br>";
        }
      }
    }
    return bob.toString();
  }

}

var joe = new Map();
document.getElementById("map").innerHTML = joe._mapAppear();
