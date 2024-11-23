// Write a program that approximates the derivative of f(x)=x^n

function f(x) {
    return Math.pow(x, n);
}

function approximateDerivative(x, n, h = 1e-10) {
    return (f(x + h, n) - f(x , n)) / h;
}

const n = 3;
const x = 2;
const derivativeApproximation = approximateDerivative(x, n);

console.log(`The approximate derivative of f(x) = x^${n} at x = ${x} is : ${derivativeApproximation}`);


// test case

function test() {
    let inputx = [2 , 3 , 4]
    let inputn = [3 , 2 , 1]
    let result = [6 , 6 , 2]

    for(let i = 0; i < inputx.length; i++) {
        let testResult = approximateDerivative(inputx[i], inputn[i]);
        if(testResult === result[i]) {
            console.log("test passed");
        }else{
            console.log("test failed");
            console.log(`expected : ${result[i]}, actual: ${testResult}`);
        }
    }
}
test();
