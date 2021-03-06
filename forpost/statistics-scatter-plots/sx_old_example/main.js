var data = [12, 24, 38, 20, 40, 42, 57]
 
var scatter = (function() {
 
  var api = {
 
    points: []
 
  };
 
  api.plotRand = function(count, bx) {
 
    count = count || 10;
    bx = bx || {};
 
    bx.x = bx.x || 10;
    bx.y = bx.y || 10;
    bx.w = bx.w || 310;
    bx.h = bx.h || 220;
 
    this.points = [];
 
    var i = count;
 
    while (i--) {
 
      this.points.push({
 
        x: Math.random() * (bx.w - bx.x) + bx.x,
        y: Math.random() * (bx.h - bx.y) + bx.y
 
      });
 
    }
 
  };
 
  // a plot data method
  api.plotData = function(data, func) {
 
    api.points = [];
 
    data.forEach(function(n, i) {
 
      var pt = func(n, i);
 
      api.points.push(pt);
 
    });
 
  };
 
  return api;
 
}());
 
// start by plotting some random numbers
scatter.plotRand();
 
// and of course I need a way to render the scatter plot
var canvas = document.createElement('canvas'),
ctx = canvas.getContext('2d');
document.getElementById('canvas-app').appendChild(canvas);
 
canvas.width = 320;
canvas.height = 240;
 
ctx.fillStyle = '#afafaf';
ctx.fillRect(0, 0, canvas.width, canvas.height);
 
ctx.strokeStyle = '#000000';
scatter.points.forEach(function(pt) {
 
  ctx.beginPath();
  ctx.arc(pt.x, pt.y, 4, 0, Math.PI * 2);
  ctx.closePath();
  ctx.stroke();
 
});
 
