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
        let obj = new Cell("map");
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
        mapArray[i].type = "border";
      }
      if ( mapArray[i].obj.x >= this._height-1 || mapArray[i].obj.x <=0) {
        mapArray[i].obj.name = "=";
        mapArray[i].type = "border";
      }
      if (mapArray[i].obj.y >= this._width-1 ) {
        mapArray[i].obj.name = "|<br>";
        mapArray[i].type = "border";
      }
      if ((mapArray[i].obj.y <= 0 && mapArray[i].obj.x <= 0) || (mapArray[i].obj.x >= this._height-1 && mapArray[i].obj.y >= this._width-1)||(mapArray[i].obj.x >= this._height-1 && mapArray[i].obj.y <= 0)) {
        mapArray[i].obj.name = "+";
        mapArray[i].type = "corner";
      }
      if (mapArray[i].obj.x <= 0 && mapArray[i].obj.y >= this._width-1) {
        mapArray[i].obj.name = "+<br>";
        mapArray[i].type = "corner";
      }
      if ((mapArray[i].type !== "border") || (mapArray[i].type !== "corner")&&(mapArray[i].obj.x !== 0 && mapArray[i].obj.y !== 0)) {
        if ((mapArray[i].obj.x !== 0 && mapArray[i].obj.y !== 0) && (mapArray[i].obj.x == food.x) && (mapArray[i].obj.y == food.y)) {
          mapArray[i].obj.name = "*";
          mapArray[i].type = "food";
          console.log(food.x + " x");
          console.log(food.y + " y");
        }
      //  var newWidth = width/2;
      //  var newHeight = height/2;
      //  var snek = new snek(newWidth,newHeight,"O","o","west");

      }
    }
    console.log(mapArray);
    return mapArray.join("");
  }
}
var widthChanger = 75;
var heightChanger = 35;
var nMap = new Map(widthChanger,heightChanger);
function sizeUpregW(){
  widthChanger++;
  return sizeUp(widthChanger, heightChanger);
}
function sizeUpregH(){
  heightChanger++;
  return sizeUp(widthChanger, heightChanger);
}
function sizeUp(widthChanger,heightChanger){
  var nMap = new Map(widthChanger,heightChanger);
document.getElementById("map").innerHTML = nMap._mapAppear();
}
function sizeDownregW(){
  if(widthChanger > 4){
  widthChanger--;
  }
  return sizeUp(widthChanger, heightChanger);
}
function sizeDownregH(){
  if(heightChanger > 3){
  heightChanger--;
  }
  return sizeUp(widthChanger, heightChanger);
  
}
function sizeUp(widthChanger,heightChanger){
  var nMap = new Map(widthChanger,heightChanger);
document.getElementById("map").innerHTML = nMap._mapAppear();
}
document.getElementById("map").innerHTML = nMap._mapAppear();
