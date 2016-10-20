
var NUMBER_OF_SENSORS = 32;
var MUTATE_CHANCE = 0.05;
var MUTATE_AMOUNT = 0.1;

var Perceptron = Class({

  constructor: function constructor(weights, weights2) {

    this.output = 0;
    this.weights = [];

    
    if (weights == undefined) {
      //Zero parents
      for (var i = 0; i < NUMBER_OF_SENSORS + 1; i++) {
        this.weights.push(Math.random() - 0.5);
      }
    } else if (weights2 == undefined){
      //One parent
      //the plus one part is for the bias
      var random_mutation;
      var mutated;
      for (var i = 0; i < NUMBER_OF_SENSORS + 1; i++) {
        if (Math.random() < MUTATE_CHANCE){
          random_mutation = Math.random() * MUTATE_AMOUNT;

          mutated = random_mutation + weights[i];
          if (mutated > 0.5) mutated = 0.5;
          else if (mutated < -0.5) mutated = -0.5;

          this.weights.push(mutated);
        }
        else{
          this.weights.push(weights[i]);
        }
      }
    }
    else{
      //Two parents
      for (var i = 0; i < NUMBER_OF_SENSORS; i++) {
        var parent;
        if (Math.Random() <= 0.5){
          parent = weights[i];
        }
        else{
          parent = weights2[i];
        }

        if (Math.Random() < MUTATE_CHANCE){
          var random_mutation = Math.random() * MUTATE_AMOUNT;
          var mutated = Math.max(Math.min(parent + random_mutation, 0.5) - 0.5);
          this.weights.push(mutated);
        }
        else{
          this.weights.push(parent);
        }
      }
    }
  },

  getWeight: function getWeight(index) {
    return this.weights[index];
  },

  getWeights: function getWeights() {
    return this.weights;
  },

  copyWeights: function copyWeights() {
    return this.weights.slice();
  },

  activation: function activation(x) {
    this.output = 1 / (1 + Math.exp(-x));
    return this.output;
  },

  getOutPut: function getOutPut(){
    return this.output;
  }
  
})