function co(generatorcallback) {
    var g=generatorcallback();
    function next(preResult) {
        var iterator =g.next(preResult);
        if(iterator.done){return iterator.value};
        iterator.value.then(data=>next(data),data=>{data})
    }
    next()
}