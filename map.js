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

  _food(){
    var foo = new Food();
    var mFood = foo._makeFood(this._height,this._width);
     return mFood;
  }

  _mapAppear(width, height){
    var mapArray = this._map(width, height);
    var food = this._food();
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
      if (mapArray[i].obj.name == " ") {
        if (mapArray[i].obj.x == food.x && mapArray[i].obj.y == food.y) {
          mapArray[i].obj.name = "*";
          mapArray[i].type = "food";
        }
      }
    }
    return mapArray.join("");
  }
}

var nMap = new Map(this._width = 75,this._height = 30);
document.getElementById("map").innerHTML = nMap._mapAppear();
