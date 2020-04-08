//var data = [727.7,1086.5,1091,1361.3,1490.5,1956.1];
//var data = [5,4,5,7,4,1,8];
//var data = [7,20,98,13,43,88,72];
//var data = [50, 70, 30];

// Arithmetic mean
let getMean = function (data) {
    return data.reduce(function (a, b) {
        return Number(a) + Number(b);
    }) / data.length;
};

// Standard deviation
let getSD = function (data) {
    let m = getMean(data);
    return Math.sqrt(data.reduce(function (sq, n) {
            return sq + Math.pow(n - m, 2);
        }, 0) / (data.length - 1));
};

if (require.main === module) {

    let data = process.argv[2];

    if (data) {

        // split the string into an array
        data = data.split(',');

        // log standard deviation
        console.log(getSD(data));

    } else {

        console.log('must give data string.');

    }

} else {

    // export getSD
    module.exports = getSD;

}
