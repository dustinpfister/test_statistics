
var dirs = [0, Math.PI * 0.5, Math.PI, Math.PI * 1.5];

var stepMethods = {
    random: function(){
        return dirs[Math.floor(Math.random() * dirs.length)];
    }
};

var step = function(method){
   var dir = method === undefined ? stepMethods.random(): method(); 
   return {
       x: Math.round(Math.cos(dir)),
       y: Math.round(Math.sin(dir))
   };
};

console.log(step())