function fibonacci(n) {
    
    if (n === 1) {
        return 0;
        
        
    }
    
    if (n ===2) {
        
        return 1;
    }
    
    
    var fibPrev = 0;
    var fibNext = 1;
    var nElement = 0;
    
    for(var i = 2; i <=n; i++) {
        
        nElement = fibPrev + fibNext;
        fibPrev = fibNext;
        fibNext = nElement;
    }
    
    
    
    return nElement;
    
    
}

console.log(fibonacci(4));