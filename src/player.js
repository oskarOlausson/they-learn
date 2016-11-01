
var Player = Class(Entity, {
  constructor: function constructor(x, y) {
    Player.$super.call(this, 'player', x, y);
    this.sprite.anchor.set(.5, .5);
    this.stretch = 0;
    this.speedMax = 8;
    this.acc = 1;
    this.fric = 0.5;
    this.dx = 0;
    this.dy = 0;
    this.flip = 1;
  },
  

  update: function update() {
  		this.move();
  },

  move: function move(){


    if (keyboard.isDown('right')) {
      this.dx = Math.min(this.dx + this.acc, this.speedMax);
      if (this.dx < 0) this.dx = 0;
    }
    else if (keyboard.isDown('left')) {
     this.dx = Math.max(this.dx - this.acc, -this.speedMax);
     if (this.dx > 0) this.dx = 0;
    }
    else {
    	if (this.dx > 0) this.dx = Math.max(0, this.dx - this.fric);
    	else this.dx = Math.min(0, this.dx + this.fric);
    }

    if (keyboard.isDown('up')) {
      this.dy = Math.max(this.dy - this.acc, -this.speedMax);
      if (this.dy > 0) this.dy = 0;
    }
    else if (keyboard.isDown('down')) {
      this.dy = Math.min(this.dy + this.acc, this.speedMax);
      if (this.dy < 0) this.dy = 0;
    }
    else {
		if (this.dy > 0) this.dy = Math.max(0, this.dy - this.fric);
    	else this.dy = Math.min(0, this.dy + this.fric);
    }

    if (this.dx > 0) this.flip = 1;
    if (this.dx < 0) this.flip = -1;   

    this.addX(this.dx);
    this.addY(this.dy);

    var limit = this.getHeight() * 2.5;
    
    if (this.getY() < limit) {
    	this.setY(limit);
    }

    var stretch = 1 + Math.abs(this.dx) / this.speedMax - Math.abs(this.dy) / this.speedMax;
    this.sprite.scale.x = this.flip * (1 + (0.2 * stretch));
    this.sprite.scale.y = 1 / Math.abs(this.sprite.scale.x);
  },

});