
var Corpse = Class({
	constructor: function constructor(x, y) {
		this.sprite = new PIXI.Sprite(PIXI.loader.resources['corpse'].texture);
    	this.sprite.x = x;
    	this.sprite.y = y;
		this.sprite.anchor.set(.5, .5);
		this.sprite.rotation = (Math.PI / 180) * ((Math.random() * 20) -10);

		//furthest back (except background)
		OBJECTS.addChildAt(this.sprite, 0);

		this.dead = false;
		this.timer = 120;
	},

	update: function update() {
		this.timer -= 1;
		if (this.timer <= 0) {
			this.dead = true;
		}
	}
})