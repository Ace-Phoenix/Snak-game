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
//checks for wasd to pushed
document.addEventListener("keypress", function onPress(event) {
  var push = {key:undefined};
    if (event.key === "w") {
      push = {key:"w"}
    }
    if (event.key === "a") {
       push = {key:"a"}
    }
    if (event.key === "s") {
      push = {key:"s"}
    }
    if (event.key === "d") {
      push = {key:"d"}
    }
    console.log(push)
    return push;
});
