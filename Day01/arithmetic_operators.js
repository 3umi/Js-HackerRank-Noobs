const getArea = require('./modules/math/getArea.js');
const getPerimeter = require('./modules/math/getPerimeter.js');

// Setting up a basic input reading mechanism.

'use strict';
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
   const length = +(readLine());
   const width = +(readLine());
    
   console.log(getArea(length, width));
   console.log(getPerimeter(length, width));
}