//checks for wasd to push
class Snek extends Map {
  constructor(){
    this._head = "O";//will have its own grapic mabey a "D"
    this._body = "o";//length
    this._direction = this._direction;//way the snek is moving which is either North, South, East, West
    this._pos = {x:undefined,y:undefined};//will be wherer the snek is on the map
  }
  //getters
  get head(){return this._head;}
  get body(){return this._body;}
  get direction(){return this._direction;}
  get pos(){return this._pos;}

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


  _constentsMove(directional){
    setInterval(function(){
      if(directional == "North" && this._pos.y){
        this._pos.y += 1;
      }
      if(directional == "South" && this._pos.y){
        this._pos.y -=1;
      }
      if(directional == "East" && this._pos.x){
        this._pos.x +=1;
      }
      if(directional == "West" && this._pos.x){
        this._pos.x -=1;
      }
      console.log(this._pos.x);
      console.log(this._pos.y);
      }, 1000);
  }
  _overlap(){

  }
}
//what is jakes gitname
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
  //in the five fucking minets he had my computer
  var sneks = new Snek();
  return sneks.directionChange(push);
});
