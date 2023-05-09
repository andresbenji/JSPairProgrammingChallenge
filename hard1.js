//function that takes a string as input and returns a boolean indicating whether or not the string contains a pair of matching brackets
function brackets(str) {
  const stack = [];
  //object that defines bracket pairs
  const pairs = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  //loop through each character in string and check for brackets
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (pairs[char]) {
      stack.push(char);
    } else if (char === "}" || char === "]" || char === ")") {
      if (pairs[stack.pop()] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
