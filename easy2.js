function arraySorter() {}
let numArray = [10, 18, 19, 29, 33, 35, 47, 66, 83];
numArray = numArray.filter((number) => {
  //.filter creates a new array that is ready for elements that pass the function's test
  //function that is searching for a number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    // created a for loop to loop through the array and comparing the root of the number. Math.sqrt is used to square root a number
    if (number % i === 0) return false; // if the number remainder is 0 then it will be false and else will return true.
  }
  return true;
});
console.log(numArray);
