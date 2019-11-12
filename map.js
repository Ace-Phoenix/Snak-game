class map{
  constructor(data){
    this._width = this._datatype(data.size.width, "int");
    this._height = this._datatype(date.size.height, "int");
    this._tile = this._datatype(date.tile, "obj");
    this._fill = this._dataCheck(data.fill, "str");
  }

  _dataCheck(item, type){
     try{ var retVal = Utils.typeCheck(item, type, "Map constructor"); }
     catch(e){
       e += "The Map class constructor expects an object of the format: ";
       e += "{name: str, size: {width: int, height: int}, tile: Class, fill:str}. ";
       e += "One or more part of this object failed to pass type checking or was ";
       e += "not present in the starting data object.";
       throw new Error(e);
     }
     return retVal;
   }

  _initMap(size, fill){
  var retAry = []
  var cells = {x:undefined,y:undefined}
  for (var i = 0; i < size.height; i++) {
    cells = {x:i,y:undefined}
    for (var j = 0; j < size.width; j++) {
      cells = {x:i,y:j}
      }
    }
  return retAry.push(cells);
  }

  set width(int){ this._width = Utils.typeCheck(int, "int", "Map.width"); }
  get width(){ return this._width; }

  set height(int){ this._heigth = Utils.typeCheck(int, "int", "Map.height"); }
  get height(){ return this._height; }

  set tile(cls){ this._tile = Utils.typeCheck(cls, "class", "Map.width"); }
  get tile(){ return this._tile; }

  set fill(str){ this._fill = Utils.typeCheck(str, "str", "Map.width"); }
  get fill(){ return this._fill; }

}
