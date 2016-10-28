
var NUMBER_OF_SENSORS = 16;
var NUMBER_OF_TYPES = 2;
var MUTATE_CHANCE = 0.5;
var MUTATE_AMOUNT = 0.3;
var WallIndex = 0;
var PlayerIndex = 1;

var Perceptron = Class({

  constructor: function constructor(weights, weights2) {

    this.outputs = [0, 0];
    this.weights = [];

    
    this.weights[WallIndex] = []; //for walls
    this.weights[PlayerIndex] = []; //for the player
    
    
    if (weights == undefined) {
      //Zero parents
      for (var i = 0; i < NUMBER_OF_SENSORS; i++) {
        this.weights[WallIndex].push(Math.random() - 0.5);
        this.weights[PlayerIndex].push(Math.random() - 0.5)
      }

      //bias
      this.weights[WallIndex].push(Math.random() - 0.5);
      this.weights[PlayerIndex].push(Math.random() - 0.5);

    }
    else if (weights2 == undefined){
      //One parent
      var random_mutation;
      var mutated;
      for (var i = 0; i < weights[WallIndex].length; i++) {
        for (var type = 0; type < 2; type++) {
          if (Math.random() < MUTATE_CHANCE){
            random_mutation = Math.random() * MUTATE_AMOUNT - MUTATE_AMOUNT / 2;

            mutated = random_mutation + weights[type][i];
            if (mutated > 0.5) mutated = 0.5;
            else if (mutated < -0.5) mutated = -0.5;

            this.weights[type].push(mutated);
          }
          else{
            this.weights[type].push(weights[type][i]);
          }
        }
      }
    }
    else{
      //Two parents
      var parent;
      for (var i = 0; i < weights[WallIndex].length; i++) {
        for (var type = 0; type < 2; type++) {      
          if (Math.Random() <= 0.5){
            parent = weights[type][i];
          }
          else{
            parent = weights2[type][i];
          }

          if (Math.Random() < MUTATE_CHANCE){
            var random_mutation = Math.random() * MUTATE_AMOUNT - MUTATE_AMOUNT / 2;
            var mutated = Math.max(Math.min(parent + random_mutation, 0.5) - 0.5);
            this.weights.push(mutated);
          }
          else{
            this.weights.push(parent);
          }
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

  activation: function activation(ins) {
    this.outputs[WallIndex] = 1 / (1 + Math.exp(-ins[WallIndex]));
    this.outputs[PlayerIndex] = 1 / (1 + Math.exp(-ins[PlayerIndex]));
    return this.outputs;
  },

  getOutPut: function getOutPuts(){
    return this.outputs;
  }
  
})