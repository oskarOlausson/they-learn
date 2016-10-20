
var NUMBER_OF_SENSORS = 32;
var MUTATE_CHANCE = 0.05;
var MUTATE_AMOUNT = 0.1;

var Perceptron = Class({

  constructor: function constructor(weights, weights2) {

    this.output = 0;
    this.weights = [];

    
    if (weights == undefined) {
      //Zero parents
      console.log("zero parents");
      for (var i = 0; i < NUMBER_OF_SENSORS + 1; i++) {
        this.weights.push(Math.random() - 0.5);
      }
    } else if (weights2 == undefined){
      a = b;
      //One parent
      console.log("one parent");
      //the plus one part is for the bias
      for (var i = 0; i < NUMBER_OF_SENSORS + 1; i++) {
        if (Math.random() < MUTATE_CHANCE){
          var random_mutation = Math.random() * MUTATE_AMOUNT;
          var mutaded = Math.max(Math.min(weights[i] + random_mutation, 0.5) - 0.5);
          console.log(mutated);
          this.weights.push(mutated);
        }
        else{
          this.weights.push(weights[i]);
        }
      }
    }
    else{
      //Two parents
      console.log("two parents");

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


    for (var i = 0; i < this.weights.length; i++) {
      if (this.weights[i] == undefined) console.log(i);
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