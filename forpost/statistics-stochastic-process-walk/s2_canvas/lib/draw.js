var draw = (function(){
    var api = {};
    // draw background
    api.background = function(ctx, state, style){
        var canvas = state.canvasObj.canvas;
        ctx.fillStyle = style || 'black';
        ctx.fillRect(0,0, canvas.width, canvas.height);
    };
    api.grid = function(ctx, state){
        var grid = state.grid;
        ctx.strokeStyle = 'white';
        ctx.fillStyle = 'orange';
        grid.cells.forEach(function(cell){
            var x = grid.xOffset + cell.x * grid.cellSize,
            y = grid.yOffset + cell.y * grid.cellSize;
            ctx.beginPath();
            ctx.rect(x, y, grid.cellSize, grid.cellSize);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        });
    };
    // return public api
    return api;
}());
