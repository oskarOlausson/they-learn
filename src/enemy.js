
var Enemy = Class(Entity, {
  constructor: function constructor(x, y, genotype) {
    Enemy.$super.call(this, 'enemy', x, y); 
    
    this.genotype = genotype;
  }
});