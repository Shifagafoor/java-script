// Check the given number is positive, negative or zero

function positiveNegative(num) {
  let num = prompt("Enter a number:");
  num = Number(num); 

  if (num > 0) {
      return "The given number is positive";
  } else if (num < 0) {
      return "The given number is negative";
  } else {
      return "The number is zero";
  }
}

console.log(positiveNegative());


// test case

function test() {
    let input = [1, 2, 8, -9];
    let result = ["The given number is positive", "The given number is positive", "The given number is positive", "The given number is negative"];

    for(i = 0; i< input.length; i++) {
        let testResult = positiveNegative(input[i]);
        if(testResult === result[i]) {
            console.log("test passed");
        }else{
            console.log("test failed")
        }
    }
}
test();
