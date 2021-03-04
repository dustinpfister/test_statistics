
var defaultOres = [
    { type: 'iron', chance: 1 },
    { type: 'copper', chance: 0.1 },
    { type: 'gold', chance: 0.01 }
];

var mineMethods = {
    singleRandom: function(ore, count){
        return Math.floor( Math.random() * ore.chance );
    }
};

var mine = function(ores, count, mineMethod){
    ores = ores === undefined ? defaultOres : ores;
    count = count === undefined ? 1 : count;
    mineMethod = mineMethod === undefined ? mineMethods.singleRandom : mineMethod;
    return ores.map(function(oreObj){
        var amount = mineMethod(oreObj, count);
        return {
            type: oreObj.type,
            amount: amount
        };
    });
};

console.log( mine() );
