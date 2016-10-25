
var Entity = Class({
  constructor: function constructor(image, x, y) {
    this.container = new PIXI.Container();
    this.sprite = new PIXI.Sprite(PIXI.loader.resources[image].texture);
    this.container.addChild(this.sprite);
    STAGE.addChild(this.container);
    this.radius = (this.sprite.width + this.sprite.height) / 4;
    this.setX(x);
    this.setY(y);
  },

  getContainer: function getContainer() {
    return this.container;
  },

  
  collision: function collision(x, y, radius) {
    radius = radius || 0;
    return ((x - this.getX()) ** 2 + (y - this.getY()) ** 2) ** .5 < radius + this.getRadius();
  },

  getRadius: function getRadius() {
    return this.radius;
  },

  getWidth: function getWidth() {
    return this.sprite.width;
  },

  getHeight: function getHeight() {
    return this.sprite.height;
  },
  
  getX: function getX() {
    return this.container.x;
  },

  getY: function getY() {
    return this.container.y;
  },
  
  setX: function setX(x) {
    this.container.x = x;
  },

  setY: function setY(y) {
    this.container.y = y;
  },

  addX: function addX(dx){
    this.container.x += dx;
  },

  addY: function addY(dy){
    this.container.y += dy;
  },

});