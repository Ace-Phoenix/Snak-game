class Cell {
  constructor(name, type = "map") {
    this._name = Utils.typeCheck(name, "str", "cell constructor name")
    this._type = Utils.typeCheck(type, "str", "cell constructor type");
  }

  get name(){ return this._name; }
  set name(str){ this._name = Utils.typeCheck(str, "str", "Cell.name");}

  get type(){return this._type}
  set type(type){
    this._type = Utils.typeCheck(type, "str", "Cell.name");
    this._snek = Utils.typeCheck(type, "str", "Cell.name");
  }

    toString(){
      return this.name;
  }
}
