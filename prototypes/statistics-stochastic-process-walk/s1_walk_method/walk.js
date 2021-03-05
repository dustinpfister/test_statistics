var walk = (function(){
    // default dir movement array
    // [0,1,2,3,4,5,6,7] => 8 dir movement
    // [0,2,4,6];        => 4 dir movement
    // [6];              => always go up
    var default_dirs = [0,2,4,6];
    // built in step methods
    var stepMethods = {
        random: function(dirs){
            return dirs[Math.floor(Math.random() * dirs.length)];
        }
    };
    // Public API
    var api = function(method, dirs){
        dirs = dirs === undefined ? default_dirs : dirs;
        // call step method and get a d num (0-7)
        var d = method === undefined ? stepMethods.random(dirs): method(dirs);
        // convert to radian
        var radian = Math.PI * 2 / 8 * d;
        // use Sin And Cos to return delta values for x and y
        return {
            x: Math.round(Math.cos(radian)),
            y: Math.round(Math.sin(radian))
        };
    };
    // return public API
    return api;
}());

console.log(walk());