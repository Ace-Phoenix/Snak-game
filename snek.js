//checks for wasd to push
class Snek extends Map {
  constructor(){
    super()
    this._head = "O";//will have its own grapic mabey a "D"
    this._body = "o";//length (array of coordinates)
    this._direction = undefined;//way the snek is moving which is either North, South, East, West
    this._pos = {x:10,y:20};//will be wherer the snek is on the map
  }
  //getters
  get head(){return this._head;}//nice
  get body(){return this._body;}
  get direction(){return this._direction;}
  get pos(){return this._pos;}

  //setters
  set body(length){this._body = length;}


  _directionChange(keyPressed){
    //North
    if(keyPressed == "w" && this._direction != "South"){
      this._direction = "North";
      console.log("w")
    }
    //South
    if(keyPressed == "s" && this._direction != "North"){
      this._direction = "South";
      console.log("s")
    }
    //East
    if(keyPressed == "d" && this._direction != "West"){
      this._direction = "East";
      console.log("d")
    }
    //West
    if(keyPressed == "a" && this._direction != "East"){
      this._direction = "West";
      console.log("a")
    }
    return this.direction;
  }


  _constentsMove(){
    console.log("ree")
  //  while(this._overlap() == true){
      if(this._direction == "North"){
        this._pos.x = this._pos.x - 1;
      }
      if(this._direction == "South"){
        this._pos.x = this._pos.x + 1;
      }
      if(this._direction == "East"){
        this._pos.y == this._pos.y + 1;
      }
      if(this._direction == "West"){
        this._pos.y == this._pos.y - 1;
        }
    //  }

    }

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
      var bodyLoc = this._loc;
      if (nextMove == bodyLoc){
        //end game....... Kinda really just makes snek invisible
        this._head = " ";
        this._body = " ";
        return false;
      }
      else if(nextMove.x == 0){
        this._head = " ";
        this._body = " ";
        return false
      }
      else if(nextMove.y == 0){
        this._head = " ";
        this._body = " ";
        return false;
      }
      else if(nextMove.x == Map.width){
        this._head = " ";
        this._body = " ";
        return false;
      }
      else if(nextMove.y == Map.length){
        this._head = " ";
        this._body = " ";
        return false;
      }else{
        console.log("MOVE")
        return true}
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
