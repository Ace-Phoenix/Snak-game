class Map {
  constructor(){
    this.width = this._width;
    this.height = this._height;
    this.map = this._map;
    this.image = "";
  }

  _map(width=10, height=10){
    var retAry = [];
    var obj = {x:undefined,y:undefined, image:""};
    for (var i = 0; i < width; i++) {
      for (var j = 0; j < height; j++) {
        obj = {x:j, y:i}
        retAry.push(obj);
      }
    }
    return retAry;
  }


  _mapAppear(width=10, length=10){
    var bob = this._map;
    var length = bob.length;
    for (var i = 0; i < bob.x.length; i++) {
      if (bob.x <= 0 || bob.y >= width) {
        bob.image = "=";
      }
    }
    for (var i = 0; i < bob.y.length; i++) {
      if (bob.x >= length || bob.y <= 0) {
        bob.image = "|";
      }
    }
    return bob;
  }
}
var joe = document.getElementsByClassName("snek-map")
joe.innerHTML = Map._mapAppear;
