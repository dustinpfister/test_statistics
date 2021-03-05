var poolMod = (function(){
    var api = {};
    api.create = function(opt){
        opt = opt || {};
        var obj = {
            x: opt.sx || 0,
            y: opt.sy || 0
        };
        var pool = {
            objects: [obj]
        };
        return pool;
    };
    // return public api
    return api;
}());
