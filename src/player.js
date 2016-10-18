
var Player = Class(Entity, {
  constructor: function constructor(x, y) {
    Player.$super.call(this, 'enemy', x, y);
  },

  move: function move(){

    if (keyboard.isDown('right')) {
      addX(1);
    }
    if (keyboard.isDown('left')) {
     addX(-1);
    }
    if (keyboard.isDown('up')) {
      addY(-1);
    }
    if (keyboard.isDown('down')) {
      addY(1);
    }
  },

  addX function addX(dx){
  	this.sprite.position += dx;
  },

  addY function addY(dy){
  	this.sprite.position += dy;
  },

});