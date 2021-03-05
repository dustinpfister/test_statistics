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
