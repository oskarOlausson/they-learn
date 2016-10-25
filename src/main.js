
var WORLD_WIDTH = 800;
var WORLD_HEIGHT = 600;
var renderer = PIXI.autoDetectRenderer(WORLD_WIDTH, WORLD_HEIGHT);

//argument should maybe be renderer
COLLISION = new Bump(PIXI);

document.body.appendChild(renderer.view);

// create the root of the scene graph
var STAGE = new PIXI.Container();


var loader = PIXI.loader
.add('player','assets/images/player.png')
.add('background','assets/images/background.png')
.add('enemy','assets/images/enemy.png')
.add('wing','assets/images/wing.png')
.once('complete',function(loader, resources) {
	init();
}).load();


var world;

function init() {
	var background = new PIXI.Sprite(PIXI.loader.resources['background'].texture);
	background.width = renderer.width;
	background.height = renderer.height;
	STAGE.addChild(background);

	world = new World();
	world.firstGeneration();

	keyboard.onDown('space', function(){
		world.towers.push(new Tower(world.player.getX(), world.player.getY()));
		console.log("hi");
	});

	gameLoop();
}

	


function gameLoop() {
	
	// render the stage
	renderer.render(STAGE);

	world.update();

	requestAnimationFrame(gameLoop);
}