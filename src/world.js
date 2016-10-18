var CHANCE_OF_SKIPPING = 0.3;
    var NR_OF_PARENTS = 10;
    var NR_OF_ENEMIES = 100;
    var NR_OF_CHILDS = 10;

var World = Class({
  constructor: function constructor() {
  	this.enemies = [];
  },

  firstGeneration: function firstGeneration(width, height) {

    this.player = new Player(width / 2 , height / 2);
    var perceptron;

  	for(var i = 0; i < NR_OF_ENEMIES; i++){
      //some function for generating a genotype
      var genotype = null;
  		this.enemies.push(new Enemy(Math.random() * (width), 0, genotype));
  	}
  },
  
  takeTheBest: function takeTheBest(enemies) {
    enemies.sort(function(a, b){
    	return b.fitness - a.fitness;
    })

    var parents = [];
    do{
	    for (var i = 0; i < enemies.length; i++){
	    	if (Math.random() > CHANCE_OF_SKIPPING) parents.push(enemies[i]);
	    	if (parents.length > NR_OF_PARENTS){
	    		break;
	    	}
	    }
	}while(parents.length < 10);

	newGenerations = [];

	var parent;

	for (var j = 0; j < NR_OF_ENEMIES; i++){
		parent = Math.floor(Math.random() * parents.length);
		parent = parents[parent];

		newGenerations.push(new Enemy(x, y, parent.getGenoType()));
	}

	enemies = newGenerations;
  },

  update: function update() {
  	player.update();
  	for (var i = 0; i < enemies.length; i++){
  		enemies[i].update();
  	}
  },

  
});