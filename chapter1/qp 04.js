function oddOrEven(number) {
    if (number % 2 === 0) {
        console.log(number + " is even..!" );
    } else {
        console.log( number + " is odd..");
    }
}

oddOrEven(20);
oddOrEven(13);


// test case

function test(){
    let input = [22, 55 , 12 ,15];
    let result = ["22 is even" , "55 is odd", "12 is even" , "15 is odd"];

    for(let i = 0; i<input.length;i++){
        let testResult = oddOrEven(input[i]);
        if(testResult === result[i]){
            console.log("test passed");
        }else{
            console.log("test failed")
        }
    }
}

test();