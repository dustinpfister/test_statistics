// generate a population
var genPopulation = (function () {

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

    return function (opt) {

        opt = parseOptions(opt);

    }

});
