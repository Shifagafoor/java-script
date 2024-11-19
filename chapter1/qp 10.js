function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false; 
        }
    }
    return true; 
}

const number = 29; 
if (isPrime(number)) {
    console.log(`${number} is a prime number.`);
} else {
    console.log(`${number} is not a prime number.`);
}

// test case

function test() {
    let input = [2 , 14 , 51 , 44 , 29];
    let result = [true , false , false , true];
    for(let i=0; i<input.length;i++){
        let testResult = prime(input[i])
        if(testResult === result[i]){
            console.log("test passed");
        }else{
            console.log("test failed")
        }
    }
}