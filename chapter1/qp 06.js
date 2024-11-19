function multiplicationTable(number , upto = 10){
    for(let i = 1; i <= upto; i++){
        console.log(`${number} X ${i} = ${number * i}`);
    }
}

let number = 5;
multiplicationTable(number);


// test case


function test() {
    let input = 5;
    let expectedResult = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
    let testResult = multiplicationTable(input);
    if (JSON.stringify(testResult) == JSON.stringify(expectedResult)) {
      console.log("test passed");
    } else {
      console.log("test failed");
    }
  }
  test();