
var coin = function(index){
    return (index || 0) % 2;
};

console.log( coin(0) ); // 0
console.log( coin(1) ); // 1
console.log( coin(2) ); // 0
console.log( coin(3) ); // 1
