"use strict";

let res = '';
const length = 7;

for(let i = 1; i < length; i++) {
    for(let j = 0; j < i; j++) {
        res += '*'
    }
    res += '\n'
}
console.log(res)