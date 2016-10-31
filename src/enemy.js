"use strict";
var LEFT_RIGHT = 0;
var UP_DOWN = 1;


var Enemy = Class(Entity, {
  constructor: function constructor(x, y, genotype) {

    Enemy.$super.call(this, 'enemy', x, y);

    this.size = 1;

    this.sprite.anchor.set(0.5, 0.5);

    this.leftWing = new PIXI.Sprite(PIXI.loader.resources['wing'].texture);
    this.rightWing = new PIXI.Sprite(PIXI.loader.resources['wing'].texture);


    this.leftWing.scale.x = -1;

    var aBit = 4;
    this.leftWing.x += -this.getWidth() + this.leftWing.width + aBit;
    this.rightWing.x += this.getWidth() / 2 - aBit;

    this.leftWing.y += 10;
    this.rightWing.y += 10;

    this.leftWing.anchor.x = 4 / 60;
    this.leftWing.anchor.y = 66 / 86;
    this.rightWing.anchor.x = 4 / 60;
    this.rightWing.anchor.y = 66 / 86;

    this.container.addChild(this.leftWing);
    this.container.addChild(this.rightWing);

    this.animateTimer = 0;
    this.animateTimerMax = 360;

    this.addY(this.getHeight() / 2);

    OBJECTS.addChild(this.container);
    
    this.perceptrons = this.makePerceptrons(genotype);
    this.sensors = [];
    this.createVisionLine();
    this.dead = false;
    this.nrOfSensors = NUMBER_OF_SENSORS;
    //how far the robot can see with its sensors
    this.sensorRange = 800;
    this.suicide = false;
    this.madeIt = false;
  },

  createVisionLine: function createVisionLine() {
  	//this is for debugging, creates the the graphics object that shows how far an enemy can see

  	this.visionGraphic = new PIXI.Graphics();
  	this.visionGraphic.lineStyle(2, 0xFF99FF);
  	this.pointList = [];
  	var point = [];
  	var angle;

  	for (var i = 0; i < NUMBER_OF_SENSORS; i++) {
  		this.pointList.push(new PIXI.Point(this.getX() + i, this.getY() + i));

  		if (i == 0) {
 					this.visionGraphic.moveTo(this.pointList[i].x, this.pointList[i].y);
 			}
 			else {
 					this.visionGraphic.lineTo(this.pointList[i].x, this.pointList[i].y);
 			}
  	}

  	OBJECTS.addChild(this.visionGraphic);

  },

  animateVisionLine: function animateVisionLine() {

  	this.visionGraphic.clear();

  	if (DEBUG) {
	  	this.visionGraphic.lineStyle(2, 0xFF99FF);

	  	this.visionGraphic.moveTo(this.pointList[0].x, this.pointList[0].y);
	  	for (var i = 1; i < this.pointList.length; i++) {
	 			this.visionGraphic.lineTo(this.pointList[i].x, this.pointList[i].y);
	  	}

	  	this.visionGraphic.lineTo(this.pointList[0].x, this.pointList[0].y);
  	}
  },

  makePerceptrons: function makePerceptrons(genotype) {
  	var perceptrons = [];
  	if (genotype == undefined){
	  	//uses the genotype to make the perceptrons
	  	for (var i = 0; i < NR_OF_PERCEPTRONS; i++) {
	  		perceptrons.push( new Perceptron() );
	  	}
  	}
  	else{
  		//uses the genotype to make the perceptrons
	  	for (var i = 0; i < NR_OF_PERCEPTRONS; i++) {
	  		perceptrons.push( new Perceptron(genotype.copyWeights(i)) );
	  	}
  	}

  	return perceptrons;
  },

  getGenoType: function getGenotype() {
  	return this.genotype;
  },

  update: function update(player, towers) {
  	this.sensors = this.sense(player, towers);
  	this.plan();
  	this.act();
  	this.animate();
  },

  animate: function animate() {

  	this.animateTimer += 10;

  	if (this.animateTimer > this.animateTimerMax) {
  		this.animateTimer -= this.animateTimerMax;
  	}

  	var cosy = Math.cos(this.animateTimer * (Math.PI / 180));
  	var squish = 1 + 0.15 * cosy;
  	var wingRotate = (Math.PI / 6) * cosy;

  	this.leftWing.rotation = wingRotate;
  	this.rightWing.rotation = -wingRotate;
  	

  	this.container.scale.x = this.size * squish;
  	this.container.scale.y = this.size / squish;
  },

  getIfDead: function getIfDead() {
  	return this.dead;
  },

  remove: function remove() {
  	var genotype = new Genotype();
  	if (this.suicide) {
  		genotype.fitness = 0;
  	}
  	else {
  		genotype.fitness = this.getY();
  	}
  	genotype.setPerceptrons(this.perceptrons);

  	OBJECTS.removeChild(this.container);
  	OBJECTS.removeChild(this.visionGraphic);
  	return genotype;
  },

  die: function die(suicide, madeIt) {
  	this.suicide = suicide || false;
  	this.dead = true;
  	this.madeIt = madeIt || false;
  },

  sense: function sense(player, towers) {
  	//TODO, should get a list of bullets and list of towers too.
  	//senses the enviroment through the sensors
  	//maybe function where you put in your position and a angle and it returns
  	//how far it is until you collide
  	var angle;
  	var collisionFound;
  	this.sensors = [];
  	this.sensors[WallIndex] = [];
  	this.sensors[PlayerIndex] = [];
  	var checkX;
  	var checkY;
  	var tower;
  	var myX, myY;
  	var dist;
  	var halfWidth, halfHeight;
  	var tower;

  	for (var index = 0; index < NUMBER_OF_SENSORS; index++) {
  		//assume false
  		collisionFound = false;

			angle = (Math.PI * 2) * (index / NUMBER_OF_SENSORS);

  		myX = this.getX();
			myY = this.getY();
			
			for (var dist = 10 ; dist <= this.sensorRange && collisionFound == false; dist += 10) {
				checkX = myX + Math.cos(angle) * dist;
				checkY = myY + Math.sin(angle) * dist;
				halfWidth = this.getWidth() / 2;
				halfHeight = this.getHeight() / 2;

				if (checkX > WORLD_WIDTH - halfWidth || checkX < halfWidth || checkY < halfHeight || checkY > WORLD_HEIGHT - halfHeight) {
						collisionFound = true;
						this.sensors[WallIndex].push(this.sensorRange - dist);
				}
			}

			if (collisionFound == false) {
						this.sensors[WallIndex].push(this.sensorRange);
			}else collisionFound = false;

			for (var dist = 10 ; dist <= this.sensorRange && collisionFound == false; dist += 10) {
				checkX = myX + Math.cos(angle) * dist;
				checkY = myY + Math.sin(angle) * dist;

				//check if player collides with point
				if (checkX >= player.getX() && checkX <= player.getX() + player.getWidth() && checkY >= player.getY() && checkY <= player.getY() + player.getHeight()) {
					collisionFound = true;
				}

				//checks if any tower collides with point
				for (var t = 0; t < towers.length && !collisionFound; t++) {
					tower = towers[t];
					if (checkX >= tower.getX() && checkX <= tower.getX() + tower.getWidth() && checkY >= tower.getY() && checkY <= tower.getY() + tower.getHeight()) {
						collisionFound = true;
					}
				}

				if (collisionFound) {
					this.sensors[PlayerIndex].push(this.sensorRange - dist);
  				this.pointList[index].set(this.getX() + Math.cos(angle) * dist, this.getY() + Math.sin(angle) * dist);
				}
			}

			if (collisionFound == false) {
						this.sensors[PlayerIndex].push(this.sensorRange);
  					this.pointList[index].set(this.getX() + Math.cos(angle) * dist, this.getY() + Math.sin(angle) * this.sensorRange);
			}

		}

  	this.animateVisionLine();

  	//bias
  	this.sensors[WallIndex].push(1);
  	this.sensors[PlayerIndex].push(1);
  	return this.sensors;
  },

  plan: function plan() {
  	var weight;
  	var weight2;
  	var input;
  	var sum;

  	for (var p = 0; p < this.perceptrons.length; p++){
  		sum = 0;
  		for (var s = 0; s < this.sensors.length; s++) {
  			weight = this.perceptrons[p].getWeight(WallIndex, s);
  			weight2 = this.perceptrons[p].getWeight(PlayerIndex, s);
  			sum += weight * this.sensors[WallIndex][s] + weight2 * this.sensors[PlayerIndex][s];
  		}

  		//bias
  		sum += this.perceptrons[p].getWeight(WallIndex,this.perceptrons.length - 1) * 1;
  		sum += this.perceptrons[p].getWeight(PlayerIndex,this.perceptrons.length - 1) * 1;

  		this.perceptrons[p].activation(sum);
  	}
  },

  act: function act() {
  	var dx = 0;
  	var dy = 0;

  	var leftRight = this.perceptrons[LEFT_RIGHT].getOutPut();
  	var upDown = this.perceptrons[UP_DOWN].getOutPut();

  	
  	//variable speed
  	dx = 6 * (leftRight - 0.5);
  	dy = 6 * (upDown - 0.5);
  	

  	this.addX(dx);
		this.addY(dy);


  	if (this.getX() < this.getWidth() / 2){
  		this.die(false);
  		//this.setX(0);
  	}
  	else if (this.getX() > WORLD_WIDTH - this.getWidth() / 2){
  		this.die(false);
  		//this.setX(800 - this.getWidth());
  	}
  	

  	if (this.getY() < this.getHeight() / 2){
  		this.setY(this.getHeight() / 2);
  	}
  	else if (this.getY() > WORLD_HEIGHT) {
  		this.die(false, true);
  	}
  },
});