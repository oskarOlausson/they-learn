
var Entity = Class({
  constructor: function constructor(image, x, y) {
    this.sprite = new PIXI.Sprite(PIXI.loader.resources[image].texture);
    stage.addChild(this.sprite);
    this.radius = (this.sprite.width + this.sprite.height) / 2;
    this.setX(x);
    this.setY(y);
  },
  
  collision: function collision(x, y, radius) {
    return ((x - this.getX()) ** 2 + (y - this.getY()) ** 2) ** .5 < radius + this.radius;
  },
  
  getX: function getX() {
    return this.sprite.position.x;
  },

  getY: function getY() {
    return this.sprite.position.y;
  },
  
  setX: function setX(x) {
    this.sprite.position.x = x;
  },

  setY: function setY(y) {
    this.sprite.position.y = y;
  },
});