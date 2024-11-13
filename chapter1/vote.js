// Check the given age is eligible for voting.

function votingEligibilty() {
    let age = prompt("enter your age:");
    age = Number(age);

    if(age>=18){
            return ("your eligible for vote !");
    } else{
            return ("your not eligible for vote");
    }
}

console.log(votingEligibilty());