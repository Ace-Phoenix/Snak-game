class Map {
  constructor(){
    this.width = this._width;
    this.height = this._height;
    this.map = this._map;
     this.image = "";
  }

  _map(width, height){
    var retAry = [];
    for (var i = 0; i < width; i++) {
      for (var j = 0; j < height; j++) {
        var obj = {image: "",x:j, y:i};
        retAry.push(obj);
      }
    }
    console.log(retAry);
    return retAry;
  }

  _mapAppear(width=10, length=10){
    var bob = this._map;
    var length = bob.length;
    for (var i = 0; i < bob.x.length; i++) { //creates the ceiling
      if (bob.x <= 0 || bob.y >= width) {
        bob.image = "=";
      }
    }
    for (var i = 0; i < bob.y.length; i++) {
      if (bob.x >= length || bob.y <= 0) { //creates the walls
        bob.image = "|";
      }
    }
    return bob;
  }
}
lol = new Map();
document.getElementById("map").innerHTML = lol._mapAppear(10,10);
