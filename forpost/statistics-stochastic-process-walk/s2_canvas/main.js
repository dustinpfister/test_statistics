
var draw = (function(){
    var api = {};
    // draw background
    api.background = function(ctx, state, style){
        var canvas = state.canvasObj.canvas;
        ctx.fillStyle = style || 'black';
        ctx.fillRect(0,0, canvas.width, canvas.height);
    };
    // return public api
    return api;
}());

var state = {
    canvasObj : utils.createCanvas({
        width: 640,
        height: 480
    })
};

// draw
var ctx = state.canvasObj.ctx;
draw.background(ctx, state);

// random deltas
console.log(walk());
// always 4 ( { x: -1, y: 0 } )
console.log( walk({x:0, y:0, heading:1}, walk.wm.useHeading, [0, 4]) );