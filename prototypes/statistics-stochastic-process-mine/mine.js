
var ores = [
    { type: 'iron', chance: 1 },
    { type: 'copper': chance: 0.1 },
    { type: 'gold': chance: 0.01 }
];


var mine = function(ores, count){
    count = count === undefined ? 1 : count;
    return ores.map(function(oreObj){
        
        return {
            type: oreObj.type,
            count: count
        };
    });
};