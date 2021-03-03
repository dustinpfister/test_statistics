
// sample space ( omega (Ω) )
var sample = [1, 2, 3, 4, 5, 6]; 

// event space ( sigma (Σ) )
var eventSpace = [
    function(n){ return n === 1; },
    function(n){ return n === 2; },
    function(n){ return n === 3; },
    function(n){ return n === 4; },
    function(n){ return n === 5; },
    function(n){ return n === 6; },
    function(n){ return n % 2 === 0; }, // is even
    function(n){ return !(n % 2 === 0); }   // is odd
];
