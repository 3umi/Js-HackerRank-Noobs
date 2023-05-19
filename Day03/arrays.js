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

/**
*   To find the SecondLargest element in the array
*   I searched for the Largest and remove it
*   and researched for the Largest which is
*   the SecondLargest in this case xD .
**/
function getSecondLargest(nums) {
    let     SecondLargest;
    // Used to find the Largest element.
    const   Largest = Math.max(...nums);

    // Used to remove all the elements with value=Largest.
    nums = nums.filter(element => element !== Largest);
    // Used to research for the Largest aka SecondLargest.
    SecondLargest = Math.max(...nums);
    return (SecondLargest);
}


function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}