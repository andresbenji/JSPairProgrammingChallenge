//function that finds the common divisor of two numbers
function gcd_two_numbers(a, b) {
  if (b == 0) {
    return a;
  } else {
    return gcd_two_numbers(b, a % b);
  }
}

console.log(gcd_two_numbers(336, 360)); // Output: 24
console.log(gcd_two_numbers(78, 126)); // Output: 6
