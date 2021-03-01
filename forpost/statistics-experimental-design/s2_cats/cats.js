let tools = (function(){

    let api = {};

    let parseOptions = (opt) => {
        opt = opt || {};
        opt.WC = opt.WC === undefined ? 500 : opt.WC;
        opt.CPTWPD = opt.CPTWPD === undefined ? 1 : opt.CPTWPD;
        opt.traffic = opt.traffic === undefined ? 0 : opt.traffic;
        opt.days = opt.days === undefined ? 28 : opt.days;
        return opt;
    };

    api.getCPTWPD = (opt) => {
        let a = parseOptions(opt);
        return a.traffic / a.days / a.WC * 1000;
    };

    api.getTraffic = (opt) => {
        let a = parseOptions(opt);
        return a.WC * (a.CPTWPD / 1000) * a.days;
    };

    return api;

}());

// site wide
console.log( 'site wide: ', tools.getCPTWPD({ WC: 702332, traffic: 18000 }) );
// 0.9153180303006881

// lodash
console.log( 'lodash: ', tools.getCPTWPD({ WC: 64449, traffic: 10200 }) );
// 5.652309799775238

// statistics
console.log( 'statistics: ', tools.getCPTWPD({ WC: 1870, traffic: 101 }) );
// 1.9289533995416348

// canvas
console.log( 'canvas: ', tools.getCPTWPD({ WC: 102411, traffic: 901 }) );
// 0.3142101085681365

// js
console.log( 'js: ', tools.getCPTWPD({ WC: 153472, traffic: 714 }) );
// 0.16615408673894913
