//checks for wasd to push
class Snek extends Map{
  constructor(){
    super()
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
      if(directional == "North"){
        this.pos.y += 1;
            console.log(this.pos);
      }
      if(directional == "South"){
        this.pos.y -=1;
            console.log(this.pos);
      }
      if(directional == "East"){
        this.pos.x +=1;
            console.log(this.pos);
      }
      if(directional == "West"){
        this.pos.x -=1;
            console.log(this.pos);
      }
  }

  _overlap(direction){
    var nextMove = 10;
    var bodyLoc = 10;//wating on jake;
    if (nextMove = bodyLoc){
      //end game....... Kinda really just makes snek invisible
      this._head = " ";
      this._body = " ";
    }
  }
}
//what is jakes gitname
//checks for wasd to pushed
//


var sneks = new Snek();
document.addEventListener("keyup", function work(event){
  var seting = setInterval(function(){
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
    return sneks.directionChange(push);
  },1000);
});
