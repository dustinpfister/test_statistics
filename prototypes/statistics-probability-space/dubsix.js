
var die = function(){
    return 1 + Math.floor(Math.random() * 6);
};

var i = 0,
len = 100,
dubSix = 0;
while(i < len){
    d1 = die();
    d2 = die();
    if(d1 === 6 && d2 === 6){
        dubSix += 1;
    }
    i += 1;
}
console.log( dubSix / len);