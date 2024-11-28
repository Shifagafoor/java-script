function perfectNumber(num) {
    if (num <=0){
        return false;
    }
let sum = 0;
for(let i = 1; i <= num / 2; i++) {
    if(num % i === 0) {
        sum += 1;
    }
}
return sum === num;
}

const Number = 28;
if(perfectNumber(Number)) {
    console.log(`${Number} is a perfect number`);
} else {
    console.log(`${Number} is not a perfect number `);
}
