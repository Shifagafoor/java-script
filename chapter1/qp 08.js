const Number = [1 , 3 , 5 , 2 , 8 , 4];

let max = Number[0];
Number.forEach(num => {
    if(num > max){
        max = num;
    }
});

console.log(max);

// test case

function test() {
    let input = [1, 4, 6, 34, 12];
    let expectedResult = 34;
    let result = Number(input);

    if(result === expectedResult) {
        console.log("test passed");
    }else {
        console.log("test failed")
    }
}

test();