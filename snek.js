class Snek{
  constructor(head,body,direction){
    this._head = head;
    this._body = body;
    this._direction = direction;
  }
  //getters
  get body(){return this._body}
  get direction(){return this._direction}
  //setters
  set body(length){this._body = length};
  set direction(direction){this.direction = direction};
}
_keyToMove(key){
  key = Utils.typeCheck(key, "str", "dungeon._keyToMove");
  var whitelist = ["W", "A", "S", "D"]
  Utils.whitelist(key, whitelist, "dungeon._keyToMove");
  key = parseInt(key);
  var coordinates = this.hero.location;
  var move = {
    // these are the cardinal directions
    A :{x:coordinates.x+1, y:coordinates.y},//right
    D :{x:coordinates.x-1, y:coordinates.y},//left
    W :{x:coordinates.x, y:coordinates.y-1},//up
    S :{x:coordinates.x, y:coordinates.y+1},//down
  }
  return move[key];
}
