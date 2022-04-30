
//NS Secret Code: B7659E13
const alphaCountBack = (letter) => {
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let returnStr = "";
    const lowerCaseLetter = letter.toLowerCase();
    const indexOfGivenLetter = alphabet.indexOf(lowerCaseLetter);
  
    for (let i = indexOfGivenLetter; 0 <= i; i--) {
      returnStr += alphabet[i];
    }
  
    if (letter.toLowerCase() === letter) {
      return returnStr;
    } else {
      return returnStr.toUpperCase();
    }
  };
  
  console.log(alphaCountBack("e")); //should return "edcba"
  console.log(alphaCountBack("J")) //should return "JIHGFEDCBA"
  
  //create array of alphabets?
  //choose value
  //connect each letter?
  //reverse?
  
  //reflection
  //beautiful!!!
  //divide for loop and return process
  //letter.toLowerCase() === letter statement is useful
  //not good to use reverse using the same tools are better