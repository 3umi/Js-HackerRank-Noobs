'use strict';

// Setting up a basic input reading mechanism.
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

function vowelsAndConsonants(s) {
    let c;

    for (c of s)
    {
        if (['a', 'e', 'i', 'o', 'u'].includes(c))
            console.log(c);
    }
    for (c of s)
    {
        if (!['a', 'e', 'i', 'o', 'u'].includes(c))
            console.log(c);
    }
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}