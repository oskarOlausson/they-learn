"use strict";

var CHANCE_OF_SKIPPING = 0.3;
    var NR_OF_PARENTS = 10;
    var NR_OF_ENEMIES = 60;
    var NR_OF_CHILDS = 6;

var World = Class({
  constructor: function constructor() {
  	this.enemies = [];
    this.genomes = [];
    this.towers  = [];
  },

  firstGeneration: function firstGeneration(width, height) {

    this.player = new Player(width / 2 , height / 2);
    var perceptron;

  	for(var i = 0; i < NR_OF_ENEMIES; i++){
      //some function for generating a genotype
      
  	  this.enemies.push(new Enemy(Math.random() * (width), 0));
  	}
  },
  
  newGeneration: function newGeneration() {
    this.genomes.sort(function(a, b) {
      //sorts so the higher numbers comes first
    	return b.getFitness() - a.getFitness();
    })

    var parents = [];

    do{
	    for (var i = 0; i < this.genomes.length; i++){
	    	if (Math.random() > CHANCE_OF_SKIPPING) parents.push(this.genomes[i]);
	    	if (parents.length > NR_OF_PARENTS){
	    		break;
	    	}
	    }
	  }while(parents.length < NR_OF_PARENTS);

  	this.enemies = [];

  	var parent;
    var index;

  	for (var i = 0; i < NR_OF_ENEMIES; i++){
  		index = Math.floor(Math.random() * parents.length);
  		parent = parents[index];
      this.enemies.push(new Enemy(Math.random() * (800), 0, parent));
  	}
  },

  update: function update() {
  	this.player.update();
    var towers = this.towers;
    var player = this.player;

    
    keyboard.onDown('space', function() {
      //TODO
      if (towers.length < 2) towers.push(new Tower(player.getX(), player.getY()))
    });
    

    for (var i = 0; i < this.towers.length; i++){
      this.towers[i].update(this.enemies);
    }

  	for (var i = 0; i < this.enemies.length; i++){
      this.enemies[i].update(this.player, this.towers);
      if (this.enemies[i].getIfDead()) {
        //remove this element from list
        this.genomes.push(this.enemies[i].remove());
        this.enemies.splice(i, 1);
        i --;
      }
  	}

    if (this.enemies.length == 0) {
      this.newGeneration();
      console.log("new generation");
    }


  },

  
});