// generate a population
var genPopulation = (function () {

    // parse an options arguments object
    var parseOptions = function (opt) {
        opt = opt || {};
        opt.pop = opt.pop || 1000;
        opt.ageGroups = opt.ageGroups || [{
                    range: [0, 19],
                    per: 0.30
                }, {
                    range: [20, 39],
                    per: 0.40
                }, {
                    range: [40, 59],
                    per: 0.20
                }, {
                    range: [60, 99],
                    per: 0.10
                }
            ];
        return opt;
    };

    var getAgeGroup = function (opt, roll) {
        var i = opt.ageGroups.length,
        group,
        per = 0;
        while (i--) {
            group = opt.ageGroups[i];
            per += group.per;
            if (roll < per) {
                return group;
            }
        }
        return group;
    };

    var generateObjects = function (opt) {
        opt = parseOptions(opt);
        var i = opt.pop,
        pop = [],
        ag;
        while (i--) {
            ag = getAgeGroup(opt, Math.random());
            pop.push({
                age: Math.floor(ag.range[0] + Math.random() * (ag.range[1] - ag.range[0])),
                sick: false,
                alive: true
            });
        }

    };

    // public method
    return function (opt) {
        return generateObjects(opt);
    }

});
