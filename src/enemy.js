"use strict";
var LEFT_RIGHT = 0;
var UP_DOWN = 1;


var Enemy = Class(Entity, {
  constructor: function constructor(x, y, genotype) {

    Enemy.$super.call(this, 'enemy', x, y);

    this.sprite.anchor.x = 0.5;
    this.sprite.anchor.y = 0.5;

    var leftWing = new PIXI.Sprite(PIXI.loader.resources['wing'].texture);
    var rightWing = new PIXI.Sprite(PIXI.loader.resources['wing'].texture);

    leftWing.scale.x = -1;
    leftWing.x -= this.getWidth() / 2;
    rightWing.x += this.getWidth() / 2;
    leftWing.y -= this.getHeight() / 2;
    rightWing.y -= this.getHeight() / 2;

    this.addY(this.getHeight() / 2);

    this.container.addChild(leftWing);
    this.container.addChild(rightWing);

    STAGE.addChild(this.container);
    
    this.perceptrons = this.makePerceptrons(genotype);
    this.sensors = [];
    if (DEBUG) this.createVisionLine();
    this.dead = false;
    this.nrOfSensors = 32;
    //how far the robot can see with its sensors
    this.sensorRange = 400;
    this.suicide = false;
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

  	STAGE.addChild(this.visionGraphic);

  },

  animateVisionLine: function animateVisionLine() {

  	this.visionGraphic.clear();
  	this.visionGraphic.lineStyle(2, 0xFF99FF);

  	this.visionGraphic.moveTo(this.pointList[0].x, this.pointList[0].y);
  	for (var i = 1; i < this.pointList.length; i++) {
 			this.visionGraphic.lineTo(this.pointList[i].x, this.pointList[i].y);
  	}

  	this.visionGraphic.lineTo(this.pointList[0].x, this.pointList[0].y);
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

  	STAGE.removeChild(this.container);
  	STAGE.removeChild(this.visionGraphic);
  	return genotype;
  },

  die: function die(suicide) {
  	this.suicide = suicide || false;
  	this.dead = true;
  },

  sense: function sense(player, towers) {
  	//TODO, should get a list of bullets and list of towers too.
  	//senses the enviroment through the sensors
  	//maybe function where you put in your position and a angle and it returns
  	//how far it is until you collide
  	var angle;
  	var collisionFound;
  	this.sensors = [];
  	var checkX;
  	var checkY;
  	var tower;
  	var myX, myY;
  	var dist;
  	var halfWidth, halfHeight;
  	var tower;

  	for (var index = 0; index < NUMBER_OF_SENSORS; index++) {
  		//assume false
  		collisionFound = [false, false];

			angle = (Math.PI * 2) * (index / NUMBER_OF_SENSORS);

  		myX = this.getX();
			myY = this.getY();
			
			for (var dist = 10 ; dist <= this.sensorRange && collisionFound == false; dist += 10) {

				checkX = myX + Math.cos(angle) * dist;
				checkY = myY + Math.sin(angle) * dist;
				halfWidth = this.getWidth() / 2;
				halfHeight = this.getHeight() / 2;

				if (checkX > WORLD_WIDTH - halfWidth || checkX < halfWidth || checkY < halfHeight || checkY > WORLD_HEIGHT - halfHeight) {
						collisionFound[WallIndex] = true;
				}

				if (checkX >= player.getX() && checkX <= player.getX() + player.getWidth()) {
					if (checkY >= player.getY() && checkY <= player.getY() + player.getHeight()) {
						collisionFound[PlayerIndex] = true;
					}
				}

				for (var t = 0; t < towers.length && !collisionFound; t++) {
					tower = towers[t];
					if (checkX >= tower.getX() && checkX <= tower.getX() + tower.getWidth()) {
						if (checkY >= tower.getY() && checkY <= tower.getY() + tower.getHeight()) {
							collisionFound[PlayerIndex] = true;
						}
					}
				}

				if (collisionFound[WallIndex]) {
  				this.sensors[WallIndex].push(this.sensorRange - dist);
  				if (DEBUG) this.pointList[index].set(this.getX() + Math.cos(angle) * dist, this.getY() + Math.sin(angle) * dist);
  			}

  			if (collisionFound[PlayerIndex]) {
  				this.sensors[PlayerIndex].push(this.sensorRange - dist);
  				if (DEBUG) this.pointList[index].set(this.getX() + Math.cos(angle) * dist, this.getY() + Math.sin(angle) * dist);
  			}

			}

			if (collisionFound[WallIndex] == false) {
  			this.sensors[WallIndex].push(0);
  			if (DEBUG) this.pointList[index].set(this.getX() + Math.cos(angle) * this.sensorRange, this.getY() + Math.sin(angle) * this.sensorRange);
  		}

  		if (collisionFound[PlayerIndex] == false) {
  			this.sensors[PlayerIndex].push(0);
  			if (DEBUG) this.pointList[index].set(this.getX() + Math.cos(angle) * this.sensorRange, this.getY() + Math.sin(angle) * this.sensorRange);
  		}
  	}

  	if (DEBUG) this.animateVisionLine();

  	//bias
  	this.sensors[WallIndex].push(1);
  	this.sensors[PlayerIndex].push(1);
  	return this.sensors;
  },

  plan: function plan() {
  	var weight;
  	var input;
  	var sum;

  	for (var p = 0; p < this.perceptrons.length; p++){
  		sum = 0;
  		for (var s = 0; s < this.sensors.length; s++) {
  			weight = this.perceptrons[p].getWeight(s);
  			sum += weight * this.sensors[WallIndex][s];
  		}

  		//bias
  		sum += this.perceptrons[p].getWeight(this.perceptrons.length - 1);

  		this.perceptrons[p].activation(sum);
  	}
  },

  act: function act() {
  	//console.log(this.perceptrons[LEFT_RIGHT].getOutPut());
  	var dx = 0;
  	var dy = 0;

  	var leftRight = this.perceptrons[LEFT_RIGHT].getOutPut();
  	var upDown = this.perceptrons[LEFT_RIGHT].getOutPut();

  	/*
  	variable speed
  	dx = 6 * (leftRight - 0.5);
  	dy = 6 * (upDown - 0.5);
  	*/


  	
  	if (leftRight > 0.55){
  		dx = 3;
  	} else if (leftRight < 0.45){
  		dx = -3;
  	}

  	if (this.perceptrons[UP_DOWN].getOutPut() > 0.55){
  		dy = 3;
  	} else if (this.perceptrons[UP_DOWN].getOutPut() < 0.45){
  		dy = -3;
  	}
  	

  	this.addX(dx);
  	if (this.getX() < this.getWidth() / 2){
  		this.die(true);
  		//this.setX(0);
  	}
  	else if (this.getX() > WORLD_WIDTH - this.getWidth() / 2){
  		this.die(true);
  		//this.setX(800 - this.getWidth());
  	}
  	this.addY(dy);

  	if (this.getY() < this.getHeight() / 2){
  		this.setY(this.getHeight() / 2);
  	}
  	else if (this.getY() > WORLD_HEIGHT) {
  		this.die();
  	}
  },
});