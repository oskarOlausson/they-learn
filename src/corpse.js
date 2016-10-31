"use strict";

var Corpse = Class({
	constructor: function constructor(x, y) {
		
		this.sprite = new PIXI.Sprite(PIXI.loader.resources['corpse'].texture);
    	this.sprite.x = x;
    	this.sprite.y = y;
		this.sprite.anchor.set(.5, .5);
		this.sprite.rotation = (Math.random() - 0.5) * Math.PI / 6;
		this.sprite.scale.x = 0.8;

		//furthest back (except background)
		OBJECTS.addChildAt(this.sprite, 0);
		

		this.dead = false;
		this.timerMax = 60 * 2;
		this.timer = this.timerMax;

		// build a rope!
		var texture = PIXI.loader.resources['ghost'].texture;
		var number = 5;
		var height = this.sprite.height;
		this.ropeLength = height / (number);

		this.points = [];

		for (var i = 0; i < number; i++) {
		    this.points.push(new PIXI.Point(i * this.ropeLength, 0));
		}

		this.strip = new PIXI.mesh.Rope(texture, this.points);
		this.count = 0;

		this.strip.x = x - this.sprite.width / 2;
		this.strip.y = y;


		OBJECTS.addChild(this.strip);

		this.splat = new PIXI.Sprite(PIXI.loader.resources['splat'].texture);

		var color = new tinycolor({ h: Math.round(Math.random() * 255), s: 200, v: 200 });

		this.splat.tint = "0x" + color.toHex();

		this.splat.x = x;
		this.splat.y = y;
		this.splat.anchor.set(.5, .5);
		this.splat.rotation = Math.random() * 360;
		this.splat.scale.x = 0.9 + Math.random() * 0.2;
		this.splat.scale.y = 0.9 + Math.random() * 0.2;

		this.splatSpeed = Math.random() * -2;
		BACK.addChild(this.splat);


	},

	update: function update() {

		this.count += 0.1;

	    // make the wobble
	    for (var i = 0; i < this.points.length; i++) {
       
	        this.points[i].x = i * this.ropeLength + Math.cos((i * 0.3) + this.count) * 10;
	        this.points[i].y = Math.sin((i * 0.5) + this.count) * 5;
    
	    }
	  
	  	if (this.count >= Math.PI * 2) this.count -= Math.PI * 2;

	  	var fade = this.timer / this.timerMax;

		this.strip.alpha = fade * 0.75;
		this.sprite.alpha = Math.min(1, fade);
		this.splat.alpha = Math.min(1, fade)

		this.strip.y += this.splatSpeed;

		this.timer -= 1;
		if (this.timer <= 0) {
			this.dead = true;
		}
	},

	remove: function remove() {
		OBJECTS.removeChild(this.strip);
		OBJECTS.removeChild(this.sprite);
		BACK.removeChild(this.splat);
	},

	getIfDead: function getIfDead() {
		return this.dead;
	}
})