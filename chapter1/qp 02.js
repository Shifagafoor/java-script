// Check if the given alphabet is vowel or consonant.
function alphabetInVowel(s) {
   let vowels = ["a","e","i","o","u"];

    if(vowels.includes(s)){
        return("the given value is vowel")
    }else{
        return("the given value is consonant")
    }

}

console.log(alphabetInVowel("i"));

// test case

function test(){
    let input = ['a', 'e', 'i', 'o', 'u'];
    let result = ["given alphabet is vowel" , "given alphabet is vowel" , "given alphabet is vowel","given alphabet is vowel" , "given alphabet is vowel"];

    for(i=0; i < input.length; i++) {
        let testResult = alphabetInVowel(input[i]);
        if(testResult === result[i]){
            console.log("test passed");
        }else{
            console.log("test failed")
        }
    }
}

test()