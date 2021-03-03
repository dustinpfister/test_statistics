
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

console.log( getPers( trial(1) ) );
console.log( getPers( trial(2) ) );
console.log( getPers( trial(3) ) );
console.log( getPers( trial(4) ) );
