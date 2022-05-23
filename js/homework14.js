"use strict";

const family = ['Peter', 'Ann', 'Alex', 'Linda'];
let str = '';

function showFamily(arr) {
    if(arr.length !== 0) {
        let familyStr = arr.join(' ')
        str += `Семья состоит из: ${familyStr}`;
    } else {
        str += `Семья пуста`;
    }
    return str;
}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr = arr.map(answer =>  answer.toLowerCase()).join('\n');

    return arr;
}



