var bugs = (function() {

  var api = {};

  // initilize
  api.init = function(options) {

    options = options || {};

    this.count = options.count || 100;
    this.tBase = options.tBase || 1000;
    this.tRange = options.tRange || 2000;
    this.bugs = [];
    this.st = new Date();

    var i = 0;

    while (i < this.count) {

      this.bugs.push({

        dieAt: Math.random() * this.tRange + this.tBase

      });

      i += 1;

    }

  };
  
  // get a count of how many died at a given time stamp, and range
  api.diedAtCount = function(time,range){
  
      // dfault time at the base + 1/2 range
      time = time || Math.floor(this.tBase + this.tRange / 2);
  
      // default range to 10ms
      range = range === undefined ? 10 : range;
  
      return this.bugs.reduce(function(acc,bug){    
          
          if(bug.dieAt >= time-range && bug.dieAt <= time + range){
          
              return acc += 1;
          
          }
          
          return acc;
      
      },0);
  
  };
  
  api.diedAtPer = function(time,range){
  
        // dfault time at the base + 1/2 range
      time = time || Math.floor(this.tBase + this.tRange / 2);
  
      // default range to 10ms
      range = range === undefined ? 10 : range;
      
      var died = this.diedAtCount(time,range);
      
      return died / this.count;
  
  };

  api.init();

  return api;

}());

// large count
bugs.init({

   count : 10000

});
