
UPDOWN = 0;
LEFT = 1;


var Enemy = Class(Entity, {
  constructor: function constructor(x, y, genotype) {
    Enemy.$super.call(this, 'enemy', x, y); 
    
    this.genotype = genotype;
    this.perceptrons = makePerceptrons();
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
  },

  plan: function plan() {
  	//Does the whole network thingy TODO
  },

  act: function act() {
  	if ()
  },
});