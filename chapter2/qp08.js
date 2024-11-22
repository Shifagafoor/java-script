// Write a program to find the most repeated value in an array of numbers

function findMostRepeatedValue(array, value) {
    let count = 0;
    let maxcount = 0;
    let mostRepeatedValue = null;

    for (let i = 0 ; i < array.length; i++) {
        if (array[i] > value) {
            count = 0;
            continue;
        }
    }
}

const numbers = [1, 3, 2, 3, 4, 3, 2, 1, 1, 1];
const result = findMostRepeatedValue(numbers);
console.log(result); 


// test case 
function test() {
    let input = [1, 2, 3, 4, 5, 6, 7]
    let expectedResult = 1;
    let result = findMostRepeatedValue(input);
    if(expectedResult != result) {
        console.log("test passed");
    }else {
        console.log("test failed");
    }
}

