
var makeFreqTable = function (grades) {
    var table = {};
    grades.forEach(function (grade) {
        table[grade] = table[grade] === undefined ? 1 : table[grade] += 1;
    });
    return table;
};

var grades = ['c', 'a', 'f', 'f', 'b', 'c', 'f', 'a', 'f', 'd'];
var table = makeFreqTable(grades);

console.log(table);
