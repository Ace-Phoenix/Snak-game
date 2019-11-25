class Map {
  constructor(width, height) {
   this._width = width;//actually height
   this._height = height;//actually width
  }
_passTest(width,height){
  var test = {
  w:this._width,
  h:this._height
  };
  return test;
}
  _map(){
    var retAry = [];
    for (var i = 0; i < this._height; i++) {
      for (var j = 0; j < this._width; j++) {
        let obj = new Cell();
        obj.obj.x = i;
        obj.obj.y = j;
        retAry.push(obj);

      }
    }
    return retAry;
  }

  _mapAppear(width, height){
    var mapArray = this._map(width, height);
    var whole = this._width*this._height;
    for (var i = 0; i < whole; i++) {
      if (mapArray[i].obj.y <= 0 ) {
        mapArray[i].obj.name = "|";
      }
      if ( mapArray[i].obj.x >= this._height-1 || mapArray[i].obj.x <=0) {
        mapArray[i].obj.name = "=";
      }
      if (mapArray[i].obj.y >= this._width-1 ) {
        mapArray[i].obj.name = "|<br>";
      }
      if ((mapArray[i].obj.y <= 0 && mapArray[i].obj.x <= 0) || (mapArray[i].obj.x >= this._height-1 && mapArray[i].obj.y >= this._width-1)||(mapArray[i].obj.x >= this._height-1 && mapArray[i].obj.y <= 0)) {
        mapArray[i].obj.name = "+";
      }
      if (mapArray[i].obj.x <= 0 && mapArray[i].obj.y >= this._width-1) {
        mapArray[i].obj.name = "+<br>";
      }
    }
    return mapArray.join("");
  }

}

var nMap = new Map(50,40);
document.getElementById("map").innerHTML = nMap._mapAppear();
