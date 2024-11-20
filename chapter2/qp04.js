    let length  = 20;
    let breadth = 3;

    let area = length * breadth;

    console.log("The area of the rectangle is:" + area);



    // test case

    function test(){
        let inputlength  = [10, 2 ,4, 12];
        let inputbreadth = [5, 6, 8, 1];

        let result = [50, 12, 32, 12]

        for(i = 0; i < inputlength.length; i++){
            let testResult = [(inputlength[i], inputbreadth[i])];
            console.log (testResult)
            if(testResult === result[i]) {
                console.log("test passed");
            }else{
                console.log("test failed")
            }
        }
    }



