"use strict";
var LEFT_RIGHT = 0;
var UP_DOWN = 1;


var Enemy = Class(Entity, {
  constructor: function constructor(x, y, genotype) {

    Enemy.$super.call(this, 'enemy', x, y);

    var leftWing = new PIXI.Sprite(PIXI.loader.resources['wing'].texture);
    var rightWing = new PIXI.Sprite(PIXI.loader.resources['wing'].texture);

    leftWing.scale.x = -1;
    rightWing.x += this.getWidth();

    this.container.addChild(leftWing);
    this.container.addChild(rightWing);

    STAGE.addChild(this.container);
    
    this.perceptrons = this.makePerceptrons(genotype);
    this.sensors = [];
    this.createVisionLine();
    this.dead = false;
    this.nrOfSensors = 32;
    //how far the robot can see with its sensors
    this.sensorRange = 128;
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
  		this.pointList.push(new PIXI.Point(this.getX() + 90 + i, this.getY() + 90 + i));

  		if (i == 0) {
 					this.visionGraphic.moveTo(this.pointList[i].x, this.pointList[i].y);
 			}
 			else {
 					this.visionGraphic.lineTo(this.pointList[i].x, this.pointList[i].y);
 			}
  	}

  	STAGE.addChild(this.visionGraphic);

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
  	var dist

  	for (var index = 0; index < NUMBER_OF_SENSORS; index++) {
  		//assume false
  		collisionFound = false;

			angle = (Math.PI * 2) * (index / NUMBER_OF_SENSORS);

  		myX = this.getX();
			myY = this.getY();
			
			for (var dist = 10; dist <= this.sensorRange; dist += 10) {

				checkX = myX + Math.cos(angle) * dist;
				checkY = myY + Math.sin(angle) * dist;

				if (checkX > WORLD_WIDTH - this.getWidth() || checkX < 0 || checkY < 0 || checkY > WORLD_HEIGHT - this.getHeight()) {
						collisionFound = true;
				}

				if (checkX >= player.getX() && checkX <= player.getX() + player.getWidth()) {
					if (checkY >= player.getY() && checkY <= player.getY() + player.getHeight()) {
						collisionFound = true;
					}
				}

				for (var t = 0; t < towers.length && !collisionFound; t++) {

					if (checkX >= tower.getX() && checkX <= tower.getX() + tower.getWidth()) {
						if (checkY >= tower.getY() && checkY <= tower.getY() + tower.getHeight()) {
							collisionFound = true;
							break;
						}
					}
				}
				
			}

  		if (collisionFound) {
  			this.sensors.push(this.sensorRange - dist);
  			this.pointList[index].x = this.getX() + Math.cos(angle) * dist;
  			console.log(this.pointList[index]);
  			this.pointList[index].y = this.getY() + Math.sin(angle) * dist;

  		}
  		else {
  			this.sensors.push(0);
  			this.pointList[index].x = this.getX() + Math.cos(angle) * this.sensorRange;
  			this.pointList[index].y = this.getY() + Math.sin(angle) * this.sensorRange;
  		}
  	}

  	//bias
  	this.sensors.push();
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
  			sum += weight * this.sensors[s];
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
  	if (this.getX() < 0){
  		this.die(true);
  		//this.setX(0);
  	}
  	else if (this.getX() > WORLD_WIDTH - this.getWidth()){ //TODO, magic number
  		this.die(true);
  		//this.setX(800 - this.getWidth());
  	}
  	this.addY(dy);

  	if (this.getY() < 0){
  		this.setY(0);
  	}
  	else if (this.getY() > WORLD_HEIGHT) {//TODO
  		this.die();
  	}
  },
});