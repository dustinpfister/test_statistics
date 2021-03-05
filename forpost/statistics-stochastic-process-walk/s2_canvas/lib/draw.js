var draw = (function(){
    var api = {};
    // draw background
    api.background = function(ctx, state, style){
        var canvas = state.canvasObj.canvas;
        ctx.fillStyle = style || 'black';
        ctx.fillRect(0,0, canvas.width, canvas.height);
    };
    // draw grid
    api.grid = function(ctx, state){
        var grid = state.grid;
        ctx.strokeStyle = 'white';
        ctx.fillStyle = 'orange';
        grid.cells.forEach(function(cell){
            ctx.beginPath();
            ctx.rect(cell.x, cell.y, grid.cellSize, grid.cellSize);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        });
    };
    // draw pool
    api.pool = function(ctx, state){
        var pool = state.pool,
        grid = state.grid;
        ctx.save();
        ctx.translate(grid.xOffset, grid.yOffset);
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'red';
        pool.objects.forEach(function(obj){
            var x = obj.x * grid.cellSize,
            y = obj.y * grid.cellSize;
            ctx.beginPath();
            ctx.rect(x, y, grid.cellSize, grid.cellSize);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        });
        ctx.restore();
    };
    // return public api
    return api;
}());
