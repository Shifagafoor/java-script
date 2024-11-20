function remainderNumber(num1,num2){
    let remainder = num1 % num2;
    return("The remainder of " + num1 + " divided by " + num2 + " is " + remainder);
    
    }
    // test case:
    
    function test() {
        let  inputnum1 = [7 , 8 , 10 , 23];
        let  inputnum2 = [9 , 4 , 5 , 21];
        
        let result = ["The remainder of 7 divided by 9 is 7" , "The remainder of 8 divided by 4 is 0" , "The remainder of 10 divided by 5 is 0" , "The remainder of 23 divided by 21 is 2"];
    
        for(i=0; i < inputnum1.length; i++) {
            let testResult = remainderNumber(inputnum1[i],inputnum2 [i]);
            console.log(testResult)
            if(testResult === result[i]) {
                console.log("test passed");
            }else{
                console.log("test failed")
            }
        }
    }
    
    test();
