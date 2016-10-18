
LEFT_RIGHT = 0;
UP_DOWN = 1;


var Enemy = Class(Entity, {
  constructor: function constructor(x, y, genotype) {
    Enemy.$super.call(this, 'enemy', x, y); 
    
    this.genotype = genotype;
    this.perceptrons = makePerceptrons();
    this.sensors = []
  },

  makePerceptrons: function makePerceptrons() {
  	//uses the genotype to make the perceptrons
  	for (var i = 0; i < this.genotype.perceptrons.length; i++) {
  		this.perceptrons.push( new Perceptron(this.genotype.copyWeights(i)) );
  	}
  }

  getGenoType: function genGenotype() {
  	return this.genotype;
  },

  update: function update() {
  	sense();
  	plan();
  	act();
  },

  sense: function sense() {
  	//senses the enviroment through the sensors TODO
  	//maybe function where you put in your position and a angle and it returns
  	//how far it is until you collide
  },

  plan: function plan() {
  	var weight;
  	var input;
  	var sum;

  	for (var p = 0; p < perceptrons.length; p++){
  		sum = 0;
  		for (var s = 0; s < sensors.length; s++) {
  			weight = perceptrons[p].getWeight(s);
  			sum += weight * this.sensors[s];
  		}
  		perceptrons[p].activation(sum);
  	}
  },

  act: function act() {

  	if (perceptrons[LEFT_RIGHT] > 0.55){
  		dx = 1;
  	} else if (perceptrons[LEFT_RIGHT] < 0.45){
  		dx = -1;
  	}

  	if (perceptrons[UP_DOWN] > 0.55){
  		dy = 1;
  	} else if (perceptrons[UP_DOWN] < 0.45){
  		dy = -1;
  	}

  },
});