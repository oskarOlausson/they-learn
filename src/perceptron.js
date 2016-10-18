
var NUMBER_OF_SENSORS = 32;

var Perceptron = Class({
  constructor: function constructor(weights) {
    if (weights == undefined) {
      this.weights = [];
      for (var i = 0; i < NUMBER_OF_SENSORS; i++) {
        this.weights.push(Math.random() - 0.5);
      }
    } else {
      
    }
  },
  
  
})

var activationFunction(x) {
  return 1/(1 + Math.exp(-x));
}