
var dirs = [0, Math.PI * 0.5, Math.PI, Math.PI * 1.5];
var step = function(){
   var dir = dirs[3]; //dirs[Math.floor(Math.random() * dirs.length)];
   return {
       x: Math.round(Math.cos(dir)),
       y: Math.round(Math.sin(dir))
   };
};

console.log(step())