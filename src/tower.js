

var Tower = Class(Entity, {
	constructor: function constructor(x, y) {
		Tower.$super.call(this, "tower", x, y);
		this.sprite.anchor.set(.5, .5);
		this.timerMax = 30;
		this.timer = this.timerMax;
		this.killed = false;
	},

	didKill: function didKill() {
		this.killed = true;
		this.timer = 0;
	},

	update: function update() {
		if (this.timer < this.timerMax) {
			this.timer += 1;
			if (this.timer == this.timerMax) {
				this.killed = false;
			}

			var scale = 1 + 0.2 * (1 - this.timer / this.timerMax);
			this.sprite.scale.x = scale;
			this.sprite.scale.y = scale;

		}
	}
})