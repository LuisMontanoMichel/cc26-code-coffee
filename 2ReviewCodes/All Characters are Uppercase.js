
//NS Secret Code: C90B83A4

const allUppercase = (str) => {

  const alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r" ,"s", "t", "v", "w", "x", "y", "z"];
  const arrOfStr = str.toLowerCase().split("")
  
  for (const letter of arrOfStr) {
    if (!alphabets.includes(letter)) {
      return false;
    }
  }

    if (str === str.toUpperCase()) {
      return true;
    } else {
      return false;
    };
  };
  
  console.log(allUppercase("abc")); // false
  console.log(allUppercase("ABC")); // true
  console.log(allUppercase("ABC!")); // false
  console.log(allUppercase("AaAaA")); // false
  console.log(allUppercase("")); // true
  
 
  //check if all are alphabets
  //check if all are UpperCase