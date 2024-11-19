// Check the given age is eligible for voting.

function votingEligibilty() {
    let age = prompt("enter your age:");
    age = Number(age);

    if(age>=18){
            return ("your eligible for voting !");
    } else{
            return ("your not eligible for voting");
    }
}

console.log(votingEligibilty());


// test case

function test() {
        let input = [20, 18, 17, 15];
        let result = ["eligible for voting","eligible for voting","not eligible for voting", "not eligible for voting"];

        for(i = 0; i < input.length;i++){
                let testResult = Number(input[i]);
                if(testResult === result[i]){
                        console.log("test passed");
                }else{
                        console.log("test failed");
                }
        }
}

test()