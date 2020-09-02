const express = require('express');
const app = express();
var cache = {}, i=0;

function getCachedThing(key) {
    if (!(key in cache)) {
        // generate data
        cache[key] = (new Array(10000)).fill('genarate data');
    }
    return cache[key];
};

app.get('/', function(req, res){
    getCachedThing(i++);
    res.send('yoo');
});

app.listen(5050, function(){
    console.log('server started at 5050');
});