var test = function(dieCount){
    return 1 / Math.pow(6, dieCount) * 100;
};
console.log( test(2).toFixed(1)); // 2.8