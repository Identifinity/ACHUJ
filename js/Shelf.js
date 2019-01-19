function createShelf(_x, _y, _w){
  let obj = {
    x: _x,
    y: _y,
    w: _w,
    h: 10,

    draw(){
      // stroke(30);
      // strokeWeight(2);
      // noFill();
      fill(30)
      rect(this.x, this.y, this.w, this.h);
      noStroke();
    }
  }

  shelves.push(obj);
  return obj;
}
