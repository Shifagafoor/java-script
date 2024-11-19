function factorialName(n) {
    if (n < 0) {
        return "factorial is not defined";
    }

    return n === 0 ||n === 1? 1 : n * factorialName(n-1);
}

console.log(factorialName(5));


// test case

function test(){
    let input = [5 , 7, 12, 9];
    let result = [120, 5040, 479001600, 362880];
    for(let i=0; i<input.length; i++) {
        let testResult = factorialName(input[i])
        if(testResult === result[i]){
            console.log("test passed");
        }else{
            console.log("test failed")
        }
    }
}

test();