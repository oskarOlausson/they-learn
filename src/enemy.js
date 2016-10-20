
LEFT_RIGHT = 0;
UP_DOWN = 1;


var Enemy = Class(Entity, {
  constructor: function constructor(x, y, genotype) {
    Enemy.$super.call(this, 'enemy', x, y); 
    
    this.perceptrons = this.makePerceptrons(genotype);
    this.sensors = [];
    this.dead = false;
    this.nrOfSensors = 32;
    //how far the robot can see with its sensors
    this.sensorRange = 256;
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
	  		perceptrons.push( genotype.copyWeights(i) );
	  	}
  	}

  	return perceptrons;
  },

  getGenoType: function genGenotype() {
  	return this.genotype;
  },

  update: function update(player) {
  	this.sensors = this.sense(player);
  	this.plan();
  	this.act();
  	if (this.collision(this.getX(), this.getY(), this.getRadius())){
  		this.die();
  	}
  },

  getIfDead: function getIfDead() {
  	return this.dead;
  },

  die: function die() {
  	this.dead = true;
  	genotype = new Genotype();
  	genotype.fitness = this.getY();
  	genotype.setPerceptrons(this.perceptrons);

  	stage.removeChild(this.sprite);
  	return genotype;
  },

  sense: function sense(player) {
  	//TODO, should get a list of bullets and list of towers too.
  	//senses the enviroment through the sensors
  	//maybe function where you put in your position and a angle and it returns
  	//how far it is until you collide
  	var angle;
  	var collisionFound;
  	this.sensors = [];

  	for (var index = 0; index < this.nrOfSensors; index++){
  		angle = (Math.PI * 2) * (index / this.nrOfSensors);
  		collisionFound = false;

  		for (var dist = 0; dist < this.sensorRange; dist += 10) {
  			//we are not sending in our radius because we are checking a point
  			if (player.collision(this.getX() + Math.cos(angle) * dist, this.getY() + Math.sin(angle) * dist)){
  				this.sensors.push(this.sensorRange - dist);
  				collisionFound = true;
  				break;
  			}
  		}

  		if (collisionFound == false){
  			this.sensors.push(0);
  		}
  	}

  	//bias
  	this.sensors.push(1);
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
  	if (this.perceptrons[LEFT_RIGHT].getOutPut() > 0.5){
  		dx = 1;
  		console.log("RIGHT");
  	} else if (this.perceptrons[LEFT_RIGHT].getOutPut() < 0.5){
  		dx = -1;
  		console.log("LEFT");
  	}

  	if (this.perceptrons[UP_DOWN].getOutPut() > 0.5){
  		dy = 1;
  		console.log("DOWN");
  	} else if (this.perceptrons[UP_DOWN].getOutPut() < 0.5){
  		dy = -1;
  		console.log("UP");
  	}

  	this.addX(dx);
  	if (this.getX() < 0){
  		this.setX(0);
  	}
  	else if (this.getX() > 800){ //TODO, magic number
  		this.setX(800);
  	}
  	this.addY(dy);
  },
});