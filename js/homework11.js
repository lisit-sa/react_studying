"use strict";

function fib(num) {
    let arr = []
    let a = 0;
    let b = 0;
    if(typeof(num) !== 'number' || !Number.isInteger(num)) {
        arr = ['']
    } else {
        for(let k = 1; k <= num; k++) {
            let c = a + b;
                if(k === 1) {
                    a = 1
                } else {
                    a = b;
                    b = c;   
                }
                arr.push(c)
        }
    }
    
    return arr.join(' ')
}
console.log(fib(7))

