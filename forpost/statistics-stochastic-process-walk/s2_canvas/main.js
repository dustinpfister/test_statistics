var state = {
    canvasObj : utils.createCanvas({
        width: 640,
        height: 480
    }),
    grid: grid.create()
};

// draw
var ctx = state.canvasObj.ctx;
draw.background(ctx, state);

console.log(state);

// random deltas
console.log(walk());
// always 4 ( { x: -1, y: 0 } )
console.log( walk({x:0, y:0, heading:1}, walk.wm.useHeading, [0, 4]) );