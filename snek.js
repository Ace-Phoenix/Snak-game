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
  set body(length){this._body = length}
  
}
