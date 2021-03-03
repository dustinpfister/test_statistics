
var dirs = [0, 1.57]
var step = function(){
   var dir = dirs[Math.floor(Math.random() * dirs.length)];
   return {
       x: Math.round(Math.cos(dir)),
       y: Math.round(Math.sin(dir))
   };
};

console.log(step())