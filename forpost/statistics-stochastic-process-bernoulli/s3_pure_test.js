
var coin = function(index){
    return index % 2;
};

var trial = function(count){
    var i = 0,
    result = [0, 0],
    len = count || 1;
    while(i < len){
        var sideIndex = coin(i);
        result[sideIndex] += 1;
        i += 1;
    }
    return result;
};

var getPers = function(result){
    var count = result[0] + result[1];
    return result.map(function(n){
        return n / count * 100;
    });
};

console.log( getPers( trial(1) ) ); // [ 100, 0 ]
console.log( getPers( trial(2) ) ); // [ 50, 50 ]
console.log( getPers( trial(3) ) ); // [ 66.66666666666666, 33.33333333333333 ]
console.log( getPers( trial(4) ) ); // [ 50, 50 ]
