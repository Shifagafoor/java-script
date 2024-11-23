// Write a program to calculate the area of a triangle given its base and height.

function calculateTriangleArea(base, height) {
    if (base <= 0 || height <= 0) {
        return "Base and height must be positive numbers";
    } 
    const area = (base * height) / 2;
    return area;
}

const base = 5;
const height = 10;
const area = calculateTriangleArea(base, height);
console.log(`The area of the triangle with base ${base} and height ${height} is: ${area}`);


// test case

function test() {
    let inputBase = [0, 5, 10];
    let inputHeight = [0, 5, 10];
    let expectedResult = ["Base and height must be positive numbers", 12.5, 50];

    for (let i = 0; i < inputBase.length; i++) { 
        let testResult = calculateTriangleArea(inputBase[i], inputHeight[i]);
        if (testResult === expectedResult[i]) { 
            console.log("Test passed");
        } else {
            console.log("Test failed");
            console.log(`Expected: ${expectedResult[i]}, Actual: ${testResult}`);
        }
    } 
}


test();