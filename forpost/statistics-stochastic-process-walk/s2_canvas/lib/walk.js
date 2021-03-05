var walk = (function(){
    // default dir movement array
    // [0,1,2,3,4,5,6,7] => 8 dir movement
    // [0,2,4,6];        => 4 dir movement
    // [6];              => always go up
    var default_dirs = [0,2,4,6];
    // clamp deltas
    var clampDelta = function(obj, delta, grid){
        delta.x = obj.x + delta.x < 0 ? 0: delta.x;
        delta.x = obj.x + delta.x >= grid.w ? 0: delta.x;
        delta.y = obj.y + delta.y < 0 ? 0: delta.y;
        delta.y = obj.y + delta.y >= grid.h ? 0: delta.y;
        return delta;
    };
    // built in walk methods
    var walkMethods = {
        // random dir
        rnd: function(obj, grid, pool, dirs){
            return dirs[Math.floor(Math.random() * dirs.length)];
        },
        // use a heading prop of an object, or default to 0
        useHeading: function(obj, grid, pool, dirs){
            return dirs[obj.heading] || 0;
        }
    };
    // Public API
    var api = function(obj, grid, pool, method, dirs){
        obj = obj || {x: 0, y: 0};
        grid = grid || {};
        pool = pool || {};
        dirs = dirs === undefined ? default_dirs : dirs;
        // call step method and get a d num (0-7)
        var d = method === undefined ? walkMethods.rnd(obj, grid, pool, dirs): method(obj, grid, pool, dirs);
        // convert to radian
        var radian = Math.PI * 2 / 8 * d;
        // use Sin And Cos to return delta values for x and y
        var delta = {
            x: Math.round(Math.cos(radian)),
            y: Math.round(Math.sin(radian))
        };
        // clamp deltas that will move an object out of a grid
        delta = clampDelta(obj, delta, grid);
        return delta;
    };
    // make walk methods public
    api.wm = walkMethods;
    // return public API
    return api;
}());
