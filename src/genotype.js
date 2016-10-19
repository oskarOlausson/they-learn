
NR_OF_PERCEPTRONS = 2;

var Genotype = Class({
  constructor: function constructor(copyAfter) {
    this.perceptrons = [];
    if (copyAfter == undefined){
      for (var i = 0; i < NR_OF_PERCEPTRONS; i++) {
        this.perceptrons.push(new Perceptron());
        console.log("geno");
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