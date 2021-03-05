
var poolMod = (function(){
    var api = {};
    api.create = function(){
        var obj = {
            x: 2,
            y: 2
        };
        var pool = {
            objects: [obj]
        };
        return pool;
    };
    // return public api
    return api;
}());



var state = {
    canvasObj : utils.createCanvas({
        width: 640,
        height: 480
    }),
    grid: grid.create(),
    pool: poolMod.create()
};

// draw
var ctx = state.canvasObj.ctx;
draw.background(ctx, state);
draw.grid(ctx, state);
draw.pool(ctx, state);

console.log(state);

// random deltas
console.log(walk());
// always 4 ( { x: -1, y: 0 } )
console.log( walk({x:0, y:0, heading:1}, walk.wm.useHeading, [0, 4]) );