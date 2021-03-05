var walk = (function(){
    // default dirs
    var dirs = [0, Math.PI * 0.5, Math.PI, Math.PI * 1.5];
    // built in step methods
    var stepMethods = {
        random: function(){
            return dirs[Math.floor(Math.random() * dirs.length)];
        }
    };
    // Public API
    var api = function(method){
        var dir = method === undefined ? stepMethods.random(): method(); 
        return {
            x: Math.round(Math.cos(dir)),
            y: Math.round(Math.sin(dir))
        };
    };
    // return public API
    return api;
}());
console.log(walk());