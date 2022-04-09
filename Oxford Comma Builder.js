
const oxfordCommaBuilder = (arr, includeOxfordComma) => {
  let newString = ""
  if (arr.length === 2) {
    newString = arr[0] + " and " + arr[1];
    console.log(newString);
  } else {
    if (includeOxfordComma) {//if true , and

      for (let i = 0; i < arr.length; i++){
        if (i === arr.length - 1){
          newString += "and " + arr[i]
        } else {
          newString += arr[i] + ", "
        }
      }      
      console.log(newString);
    } else {//if false and
      for (let i = 0; i < arr.length; i++){
        if (i === arr.length - 2){
          console.log(newString)
          newString += arr[i] + " and "
        } 
        else if (i === arr.length -1) {
          newString += arr[i]
        } else {
          newString += arr[i] + ", "
        }
      }
      console.log(newString);
    }
  }
  return newString;
};

//refactor using less for loops

// plan
// if values are two
// if values are more than two

// if true
// if false

//reflection
//do not try to rush even when the goal looks to be in front of you.
//better to write a plan 
//focus on finishing each step. Forget other blocks.
//solving small problems feels good. It is solid.

// console.log(oxfordCommaBuilder([1, 2, 3], true) );
// console.log(oxfordCommaBuilder(["eggs", "lettuce", "bacon"], false) );
// console.log(oxfordCommaBuilder(["Tom", "Jerry"], true));