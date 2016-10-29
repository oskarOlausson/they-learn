
var Player = Class(Entity, {
  constructor: function constructor(x, y) {
    Player.$super.call(this, 'player', x, y);
    this.stretch = 0;
    this.previousX = x;
    this.previousY = y;
    this.speed = 5;
  },
  

  update: function update() {
  		this.move();
  },

  move: function move(){


    if (keyboard.isDown('right')) {
      this.addX(this.speed);
    }
    if (keyboard.isDown('left')) {
     this.addX(-this.speed);
    }
    if (keyboard.isDown('up')) {
      this.addY(-this.speed);
    }
    if (keyboard.isDown('down')) {
      this.addY(this.speed);
    }

    var stretch = 1; // + Math.abs(this.previousX - this.getX()) / this.speed - Math.abs(this.previousY - this.getY()) / this.speed;
    this.sprite.scale.x = 1 + (0.2 * stretch);
    this.sprite.scale.y = 1 / this.sprite.scale.x;

    this.previousX = this.getX();
    this.previousY = this.getY();
  },

});