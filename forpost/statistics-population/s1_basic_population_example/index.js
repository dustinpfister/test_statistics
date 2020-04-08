let genRandomPopulation = (popSize) => {
    popSize = popSize === undefined ? 100 : popSize;
    let pop = [],
    i = popSize;
    while (i--) {
        pop.push(Math.floor(Math.random() * 6));
    }
};

let getMean = (data) => {
    return data.reduce(function (acc, n) {
        return acc + n;
    }) / data.length;
};

let pop = genRandomPopulation();


