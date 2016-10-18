
NR_OF_PERCEPTRONS = 2;

var Genotype = Class({
  constructor: function constructor(copyAfter) {

    if (copyAfter == undefined){
      this.perceptrons = [];
      for (var i = 0; i < NR_OF_PERCEPTRONS; i++) {
        this.perceptrons.push(new Perceptron());
      }
    }else{
      for (var i = 0; i < NR_OF_PERCEPTRONS; i++) {
        this.perceptrons.push(new Perceptron( copyAfter[i].copyWeights() ));
      }
    }
  },

  getPerceptron: function getPerceptrons() {
    return this.perceptrons;
  },

  copyWeights: function copyWeights(index) {
    return this.perceptrons[index].copyWeights();
  }
});