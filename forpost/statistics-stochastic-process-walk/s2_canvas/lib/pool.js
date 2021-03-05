var poolMod = (function(){
    var api = {};
    api.create = function(){
        var obj = {
            x: 2,
            y: 2
        };
        var pool = {
            objects: [obj]
        };
        return pool;
    };
    // return public api
    return api;
}());
