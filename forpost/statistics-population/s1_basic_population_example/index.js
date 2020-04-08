let getMean = (data) => {
    return data.reduce(function (acc, n) {
        return acc + n;
    }) / data.length;
};

let pop = [3,6,2,5,2,6,6,5,4,6];
let mean = getMean(pop);

console.log(mean); // 4.5

