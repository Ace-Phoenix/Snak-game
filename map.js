class Map {
  constructor(data) {
   this._width = undefined;
   this._height = undefined;
   this._cells = this._map(this._width, this._height);
  }

  _map(width, height){
    var retAry = [];
    for (var i = 0; i < height; i++) {
      for (var j = 0; j < width; j++) {
        obj = {name:"o",x:j, y:i};
        let obj = new Cell();
        obj.obj.x = i;
        obj.obj.y = j;
        retAry.push(obj);
      }
    }
    return retAry;
  }

  _mapAppear(width=10, height=10){
        var f = new Cell(name);
    var bob = this._map(width, height);
    var whole = width*height;
    for (var i = 0; i < whole; i++) {
      if (bob[i].y <= 0 || bob[i].x >= width-1) {
        f.name = "=";
      }
    }

    for (var j = 0; j < whole; j++) {
      if (bob[j].y >= height-1 || bob[j].x <=0) {
        bob[j] = "|"+"<br>";//going to need to put a <br> here
      }
      if (bob[j].y == 0 || bob[j].y == height-1) {
        if (bob[j].x == 0 || bob[j].x == width-1) {
          bob[j] = "+" +"<br>";
        f.name = "|";
      }
      }
      if (bob[j].y == 0 || bob[j].y == height-1) {
        if (bob[j].x == 0 || bob[j].x == width-1) {
          f.name = "+";
        }
      }
      }
  
  return bob;
}
}
var joe = new Map();
document.getElementById("map").innerHTML = joe._mapAppear(10,10);
      if (bob[i].obj.y <= 0 || bob[i].obj.x >= width-1) {
        bob[i].name = "=";
      }
      if (bob[i].obj.y >= height-1 || bob[i].obj.x <=0) {
        bob[i].name = "|<br>";
      }
      if (bob[i].obj.y == 0 || bob[i].obj.y == height-1) {
        if (bob[i].obj.x == 0 || bob[i].obj.x == width-1) {
          bob[i].name = "+<br>";
        }
      }
    }
    return bob;
  }

}

var joe = new Map();
document.getElementById("map").innerHTML = joe._mapAppear()
