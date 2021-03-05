
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

var grid  = (function(){
    // create cells helper
    var createCells = function(grid){
        var cells = [];
        var i = 0,
        obj,
        len = grid.w * grid.h;
        while(i < len){
            obj = {
                i : i,
                x : utils.mod(i, grid.w),
                y : Math.floor(i / grid.w)
            };
            cells.push(obj);
            i += 1;
        }
        return cells;
    };
    var api = {};
    api.create = function(opt){
        opt = opt || {};
        var grid = {
            w : opt.w || 5,
            h : opt.h || 5,
            cells: []
        };
        grid.cells = createCells(grid);
        return grid;
    };
    // return public api
    return api;
}());

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