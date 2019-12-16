var head = false;
var body = false;
var foo = false;
var snek = new Snek();
class Map {
  constructor(width, height) {
   this._width = width;//actually height
   this._height = height;//actually width
   this._maps = this._map(width,height);
  }

  _map(width,height){
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
    var food = this._food();
    var newwidth = Math.floor(this._width/2);
    var newheight = Math.floor(this._height/2);
    var whole = this._width*this._height;
    for (var i = 0; i < whole; i++) {
      if (this._maps[i].obj.y <= 0 ) {
        this._maps[i].obj.name = "|";
        this._maps[i].type = "border";
      }
      if ( this._maps[i].obj.x >= this._height-1 || this._maps[i].obj.x <=0) {
        this._maps[i].obj.name = "=";
        this._maps[i].type = "border";
      }
      if (this._maps[i].obj.y >= this._width-1 ) {
        this._maps[i].obj.name = "|<br>";
        this._maps[i].type = "border";
      }
      if ((this._maps[i].obj.y <= 0 && this._maps[i].obj.x <= 0) || (this._maps[i].obj.x >= this._height-1 && this._maps[i].obj.y >= this._width-1)||(this._maps[i].obj.x >= this._height-1 && this._maps[i].obj.y <= 0)) {
        this._maps[i].obj.name = "+";
        this._maps[i].type = "corner";
      }
      if (this._maps[i].obj.x <= 0 && this._maps[i].obj.y >= this._width-1) {
        this._maps[i].obj.name = "+<br>";
        this._maps[i].type = "corner";
      }
      if ((this._maps[i].type !== "border") || (this._maps[i].type !== "corner")) {
        if (this._maps[i].obj.x == food.x && this._maps[i].obj.y == food.y) {
          if (foo == false) {
          this._maps[i].obj.name = "*";
          this._maps[i].type = "food";
          foo = true;
        }
      }
        if (food.x == 0) {
          food.x ++;
        }
        if (food.y == 0) {
          food.y ++;
        }
        if (food.x == this._height-1) {
          food.x --;
        }
        if (food.y == this._width-1) {
          food.y --;
        }
      }
      if (this._maps[i].obj.x == snek.pos.x && this._maps[i].obj.y == snek.pos.y) {
        this._maps[i].obj.name = snek.head;
        this._maps[i].type = "snek head";
        snek._pos.x = this._maps[i].obj.x;
        snek._pos.y = this._maps[i].obj.y;
        head = true;
      }
      if (this._maps[i].obj.x == snek.pos.x && this._maps[i].obj.y == snek.pos.y+1) {
        this._maps[i].obj.name = snek.body;
        this._maps[i].type = "snek body";
        body = true;
      }
    }
    return this._maps.join("");
  }

  _snekLoc(width,height){
    var whole = this._width*this._height;
    var retAry = [{x:undefined,y:undefined,type:undefined},{x:undefined,y:undefined,type:undefined}];
    for (var i = 0; i < whole; i++) {
      if (nMap._maps[i].type == "snek head") {
        snek.pos.x = this._maps[i].obj.x;
        snek.pos.y = this._maps[i].obj.y;
        retAry[0].x = snek.pos.x;
        retAry[0].y = snek.pos.y;
        retAry[0].type = "snek head";
      }
      if (nMap._maps[i].type == "snek body") {
        snek.pos.x = this._maps[i].obj.x;
        snek.pos.y = this._maps[i].obj.y;
        retAry[1].x = snek.pos.x;
        retAry[1].y = snek.pos.y;
        retAry[1].type = "snek body";
      }
    }
    return retAry;
  }

  _foodLoc(width,height){
    var whole = this._width*this._height;
    for (var i = 0; i < whole; i++) {
      if (nMap._maps[i].type == "food") {
        var snkFood = nMap._maps[i].obj;
      }
    }
    return snkFood;
  }

  _update(width,height,directional,keyPressed){
    var mAp = this._mapAppear(width, height);
    var whole = this._width*this._height;
    var snakes = this._snekLoc(width,height);
    var food = this._foodLoc(width,height);
    for (var i = 0; i < whole; i++) {
      if (head == true) {
          snek._directionChange(keyPressed);
          snek._constentsMove(directional);
      }
    if (foo == true) {
          if (snakes[0].x == food.x && snakes[0].y == food.y){
            foo == false;
        }
      }
    }
  return mAp;
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
document.getElementById("map").innerHTML = nMap._update();
}
setInterval(function(){
document.getElementById("map").innerHTML = nMap._update();}
,1000)
