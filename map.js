class Map {
  constructor(data) {
   this._name = "";
   this._width = undefined;
   this._height = undefined;

   this._cells = this._map(this._width, this._height);
  }

  _map(width, height){
    var retAry = [];
    var obj = {x:undefined,y:undefined};
    for (var i = 0; i < height; i++) {
      for (var j = 0; j < width; j++) {
        obj = {x:j, y:i};
        retAry.push(obj);
      }
    }
    return retAry;
  }

  _mapAppear(width=10, height=10){
    var bob = this._map(width, height);
    var whole = width*height;
    for (var i = 0; i < whole; i++) {
      if (bob[i].y <= 0 || bob[i].x >= width-1) {
        this._cells._name = "=";
      }
    }

    for (var j = 0; j < whole; j++) {
      if (bob[j].y >= height-1 || bob[j].x <=0) {
        bob[j] = "|"+"<br>";//going to need to put a <br> here
      }
      if (bob[j].y == 0 || bob[j].y == height-1) {
        if (bob[j].x == 0 || bob[j].x == width-1) {
          bob[j] = "+" +"<br>";
        this._cells._name = "|";
      }
      if (bob[j].y == 0 || bob[j].y == height-1) {
        if (bob[j].x == 0 || bob[j].x == width-1) {
          this._cells._name = "+";
        }
      }else {
        this._cells._name = "#";
      }
    }
  return bob;
  }

}
}
var joe = new Map();
document.getElementById("map").innerHTML = joe._mapAppear(10,10);
