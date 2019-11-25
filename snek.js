//checks for wasd to pushed
class Snek {
  constructor(posX,posY, head, body, direction){
    this._head = head;//will have its own grapic mabey a "D"
    this._body = body;//length
    this._direction = direction;//way the snek is moving which is either North, South, East, West
    this._posX = posX;
    this._posY = posY;
  }
  //getters
  get body(){return this._body;}
  get direction(){return this._direction;}
  //setters
  set body(length){this._body = length;}
  set direction(direction){this.direction = direction;}
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
        console.log("North");
        this._posY += 1;
      }
      }
      while(directional == "South" && this._posY > 0){
      if(directional == "South" && this._posY > 0){
        console.log("South");
        this._posY-=1;
  }
  }
  while(directional == "East" && this._posX < map._width){
      if(directional == "East" && this._posX < map._width){
        console.log("East");
        this._posX+=1;
      }
  }
  while(directional == "West" && this._posX > 0){
      if(directional == "West" && this._posX > 0){
        console.log("West");
        this._posX-=1;
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
