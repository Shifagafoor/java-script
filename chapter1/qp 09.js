function arrayOfNumber(Number){
    if (Number.length === 0) return 0;
    const totalSum = Number.reduce((a,b) => a + b, 0 );
    return totalSum / Number.length;
}

const array = [1, 2, 3, 4, 5];
const averageValue = arrayOfNumber(array);
console.log("Average:", averageValue);


// test case

function test() {
    let input = [3 , 4 ,7 ,8 , 9];
    let expectedResult = 6.2;
    let result = arrayOfNumber(input);

    if(expectedResult === result) {
        console.log("test passed");
    }else{
        console.log("test failed")
    }
}

test();