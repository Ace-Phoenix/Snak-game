//checks for wasd to pushed

class Snek {
  constructor(posX,posY,direction){
    this._head = this._head;//will have its own grapic mabey a "D"
    this._body = this._body;//length
    this._direction = direction;//way the snek is moving which is either North, South, East, West
    this._pos = {x:posX,y:posY}
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
      return this.constentsMove("North");
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
    var map = new Map(40, 30);
    while(directional == "North" && this._posY < map._height){
      if(directional == "North" && this._posY < map._height){
        setInterval((() => this._pos.y += 1), 1000)
        console.log(this._pos.y)
      }
    }
    while(directional == "South" && this._pos.y > 0){
      if(directional == "South" && this._pos.y > 0){
        this._pos.y -=1;
        console.log(this.pos)
      }
    }
    while(directional == "East" && this._pos.x < map._width){
      if(directional == "East" && this._pos.x < map._width){
        this._pos.x +=1;
      }
    }
    while(directional == "West" && this._pos.x > 0){
      if(directional == "West" && this._pos.x > 0){
        this._pos.x -=1;
      }
    }
  }
}
//checks for wasd to pushed
var sneekysneekysnek = new Snek(10,10);
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
  return sneekysneekysnek.directionChange(push);
});
