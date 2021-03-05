var poolMod = (function(){
    var api = {};
    api.create = function(){
        var obj = {
            x: 0,
            y: 0
        };
        var pool = {
            objects: [obj]
        };
        return pool;
    };
    // return public api
    return api;
}());
