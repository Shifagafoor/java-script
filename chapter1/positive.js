// Check the given number is positive, negative or zero

function positiveNegative() {
  let num = prompt("Enter a number:");
  num = Number(num); 

  if (num > 0) {
      return "The given number is positive";
  } else if (num < 0) {
      return "The given number is negative";
  } else {
      return "The number is zero";
  }
}

console.log(positiveNegative());