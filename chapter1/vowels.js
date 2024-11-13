// Check if the given alphabet is vowel or consonant.
function alphabetInVowel(s) {
   let vowels = ["a","e","i","o","u"];

    if(vowels.includes(s)){
        return("the given value is vowel")
    }else{
        return("the given value is not vowel")
    }

}

console.log(alphabetInVowel("i"));