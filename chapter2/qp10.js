function isPerfectSquare(num) {
    if (num < 0) {
        return false;
    }

    const sqrt = Math.sqrt(num);
    return sqrt * sqrt === num;
}

const number = 16;
if(isPerfectSquare(number)) {
    console.log(`${number} is a perfect square..`);
}else {
    console.log(`${number} uis not a perfect square..!`);
}



// test case

function test() {
    let input = [16, 25, 36, 49, 64];
    let result = [true , true , true , true, true];

    for(let i = 0; i < input.length; i++) {
        let testResult = isPerfectSquare(input[i])
        if(testResult === true) {
            console.log("test passed");
        } else{
            console.log("test failed")
        }
    }
}