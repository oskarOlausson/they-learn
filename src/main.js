
var WORLD_WIDTH = 800;
var WORLD_HEIGHT = 900;
var DEBUG = false;
var renderer = PIXI.autoDetectRenderer(WORLD_WIDTH, WORLD_HEIGHT);

//argument should maybe be renderer
COLLISION = new Bump(PIXI);

document.body.appendChild(renderer.view);

// create the root of the scene graph
var STAGE = new PIXI.Container();
var OBJECTS = new PIXI.Container();
var BACK = new PIXI.Container();


var loader = PIXI.loader
.add('player','assets/images/player.png')
.add('background','assets/images/background.png')
.add('enemy','assets/images/enemy.png')
.add('wing','assets/images/wing.png')
.add('corpse','assets/images/corpse.png')
.add('ghost','assets/images/ghost.png')
.add('splat','assets/images/splat.png')
.add('tower','assets/images/tower.png')
.once('complete',function(loader, resources) {
	init();
}).load();


var world;

function init() {
	var background = new PIXI.Sprite(PIXI.loader.resources['background'].texture);
	background.width = renderer.width;
	background.height = renderer.height;

	BACK.addChild(background);
	STAGE.addChild(BACK);
	STAGE.addChild(OBJECTS);

	world = new World();
	world.firstGeneration();

	keyboard.onDown('space', function(){
		world.towers.push(new Tower(world.player.getX(), world.player.getY()));
	});

	keyboard.onDown('enter', function(){
		
		world.destroyAllEnemies();
		
	});

	gameLoop();
}

	


function gameLoop() {
	
	// render the stage
	renderer.render(STAGE);

	world.update();

	requestAnimationFrame(gameLoop);
}