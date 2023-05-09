//function that accepts a letter and tells you whether or not it is a vowel
const vowelChecker = (x) => {
  if (x === "a" || x === "e" || x === "i" || x === "o" || x === "u") {
    console.log(`${x} is a vowel!!`);
  } else {
    console.log(`${x} is NOT vowel!!`);
  }
};

vowelChecker("u");
