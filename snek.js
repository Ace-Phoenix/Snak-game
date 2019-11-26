//checks for wasd to pushed

class Snek {
  constructor(tst,head,body,direction){
    this._head = head;//will have its own grapic mabey a "D"
    this._body = body;//length
    this._direction = direction;//way the snek is moving which is either North, South, East, West
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
        return constentsMove("North");
      }
      //South
      if(keyPressed == "s"){
        return constentsMove("South");
      }
      //East
      if(keyPressed == "d"){
        return constentsMove("East");
      }
      //West
      if(keyPressed == "a"){
        return constentsMove("West");
      }
    }
    constentsMove(directionial, posX, posY){
      var snekPos = {x:posX,y:posY};
      if(directionial == "North"){
        snekPos.y++;
      }
      if(directionial == "South"){
        snekPos.y--;
      }
      if(directionial == "East"){
        snekPos.x ++;
      }
      if(directionial == "West"){
        snekPos.x--;
      }
    }
}
//checks for wasd to pushed
var tst = document.addEventListener("keyup", 
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
var sneekysneekysnek = new Snek(push);
  return sneekysneekysnek.directionChange(push);
});
