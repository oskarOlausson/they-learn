var renderer = PIXI.autoDetectRenderer(800, 600);
document.body.appendChild(renderer.view);

// create the root of the scene graph
var stage = new PIXI.Container();


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
	stage.addChild(background);

	world = new World();
	world.firstGeneration(background.width, background.height);

	gameLoop();
}

function gameLoop() {
   	
    // render the stage
    renderer.render(stage);

    world.update();

    requestAnimationFrame(gameLoop);
}