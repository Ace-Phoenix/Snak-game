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
var w_a1 = 75;
var h_a1 = 35;
var nMap = new Map(w_a1,h_a1);
function sizeUpregW(){
  w_a1++;
  return sizeUp(w_a1, h_a1);
}
function sizeUpregH(){
  h_a1++;
  return sizeUp(w_a1, h_a1);
}
function sizeUp(w_a1,h_a1){
  var nMap = new Map(w_a1,h_a1);
document.getElementById("map").innerHTML = nMap._mapAppear();
}
function sizeDownregW(){
  if(w_a1 > 4){
  w_a1--;
  }
  return sizeUp(w_a1, h_a1);
}
function sizeDownregH(){
  if(h_a1 > 3){
  h_a1--;
  }
  return sizeUp(w_a1, h_a1);
  
}
function sizeUp(w_a1,h_a1){
  var nMap = new Map(w_a1,h_a1);
document.getElementById("map").innerHTML = nMap._mapAppear();
}
document.getElementById("map").innerHTML = nMap._mapAppear();
