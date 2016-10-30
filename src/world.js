"use strict";

var CHANCE_OF_SKIPPING = 0;
    var NR_OF_PARENTS = 5;
    var NR_OF_ENEMIES = 40;
    var NR_OF_CHILDS = 8;

var World = Class({
  constructor: function constructor() {
  	this.enemies = [];
    this.genomes = [];
    this.towers  = [];
    this.corpses = [];
    this.screenShake = 0;
    this.screenShakeMax = 10;
  },

  firstGeneration: function firstGeneration() {

    this.player = new Player(WORLD_WIDTH / 2 , WORLD_HEIGHT / 2);
    var perceptron;

  	for(var i = 0; i < NR_OF_ENEMIES; i++){
      //some function for generating a genotype
      
  	  this.enemies.push(new Enemy(Math.random() * (WORLD_WIDTH), 0));
  	}
  },

  destroyAllEnemies: function destroyAllEnemies() {
    var enemy;
    for (var e = 0; e < this.enemies.length; e++) {
      enemy = this.enemies[e];
      //kill them and give them the worst fitness
      enemy.die(true);
    }
  },

  updateScreenShake: function updateScreenShake() {
    STAGE.x = Math.random() * this.screenShake - this.screenShake / 2;
    STAGE.x = Math.random() * this.screenShake - this.screenShake / 2;
    this.screenShake = Math.max(0, this.screenShake - 1);
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
    var corpse;

    for (var i = 0; i < this.towers.length; i++) {
      this.towers[i].update();
    }

    for (var i = 0; i < this.corpses.length; i++) {
      this.corpses[i].update();

      if (this.corpses[i].getIfDead()) {
        this.corpses[i].remove();
        this.corpses.splice(i, 1);
        i --;
      }

    }

  	for (var i = 0; i < this.enemies.length; i++) {
      e = this.enemies[i];
      e.update(this.player, this.towers);

      //uses bump collision
      //the boolean arguments are intersection, bounce, use global coordinates
      if (COLLISION.hit(e.getSprite(), this.player.getSprite(), false, false, true)) {
        e.die();
      }

      for (var t = 0; t < this.towers.length; t++) {
        if (COLLISION.hit(this.towers[t].getSprite(), e.getSprite(), false, false, true)) {
          e.die();
        }
      }

      if (this.enemies[i].getIfDead()) {

        if (this.enemies[i].suicide == false) {
          this.screenShake = this.screenShakeMax;
        }

        //save genome and remove this element from list
        this.genomes.push(this.enemies[i].remove());
        corpse = new Corpse(this.enemies[i].getX(), this.enemies[i].getY());

        this.corpses.push(corpse);


        this.enemies.splice(i, 1);
        i --;
      }
  	}

    this.updateScreenShake();

    if (this.enemies.length == 0) {
      this.newGeneration();
      console.log("new generation");
    }


  },

  
});