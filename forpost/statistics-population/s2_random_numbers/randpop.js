// generate a 'random' population
let genRandomPopulation = (popSize) => {
    popSize = popSize === undefined ? 100 : popSize;
    let pop = [],
    i = popSize;
    while (i--) {
        pop.push(Math.floor(Math.random() * 6) + 1);
    }
    return pop;
};

// get the mean of the given population or sample
let getMean = (data) => {
    return data.reduce(function (acc, n) {
        return acc + n;
    }) / data.length;
};

let pop = genRandomPopulation(100);

let mean = getMean(pop);

console.log(mean);
