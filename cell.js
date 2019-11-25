class Cell {
  constructor(type = "map") {
    this._obj = {x:undefined,y:undefined,name:" "};
    this._type = Utils.typeCheck(type, "str", "cell constructor type");
  }

  get obj(){return this._obj;}


  get type(){return this._type;}
  set type(type){
    this._type = Utils.typeCheck(type, "str", "Cell.name");
    this._snek = Utils.typeCheck(type, "str", "Cell.name");
  }

    toString(){
      return this.obj.name;
  }
}
