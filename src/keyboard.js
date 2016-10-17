var keyCodes = {enter: 13, shift: 16, escape: 27, space: 32, left: 37, up: 38, right: 39, down: 40, A: 65, B: 66, C: 67, D: 68, E: 69, F: 70, G: 71, H: 72, I: 73, J: 74, K: 75, L: 76, M: 77, N: 78, O: 79, P: 80, Q: 81, R: 82, S: 83, T: 84, U: 85, V: 86, W: 87, X: 88, Y: 89, Z: 90, a: 91, b: 92, c: 93, d: 94, e: 95, f: 96, g: 97, h: 98, i: 99, j: 100, k: 101, l: 102, m: 103, n: 104, o: 105, p: 106, q: 107, r: 108, s: 109, t: 110, u: 111, v: 112, w: 113, x: 114, y: 115, z: 116};

var _keysPressed = new Set();

window.addEventListener(
  "keydown", function(event) {
    _keysPressed.add(event.keyCode)
  }, false
);
window.addEventListener(
  "keyup", function(event) {
    _keysPressed.delete(event.keyCode)
  }, false
);

function keySetup(event, keyCode, func, shouldRepeat) {
  var key = {};
  key.code = keyCode;
  key.func = func;
  key.isActive = false;
  key.activationHandler = function activationHandler(event) {
    if (event.keyCode === key.code) {
      if (shouldRepeat || !key.isActive) {
        key.func();
      }
      key.isActive = true;
      event.preventDefault();
    }
  };
  
  key.unActiveHandler = function unActiveHandler(event) {
    if (event.keyCode === key.code) {
      key.isActive = false;
      event.preventDefault();
    }
  };
  window.addEventListener(
    event, key.activationHandler.bind(key), false
  );
  window.addEventListener(
    event == 'keydown' ? 'keyup' : 'keydown', key.unActiveHandler.bind(key), false
  );
}

var keyboard = {
  onDown: function onDown(key, func, shouldRepeat) {
    shouldRepeat = shouldRepeat || false;
    keySetup('keydown', keyCodes[key], func, shouldRepeat);
  },
  
  onUp: function onUp(key, func, shouldRepeat) {
    shouldRepeat = shouldRepeat || false;
    keySetup('keyup', keyCodes[key], func, shouldRepeat);
  },
  
  isDown: function isDown(key) {return _keysPressed.has(keyCodes[key]);},
  isUp: function isUp(key) {return !_keysPressed.has(keyCodes[key]);}
};
