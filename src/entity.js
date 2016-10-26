
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

  getSprite: function getSprite() {
    return this.sprite;
  },
  
  collisionLine: function collisionLine(x0, y0, m) {
    var xmin = this.getX();
    var xmax = xmin + this.getWidth();
    var ymin = this.getY();
    var ymax = ymin + this.getHeight();
    var y;

    for (var x = xmin; x <= xmax; x++) {
      y = m * (x - x0) + y0;
      if (y > ymin && y < ymax) {
        return ((y - y0) + (x - x0)) ** 0.5;
      }
    }

    return undefined;
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