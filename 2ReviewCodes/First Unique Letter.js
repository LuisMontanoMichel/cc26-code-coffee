
//Secret Code: 6FE1CC90 Not solved by myself
// const firstUniqueLetter = (word) => {

//   let wordLower = word.toLowerCase();
//   for (let letter of wordLower) {    
//     if (
//       wordLower.indexOf(letter) === wordLower.lastIndexOf(letter)
//     ) {
//       return letter;
//     }
//   }  
//   return '';  
// };

const firstUniqueLetter = (word) => {
  let chars = word.toLowerCase().split("");  
  let totals = {};
  for (let c of chars) {
    totals[c] = (totals[c] || 0) + 1;
  }
  for (let c of chars) {
    if (totals[c] === 1) return c;
  }
  return "";
};
  //not using else if!

  console.log(firstUniqueLetter(""));
  console.log(firstUniqueLetter("banana"));
  console.log(firstUniqueLetter("minimum"));
  console.log(firstUniqueLetter("Mommy"));
  
  //put into an obj
  //letter as keys, count as val
  //pick key-value which count is 1
  //choose the one whose index is lower
  //return letter
  
  //const array1 = [1, 3, 2];
  //console.log(Math.max(...array1));
  // expected output: 3