var CHANCE_OF_SKIPPING = 0.3;
    var NR_OF_PARENTS = 10;
    var NR_OF_ENEMIES = 100;
    var NR_OF_CHILDS = 10;

var World = Class({
  constructor: function constructor() {
    
  },
  
  takeTheBest: function takeTheBest(enemies) {
    enemies.sort(function(a, b){
    	return b.fitness - a.fitness;
    })

    parents = [];
    do{
	    for (var i = 0; i < enemies.length; i++){
	    	if (Math.random() > CHANCE_OF_SKIPPING) parents.push(enemies[i]);
	    	if (parents.length > NR_OF_PARENTS){
	    		break;
	    	}
	    }
	}while(parents.length < 10);

	//Remove all enemies TODO

	for (var i = 0; i < parents.length; i++){
		for (var j = 0; j < NR_OF_CHILDS; i++){
			//create 10 new enemies each
		}
	}


  },

  
});