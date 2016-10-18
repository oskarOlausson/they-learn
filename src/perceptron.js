
var NUMBER_OF_SENSORS = 32;
var MUTATE_CHANCE = 0.05;
var MUTATE_AMOUNT = 0.1;

var Perceptron = Class({

  constructor: function constructor(weights, weights2) {

    this.output = 0;

    if (weights == undefined) {
      //Zero parents

      this.weights = [];
      for (var i = 0; i < NUMBER_OF_SENSORS; i++) {
        this.weights.push(Math.random() - 0.5);
      }

    } else if (weights2 == undefined){
      //One parent

      for (var i = 0; i < NUMBER_OF_SENSORS; i++) {
        if (Math.Random() < MUTATE_CHANCE){
          var random_mutation = Math.random() * MUTATE_AMOUNT;
          var mutaded = Math.max(Math.min(weights[i] + random_mutation, 0.5) - 0.5);
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
          var mutaded = Math.max(Math.min(parent + random_mutation, 0.5) - 0.5);
          this.weights.push(mutated);
        }
        else{
          this.weights.push(parent);
        }
      }
    }
  },

  getWeights: function getWeights() {
    return self.weights;
  },

  copyWeights: function copyWeights() {
    return self.weights.slice();
  },

  activation: function activation(x) {
    this.output = 1 / (1 + Math.exp(-x));
    return this.output;
  },

  getOutPut: function getOutPut(){
    return this.output;
  }
  
})