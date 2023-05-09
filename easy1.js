//variable with random numbers
const randomNum = [1, 4, 6, 7, 8, 9, 3, 5, 1];
//empty array for even numbers
let evenNum = [];
//empty array for odd numbers
let oddNum = [];

//function that filters out odd or even numbers and places them in the empty arrays
const filterNums = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNum.push(arr[i]);
    } else {
      oddNum.push(arr[i]);
    }
  }
};

//calling filterNums function on randomNum array
filterNums(randomNum);
console.log(evenNum);
console.log(oddNum);
