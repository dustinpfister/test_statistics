(function(){
    // main app state
    var state = {
        canvasObj : utils.createCanvas({
            width: 640,
            height: 480
        }),
        grid: grid.create({
            w: 7,
            h: 7,
            xOffset: 320 - 64 * 3.5,
            yOffset: 240 - 64 * 3.5,
            cellSize: 64
        }),
        pool: poolMod.create()
    };
    // app loop
    var loop = function(){
        // walk object(s)
        var obj = state.pool.objects[0];
        var delta = walk(obj, state.grid, state.pool);
        obj.x += delta.x;
        obj.y += delta.y;
        // draw
        var ctx = state.canvasObj.ctx;
        draw.background(ctx, state);
        draw.grid(ctx, state);
        draw.pool(ctx, state);
    };
    loop();
    // click canvas to call loop
    state.canvasObj.canvas.addEventListener('click', function(e){
        loop();
    });
}());
// random deltas
// console.log(walk());
// always 4 ( { x: -1, y: 0 } )
// console.log( walk({x:0, y:0, heading:1}, walk.wm.useHeading, [0, 4]) );
