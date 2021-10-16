class Pumpkin extends BaseClass {
    constructor(x, y) {
      super(x,y,80,80);
      this.image=loadImage("sprites/bird.png");
    };
    display(){
      // to make the pumpkin move with the mouse
      var pos = this.body.position;
      //pos.x = mouseX;
      //pos.y = mouseY;
      super.display();
    };
  };
