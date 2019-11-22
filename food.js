class Food extends Map{
  constructor(img="*") {
    super()
    this._loc = undefined;//location with x and y keys
    this._img = this._img//will be the text img for the food mabey "*"
  }
  //getters
  get loc(){return this._loc}

  //setters
  set loc(loc){this.loc = loc;}

  _makeFood(maxX,maxY){//returns should be a key of {x,y}
    var foLoc = {x:Math.floor(Math.random() * Math.floor(maxX)),y:Math.floor(Math.random() * Math.floor(maxY))}
    return foLoc;
  }
  }
