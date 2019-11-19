class Map {
  constructor() {
   this._name = this._dataCheck(data.name, "str");
   this._width = this._dataCheck(data.size.width, "int");
   this._height = this._dataCheck(data.size.height, "int");

   his._cells = this._map(this.width, this._height)
  }

  _map(width, height){
    var retAry = [];
    var obj = {x:undefined,y:undefined};
    for (var i = 0; i < height; i++) {
      for (var j = 0; j < width; j++) {
        obj = {x:j, y:i}
        retAry.push(obj);
      }
    }
    return retAry;
  }
}
