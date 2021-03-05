var poolMod = (function(){
    var api = {};
    api.create = function(){
        var obj = {
            x: 3,
            y: 3
        };
        var pool = {
            objects: [obj]
        };
        return pool;
    };
    // return public api
    return api;
}());
