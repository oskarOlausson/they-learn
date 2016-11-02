
var NUMBER_OF_SENSORS = 16;
var NUMBER_OF_TYPES = 2;
var MUTATE_CHANCE = 0.35;
var MUTATE_AMOUNT = 1;
var WallIndex = 0;
var PlayerIndex = 1;

var Perceptron = Class({

  constructor: function constructor(weights, weights2) {

    this.output = 0;
    this.weights = [];

    
    this.weights[WallIndex] = []; //for walls
    this.weights[PlayerIndex] = []; //for the player
    
    
    if (weights == undefined) {
      //Zero parents
      for (var i = 0; i < NUMBER_OF_SENSORS; i++) {
        this.weights[WallIndex].push(Math.random() - 0.5);
        this.weights[PlayerIndex].push(Math.random() - 0.5);
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
            random_mutation = (Math.random() - 0.5) * MUTATE_AMOUNT;

            mutated = random_mutation + weights[type][i];

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
            var random_mutation = (Math.random() - 0.5) * MUTATE_AMOUNT;
            var mutated = parent + random_mutation;
            this.weights.push(mutated);
          }
          else{
            this.weights.push(parent);
          }
        }
      }
    }
  },

  getWeight: function getWeight(type, index) {
    return this.weights[type][index];
  },

  getWeights: function getWeights() {
    return this.weights;
  },

  copyWeights: function copyWeights() {
    return this.weights.slice();
  },

  activation: function activation(ins) {
    this.output = 1 / (1 + Math.exp(-ins));
    
    return this.output;
  },

  getOutPut: function getOutPuts(){
    return this.output;
  }
  
})