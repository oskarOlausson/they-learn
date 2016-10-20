
NR_OF_PERCEPTRONS = 2;

var Genotype = Class({
  constructor: function constructor(fitness, copyAfter) {
    this.fitness = fitness || 0;
    this.perceptrons = [];
    if (copyAfter == undefined){
      for (var i = 0; i < NR_OF_PERCEPTRONS; i++) {
        this.perceptrons.push(new Perceptron());
      }
    }else{
      for (var i = 0; i < NR_OF_PERCEPTRONS; i++) {
        this.perceptrons.push(new Perceptron( copyAfter.copyWeights(i) ));
      }
    }
  },

  setPerceptrons: function setPerceptrons(perceptrons) {
    this.perceptrons = perceptrons;
  },

  getPerceptron: function getPerceptrons() {
    return this.perceptrons;
  },

  copyWeights: function copyWeights(index) {
    return this.perceptrons[index].copyWeights();
  },

  getFitness: function getFitness() {
    return this.fitness;
  },

  setFitness: function setFitness(fitness) {
    this.fitness = fitness;
  },
});