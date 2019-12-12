//checks for wasd to push
class Snek extends Map {
  constructor(){
    super()
    this._head = "O";//will have its own grapic mabey a "D"
    this._body = "o";//length (array of coordinates)
    this._direction = "North";//way the snek is moving which is either North, South, East, West
    this._pos = {x:10,y:10};//will be wherer the snek is on the map
  }
  //getters
  get head(){return this._head;}//nice
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
      if(this._direction == "North"){
        this._pos.y = this._pos.y + 1;
        console.log(this._pos);
        ;
      }
      if(this._direction == "South"){
        this._pos.y = this._pos.y + 1;
      }
      if(this._direction == "East"){
        this._pos.x = this._pos.x + 1;
      }
      if(this._direction == "West"){
        this._pos.x = this._pos.x + 1;
      }
      };

    _overlap(){
      var direction = this.direction;
      var nextMove = this.pos;
      if (direction == "North"){
        nextMove.y ++;
      }
      else if(direction == "South"){
        nextMove.y --;
      }
      else if(direction == "East"){
        nextMove.x ++;
      }
      else if(direction == "West"){
        nextMove.x --;
      }
      var bodyLoc = Map._snekLoc();
      if (nextMove == bodyLoc){
        //end game....... Kinda really just makes snek invisible
        this._head = " ";
        this._body = " ";
      }
      if(nextMove.x == 0){
        this._head = " ";
        this._body = " ";
      }
      if(nextMove.y == 0){
        this._head = " ";
        this._body = " ";
      }
      if(nextMove.x == Map.width){
        this._head = " ";
        this._body = " ";
      }
      if(nextMove.y == Map.length){
        this._head = " ";
        this._body = " ";
      }
    }
    _eatDaFood(){
      var direction = this.direction;
      var nextMove = this.pos;
      var yums = Food.loc;
      if(nextMove == yums){
        this._body += this._body.slice;
        map._Food;
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
