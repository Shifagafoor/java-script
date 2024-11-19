function sumOfNaturalNumbers(x){
    if (x<1){
        return 0;
    }

    // formula

    return (x* (x + 1))/2;
}

let x=9;
let sum = sumOfNaturalNumbers(x);
console.log(sum);


// test case

function test() {
    let input = [9,6,8,2];
    let result =[45, 21, 36, 3];
    for(let i = 0; i<input.length; i++){
        let testResult = sumOfNaturalNumbers(input[i]);
        if(testResult === result[i]){
            console.log("test passed");
        }else{
            console.log("test failed")
        }
    }
}
test();