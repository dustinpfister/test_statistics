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
