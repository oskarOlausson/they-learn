
LEFT_RIGHT = 0;
UP_DOWN = 1;


var Enemy = Class(Entity, {
  constructor: function constructor(x, y, genotype) {
    Enemy.$super.call(this, 'enemy', x, y); 
    
    this.genotype = genotype;
    this.perceptrons = this.makePerceptrons();
    this.sensors = [];
    this.nrOfSensors = 32;
    //how far the robot can see with its sensors
    this.sensorRange = 256;
  },

  makePerceptrons: function makePerceptrons() {
  	var perceptrons = [];
  	
  	//uses the genotype to make the perceptrons
  	for (var i = 0; i < this.genotype.perceptrons.length; i++) {
  		perceptrons.push( new Perceptron(this.genotype.copyWeights(i)) );
  	}

  	return perceptrons;
  },

  getGenoType: function genGenotype() {
  	return this.genotype;
  },

  update: function update() {
  	this.sensors = this.sense();
  	this.plan();
  	this.act();
  },

  collisionLine: function collisionLine(angle) {
  	//uses this.x, this.y and angle

  },

  sense: function sense(player) {
  	//TODO, should get a list of bullets and list of towers too.
  	//senses the enviroment through the sensors TODO
  	//maybe function where you put in your position and a angle and it returns
  	//how far it is until you collide
  	var angle;
  	var collisionFound;
  	this.sensors = [];

  	for (var index = 0; index < this.sensors.length; index++){
  		angle = (Math.PI * 2) * (index / this.nrOfSensors);
  		collisionFound = false;

  		for (var dist = 0; dist < this.sensorRange; dist++) {
  			//we are not sending in our radius because we are checking a point
  			if (player.collision(getX() + Math.cos(angle) * dist, getY() + Math.sin(angle) * dist)){
  				this.sensors.push(this.sensorRange - dist);
  				collisionFound = true;
  				break;
  			}
  		}

  		if (!collisionFound){
  			this.sensors.push(0);
  		}
  	}

  	return this.sensors;
  },

  plan: function plan() {
  	var weight;
  	var input;
  	var sum;

  	for (var p = 0; p < this.perceptrons.length; p++){
  		sum = 0;
  		for (var s = 0; s < this.sensors.length; s++) {
  			weight = perceptrons[p].getWeight(s);
  			sum += weight * this.sensors[s];
  		}
  		this.perceptrons[p].activation(sum);
  	}
  },

  act: function act() {
  	if (this.perceptrons[LEFT_RIGHT] > 0.55){
  		dx = 1;
  	} else if (this.perceptrons[LEFT_RIGHT] < 0.45){
  		dx = -1;
  	}

  	if (this.perceptrons[UP_DOWN] > 0.55){
  		dy = 1;
  	} else if (this.perceptrons[UP_DOWN] < 0.45){
  		dy = -1;
  	}
  },
});