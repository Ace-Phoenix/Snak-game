//checks for wasd to push
class Snek extends Map{
  constructor(){
    this._head = "O";//will have its own grapic mabey a "D"
    this._body = "o";//length
    this._direction = this._direction;//way the snek is moving which is either North, South, East, West
    this._pos = {x:77,y:77};//will be wherer the snek is on the map
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
    if(nextMove == { Map.width,Map.length}){
      this._head = " ";
      this._body = " ";
    }

  }
}

//checks for wasd to pushed

      var sneks = new Snek();
  document.addEventListener("keyup", function work(event){
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
  return inter(push);
  }
function inter(rep){
  var gameplay=0
  while(gameplay<=100){
  if(rep == "w"){
      constentsMove(rep);
      gameplay++
  }
   else if(rep == "s"){
      constentsMove(rep);
      gameplay++
  }
  else if(rep == "d"){
      constentsMove(rep);
      gameplay++
  }
  else if(rep == "a"){
      constentsMove(rep);
      gameplay++
  }
  else{
    return "not ready";
  }
}
}
 function constentsMove(directional){
    setTimeout(function(){
        if(directional == "w"){
        sneks.pos.y += 1;
            console.log(sneks.pos);

        }
        if(directional == "s"){
        sneks.pos.y -=1;
            console.log(sneks.pos);

        }
        if(directional == "d"){
        sneks.pos.x +=1;
            console.log(sneks.pos);

        }
        if(directional == "a"){
          sneks.pos.x -=1;
            console.log(sneks.pos);
        }
    },5000);
  }
