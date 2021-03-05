var walk = (function(){
    // default dir movement array
    // [0,1,2,3,4,5,6,7] => 8 dir movement
    // [0,2,4,6];        => 4 dir movement
    // [6];              => always go up
    var default_dirs = [0,2,4,6];
    // built in walk methods
    var walkMethods = {
        // random dir
        rnd: function(obj, dirs){
            return dirs[Math.floor(Math.random() * dirs.length)];
        },
        // use a heading prop of an object, or default to 0
        useHeading: function(obj, dirs){
            return obj.heading || 0;
        }
    };
    // Public API
    var api = function(obj, method, dirs){
        obj = obj || {x: 0, y: 0};
        dirs = dirs === undefined ? default_dirs : dirs;
        // call step method and get a d num (0-7)
        var d = method === undefined ? walkMethods.rnd(obj, dirs): method(obj, dirs);
        // convert to radian
        var radian = Math.PI * 2 / (dirs.length) * d;
        // use Sin And Cos to return delta values for x and y
        return {
            x: Math.round(Math.cos(radian)),
            y: Math.round(Math.sin(radian))
        };
    };
    // make walk methods public
    api.wm = walkMethods;
    // return public API
    return api;
}());

console.log( walk({x:0, y:0, heading:1}, walk.wm.useHeading) );

