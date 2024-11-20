function averageOfNumber(Number){
    if (Number.length === 0){
        return 0;
    }

    let sum = 0;

    for(let i = 0; i < Number.length; i++) {
        sum += Number[i];
    }

    const average = sum / Number.length;
    return average;

}

const NumberArray = [10, 20, 30 , 40 , 50, 60];
const average = averageOfNumber(NumberArray);
console.log("the average is:", average);

//  test case

function test(){
    let input = [[10, 20, 30 , 40 , 50, 60],[1, 2, 3, 4, 5],[6,7,8,9,10],[11,22,33,44,55]];
    let result = [35,3,8,33];

    for(i = 0; i < input.length; i++){
        let testResult = averageOfNumber(input[i]);
    if(testResult === result[i]) {
        console.log("test passed");
    }else{
        console.log("test failed")
    }
}
}
test();