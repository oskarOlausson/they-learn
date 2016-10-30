"use strict";

var Corpse = Class({
	constructor: function constructor(x, y) {
		/*
		this.sprite = new PIXI.Sprite(PIXI.loader.resources['corpse'].texture);
    	this.sprite.x = x;
    	this.sprite.y = y;
		this.sprite.anchor.set(.5, .5);

		//furthest back (except background)
		OBJECTS.addChildAt(this.sprite, 0);
		*/

		this.dead = false;
		this.timerMax = 60 * 5;
		this.timer = this.timerMax;

		// build a rope!
		var texture = PIXI.loader.resources['corpse'].texture;
		var number = 5;
		var height = 130;
		this.ropeLength = height / (number + 5);

		this.points = [];

		for (var i = 0; i < number; i++) {
		    this.points.push(new PIXI.Point(i * this.ropeLength, 0));
		}

		this.strip = new PIXI.mesh.Rope(texture, this.points);
		this.count = 0;

		this.strip.x = x;
		this.strip.y = y;

		OBJECTS.addChildAt(this.strip, 0);

	},

	update: function update() {

		this.count += 0.05;

	    // make the wobble
	    for (var i = 0; i < this.points.length; i++) {

	        
	        this.points[i].x = i * this.ropeLength + Math.cos((i * 0.3) + this.count) * 20;
	        this.points[i].y = Math.sin((i * 0.5) + this.count) * 30;
    

	    }
	  
	  	if (this.count >= Math.PI * 2) this.count -= Math.PI * 2;


		this.strip.alpha = 0.5 * this.timer / this.timerMax;
		this.timer -= 1;
		if (this.timer <= 0) {
			this.dead = true;
		}
	},

	remove: function remove() {
		OBJECTS.removeChild(this.strip);
	},

	getIfDead: function getIfDead() {
		return this.dead;
	}
})