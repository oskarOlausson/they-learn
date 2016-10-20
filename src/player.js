
var Player = Class(Entity, {
  constructor: function constructor(x, y) {
    Player.$super.call(this, 'player', x, y);
  },
  

  update: function update() {
  		this.move();
  },

  move: function move(){

    if (keyboard.isDown('right')) {
      this.addX(5);
    }
    if (keyboard.isDown('left')) {
     this.addX(-5);
    }
    if (keyboard.isDown('up')) {
      this.addY(-5);
    }
    if (keyboard.isDown('down')) {
      this.addY(5);
    }
  },

});