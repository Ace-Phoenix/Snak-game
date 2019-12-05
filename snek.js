//checks for wasd to push
class Snek {
  constructor(){
    this._head = "O";//will have its own grapic mabey a "D"
    this._body = "o";//length
    this._direction = this._direction;//way the snek is moving which is either North, South, East, West
    this._pos = {x:46,y:20};//will be wherer the snek is on the map
  }
  //getters
  get head(){return this._head;}
  get body(){return this._body;}
  get direction(){return this._direction;}
  get pos(){return this._pos;}

  //setters
  set body(length){this._body = length;}
  set direction(direction){this.direction = direction;}
  set pos(pos){this._pos = pos;}

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
          var tst = new Snek();
    if(directional == "North"){
    setInterval(function(){
      if(directional == "North"){
        tst.pos.y += 1;
      }
    }, 1000);
    }
  if(directional == "South"){
    setInterval(function(){
      if(directional == "South"){
        tst.pos.y -=1;
      }
    }, 1000);
  }
  if(directional == "East"){
    setInterval(function(){
      if(directional == "East"){
        tst.pos.x +=1;
      }
    }, 1000);
  }
  if(directional == "West"){
    setInterval(function(){
      if(directional == "West"){
        tst.pos.x -=1;
      }
      console.log(tst.pos);
    }, 1000);
  }
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
