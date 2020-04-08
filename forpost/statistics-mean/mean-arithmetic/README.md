# Arithmetic mean

let data = [1,2,3,4];

let mean = data.reduce(function(acc,n){

   return acc + n;

}) / data.length;

console.log(mean); // 2.5