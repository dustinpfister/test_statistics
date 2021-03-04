// The mine function
var mine = (function(){
    // built in ores
    var defaultOres = [
        { type: 'iron', chance: 1 },
        { type: 'copper', chance: 0.1 },
        { type: 'gold', chance: 0.01 }
    ];
    // build in mine methods
    var mineMethods = {
        singleRandom: function(ore, count){
            var roll = Math.random();
            if(roll <= ore.chance){
                return count;
            }
            return 0;
        },
        singlePure: function(ore, count){
            return Math.round(ore.chance * count);
        }
    };
    // Main mine function
    var api = function(count, mineMethod, ores){
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
    // make mineMethods public
    api.mineMethods = mineMethods;
    // return public API
    return api;
}());

var i = 0,
mineCount = 1000,
onHand = {
    iron: 0,
    copper: 0,
    gold: 0
};

while(i < mineCount){
    var mineResult = mine(1, mine.mineMethods.singleRandom);
    mineResult.forEach(function(oreObj){
        onHand[oreObj.type] += oreObj.amount;
    });
    i += 1;
}

console.log( mine(mineCount, mine.mineMethods.singlePure) );
// [ { type: 'iron', amount: 1000 },
//   { type: 'copper', amount: 100 },
//   { type: 'gold', amount: 10 } ]

// random values that should be around the result of using the pure function
console.log( onHand );
