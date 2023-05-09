//
const isAnagram = (string1, string2) => {
  //delete all white spaces in the strings and turn it to lowercase
  string1 = string1.replace(/\s/g, "").toLowerCase();
  string2 = string2.replace(/\s/g, "").toLowerCase();

  //if string 1 is not the same length as string 2 then it can't be an anagram
  if (string1.length !== string2.length) {
    return "This is NOT an anagram!!!";
  }

  //puts all letters in string 1 and string into separate arrays and sorts them in alphabetical order
  const arr1 = string1.split("").sort();
  const arr2 = string2.split("").sort();

  //loops through each letter in the arrays and compares to see if they are the same
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return "This is NOT an ANAGRAM!!!!";
    }
  }
  return "This is an ANAGRAM!!!";
};

console.log(isAnagram("So dark the con of man", "Madonna of the Rocks")); //output: "This is an ANAGRAM!!!"
console.log(isAnagram(" Things are good", "Dogs eat ants")); //output: "This is NOT an ANAGRAM!!!!"
