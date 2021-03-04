
var defaultOres = [
    { type: 'iron', chance: 1 },
    { type: 'copper', chance: 0.1 },
    { type: 'gold', chance: 0.01 }
];

var mineMethods = {
    singleRandom: function(ore, count){
        var roll = Math.random();
        if(roll <= ore.chance){
            return count;
        }
        return 0;
    }
};

var mine = function(count, ores, mineMethod){
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

var i = 0,
mineCount = 1000,
onHand = {
    iron: 0,
    copper: 0,
    gold: 0
};

while(i < mineCount){
    var mineResult = mine(1);
    mineResult.forEach(function(oreObj){
        onHand[oreObj.type] += oreObj.amount;
    });
    i += 1;
}

console.log(onHand);