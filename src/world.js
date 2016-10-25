"use strict";

var CHANCE_OF_SKIPPING = 0;
    var NR_OF_PARENTS = 7;
    var NR_OF_ENEMIES = 35;
    var NR_OF_CHILDS = 5;

var World = Class({
  constructor: function constructor() {
  	this.enemies = [];
    this.genomes = [];
    this.towers  = [];
    this.pressed = false;
  },

  firstGeneration: function firstGeneration() {

    this.player = new Player(WORLD_WIDTH / 2 , WORLD_HEIGHT / 2);
    var perceptron;

  	for(var i = 0; i < NR_OF_ENEMIES; i++){
      //some function for generating a genotype
      
  	  this.enemies.push(new Enemy(Math.random() * (WORLD_WIDTH), 0));
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
      this.enemies.push(new Enemy(Math.random() * (WORLD_WIDTH), 0, parent));
  	}
  },

  update: function update() {
  	this.player.update();
    var player = this.player;
    var e;

    for (var i = 0; i < this.towers.length; i++){
      this.towers[i].update(this.enemies);
    }

  	for (var i = 0; i < this.enemies.length; i++){
      e = this.enemies[i];
      e.update(this.player, this.towers);

      //uses bump collision
      if (COLLISION.hit(e.getContainer(), this.player.getContainer())) {
        e.die();
      }

      for (var t = 0; t < this.towers.length; t++) {
        if (COLLISION.hit(this.towers[t].getSprite(), e.getSprite())) {
          e.die();
        }
      }

      if (this.enemies[i].getIfDead()) {
        //save genome and remove this element from list
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