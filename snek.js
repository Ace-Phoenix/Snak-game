//checks for wasd to pushe
class Snek {
  constructor(){
    this._head = "O";//will have its own grapic mabey a "D"
    this._body = "o";//length
    this._direction = this._direction;//way the snek is moving which is either North, South, East, West
    this._pos = {x:10,y:10};//will be wherer the snek is on the map
  }
  //getters
  get body(){return this._body;}
  get direction(){return this._direction;}
  get posX(){return this._posX;}
  get posY(){return this._posY;}

  //setters
  set body(length){this._body = length;}
  set direction(direction){this.direction = direction;}
  set posX(posX){this._posX = posX;}
  set posY(posY){this._posY = posY;}

  directionChange(keyPressed){
    //North
    if(keyPressed == "w"){
      setInterval(this.constentsMove("North"), 1000)
    }
    //South
    if(keyPressed == "s"){
      return this.constentsMove("South");
    }
    //East
    if(keyPressed == "d"){
      return this.constentsMove("East");
    }
    //West
    if(keyPressed == "a"){
      return this.constentsMove("West");
    }
  }

  constentsMove(directional){
      if(directional == "North" && this._posY < map._height){
        this._pos.y += 1, 1000
      }
      if(directional == "South" && this._pos.y > 0){
        this._pos.y -=1;
      }
      if(directional == "East" && this._pos.x < map._width){
        this._pos.x +=1;
      }
      if(directional == "West" && this._pos.x > 0){
        this._pos.x -=1;
      }
  }
}
//checks for wasd to pushed
//
var sneekysneekysnek = this.pos;
document.addEventListener("keyup",
function work(event) {
  var push = undefined;
  if (event.key == "w" || event.key == "W") {
    push = "w";
  }
  if (event.key == "a" || event.key == "A") {
    push = "a";
  }
  if (event.key == "s" || event.key =="S") {
    push = "s";
  }
  if (event.key == "d" || event.key == "D") {
    push = "d";
  }
  var sneks = new Snek();
  return sneks.directionChange(push);
});
