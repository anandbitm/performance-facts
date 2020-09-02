(function (w) {
    var cache = {}

    function getCachedThing(key) {
        if (!(key in cache)) {
            // generate data
            cache[key] = (new Array(10000)).fill('genarate data');
        }
        return cache[key];
    }

    var i = 0;
    setInterval(function () {
        getCachedThing(i++);
    }, 1000);
    w.getCachedThing = getCachedThing
})(window);