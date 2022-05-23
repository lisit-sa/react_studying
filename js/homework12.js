"use strict";

let res = '';
const length = 6;
let t=1;

for(let i = 1; i <= length; i++) {
    let spaces = (' ').repeat(length - i);
    res += `${spaces}`;
    if(i===1) {
        t = 1;
    } else {
        t+=2;
    }
    res +='*'.repeat(t);

    res += '\n';
}
console.log(res)


const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result)
