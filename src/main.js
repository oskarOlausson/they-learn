var renderer = PIXI.autoDetectRenderer(800, 600);
document.body.appendChild(renderer.view);

// create the root of the scene graph
var stage = new PIXI.Container();




var loader = PIXI.loader
.add('button','assets/images/player.png')
.add('background','assets/images/background.png')
.add('background','assets/images/enemy.png')
.add('background','assets/images/player.png')
.add('background','assets/images/player.png')
.once('complete',function(loader, resources) {
	init();
}).load();


function init() {
	//var button = new PIXI.Sprite(PIXI.loader.resources['button'].texture);
	//stage.addChild(button);
	gameLoop();
}

function gameLoop() {
   	
    // render the stage
    renderer.render(stage);

    requestAnimationFrame(gameLoop);
}