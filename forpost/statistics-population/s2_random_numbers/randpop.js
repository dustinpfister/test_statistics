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
let getMean = (pop) => {
    return pop.reduce(function (acc, n) {
        return acc + n;
    }) / pop.length;
};

let getSample = (pop, si, sampSize) => {
    let len = pop.length;
    sampSize = sampSize === undefined ? len : sampSize;
    si = si === undefined ? len - sampSize : si;
    let ei = si + sampSize;
    return pop.slice(si, ei);
}

let pop = genRandomPopulation(100000);

console.log(getMean( getSample(pop, 0, 10000) ));
console.log(getMean( getSample(pop, 250, 10000) ));
console.log(getMean( getSample(pop, 3500, 10000) ));
console.log(getMean(pop));

/*
Example output
3.5104
3.5109
3.5012
3.49523
*/