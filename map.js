var head = false;
var body = false;
var foo = false;
var snek = new Snek();
var but = undefined;
var del = false;
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
        this._maps[i].obj.name = "_";
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
        snek._direction = "East";
        head = true;
      }
      if (snek.direction == "West") {
        if ((this._maps[i].obj.x == snek.pos.x)&&(this._maps[i].obj.y == snek.pos.y+1)) {
          this._maps[i].obj.name = snek.body;
          this._maps[i].type = "snek body";
          body = true;
        }
      }
      if (snek.direction == "North") {
        if ((this._maps[i].obj.x == snek.pos.x+1)&&(this._maps[i].obj.y == snek.pos.y)) {
          this._maps[i].obj.name = snek.body;
          this._maps[i].type = "snek body";
          body = true;
        }
      }
      if (snek.direction == "South") {
        if ((this._maps[i].obj.x == snek.pos.x-1)&&(this._maps[i].obj.y == snek.pos.y)) {
          this._maps[i].obj.name = snek.body;
          this._maps[i].type = "snek body";
          body = true;
        }
      }
      if (snek.direction == "East") {
        if ((this._maps[i].obj.x == snek.pos.x)&&(this._maps[i].obj.y == snek.pos.y-1)) {
          this._maps[i].obj.name = snek.body;
          this._maps[i].type = "snek body";
          body = true;
        }
      }
    }
    return this._maps.join("");
  }

  _findBodyLoc(){
    var retObj = {x:undefined,y:undefined}
    if (snek.direction == "North") {
      retObj.x = snek.pos.x +1;
      retObj.y = snek.pos.y;
    }
    if (snek.direction == "West") {
      retObj.x = snek.pos.x;
      retObj.y = snek.pos.y+1;
    }
    if (snek.direction == "South") {
      retObj.x = snek.pos.x +1;
      retObj.y = snek.pos.y;
    }
    if (snek.direction == "East") {
      retObj.x = snek.pos.x -1;
      retObj.y = snek.pos.y;
    }
    return retObj;
  }
  _snekLoc(width,height){
    var whole = this._width*this._height;
    var retAry = [];
    var oldLoc = this._findBodyLoc();
    var retObj = {x:undefined,y:undefined,type:undefined};
    for (var i = 0; i < whole; i++) {
      if (nMap._maps[i].type == "snek head") {
        snek.pos.x = this._maps[i].obj.x;
        snek.pos.y = this._maps[i].obj.y;
        retObj.x = snek.pos.x;
        retObj.y = snek.pos.y;
        retObj.type = "snek head";
        retAry.push(retObj);
      }
      if (nMap._maps[i].type == "snek body") {
        snek.pos.x = oldLoc.x;
        snek.pos.y = oldLoc.y;
        retObj.x = oldLoc.x;
        retObj.y = oldLoc.y;
        var loc = this._maps[i].obj;
        retObj.type = "snek body";
        retAry.push(retObj);
      }
    }
    if (del == true) {
      var rid = retAry.pop();
      rid;
      rid.type = "map";
      loc.name =" ";
      return retAry;
    }
    console.log(retAry);
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

  _update(width,height){
    var desired = 0;
    var mAp = this._mapAppear(width, height);
    var whole = this._width*this._height;
    var snakes = this._snekLoc(width,height);
    var food = this._foodLoc(width,height);
    var direc = snek._directionChange(but);
    var plus = snek._constentsMove(direc);
    for (var i = 0; i < whole; i++) {
      if (nMap._maps[i].type == "snek head") {
        var snekHead = {x:undefined, y:undefined}
        snekHead.x = nMap._maps[i].obj.x;
        snekHead.y = nMap._maps[i].obj.y;
      if (head == true) {
        plus
      }
      if (snakes.length <= desired) {
        del = false;
        snakes;
      }else if(snakes.length >= desired) {
        del = true;
        snakes;
        }
      }
    }
  return mAp;
  }
}
document.addEventListener('keydown', function(e){
   if(e.key === 'w'){
     but = "w";
   }
   if (e.key === "a") {
     but = "a";
   }
   if (e.key === "s") {
     but = "s";
   }
   if (e.key === "d") {
     but = "d";
   }
})
var widthChanger = 20;
var heightChanger = 20;
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
document.getElementById("map").innerHTML = nMap._update();
}
setInterval(function(){
document.getElementById("map").innerHTML = nMap._update();}
,500)
