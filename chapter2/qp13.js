// Write a program to check whether a given number is an Armstrong number or not

function isArmstrongNumber(num) {
    let originalNum = num;
    let sum = 0;
    let temp;

    while (num > 0) {
        temp = num % 10;
        sum += Math.pow(temp, 3);
        num = Math.floor(num / 10);
    }
}

// test case