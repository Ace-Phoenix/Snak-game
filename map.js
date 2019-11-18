class Map {
  constructor(width,height){
    this.width = width;
    this.height = height;
  }

  _map(width, height){
    var retAry = [];
    var test = [];
    for (var i = 0; i < width; i++) {
      for (var j = 0; j < height; j++) {
        var obj = {image: ".",x:j, y:i};
        retAry.push(obj);
        test.push(obj.image);
      }
    }
    return test.join("");
  }


  _mapAppear(width, length){
    var bob = this._map(width,length);
    if (bob.x <= 0 || bob.y >= width) {
      bob.image += "=";
    }
    if (bob.x >= length || bob.y <= 0) {
      bob.image += "|";
    }
    return bob;
  }
}
lol = new Map();
document.getElementById("map").innerHTML = lol._mapAppear(10,10);
