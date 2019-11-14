class Map {
  constructor(){
    this.width = this._width;
    this.height = this._height;
    this.map = this._map;
  }

  _map(width=10, height=10){
    var retAry = [];
    var obj = {x:undefined,y:undefined};
    for (var i = 0; i < width; i++) {
      for (var j = 0; j < height; j++) {
        obj = {x:j, y:i}
        retAry.push(obj);
      }
    }
    return retAry;
  }
}
