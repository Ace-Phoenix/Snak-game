//checks for wasd to pushed
class Snek{
  constructor(head,body,direction){
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
}
//checks for wasd to pushed

function work(event) {
  var push = {key:undefined};
  if (event.key == "w" || event.key == "W") {
    push = {key:"w"};
  }
  if (event.key == "a" || event.key == "A") {
    push = {key:"a"};
  }
  if (event.key == "s" || event.key =="S") {
    push = {key:"s"};
  }
  if (event.key == "d" || event.key == "D") {
    push = {key:"d"};
  }
  console.log(push);
  return push;
}
document.addEventListener("keyup", work(event.key));
