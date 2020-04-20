
var makeFreqTable = function (grades) {
    var table = {};
    grades.forEach(function (grade) {
        table[grade] = table[grade] === undefined ? 1 : table[grade] += 1;
    });
    // return array of stat objects with grade
    // and count properties, and sort by count
    return Object.keys(table).map(function (key) {
        return {
            grade: key,
            count: table[key]
        }
    }).sort(function (a, b) {
        if (a.count > b.count) {
            return -1;
        }
        if (a.count < b.count) {
            return 1;
        }
        return 0;
    });
};

var grades = ['c', 'a', 'f', 'f', 'b', 'c', 'f', 'a', 'f', 'd'];
var table = makeFreqTable(grades);

console.log(table);
