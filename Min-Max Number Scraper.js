
const minMaxNumScraper = (strOfNums) => {

  const arrayOfStrNums = strOfNums.split(' ');
  const arrayOfNums = arrayOfStrNums.map((strNum) => {
    return Number(strNum);
  }); 
  return [Math.min(...arrayOfNums), Math.max(...arrayOfNums)]
};

console.log(minMaxNumScraper("1 2 3 4 5")); //should return [1, 5]
console.log(minMaxNumScraper("32 5 11 9 27 3 18")); //should return [3, 32]

//make string into array
//create new array
//choose min and push in newArray
//choose max and push in newArray
//return newArray

//reflection
//we don't need to create returnArr every time, lame
//serching "how to create array from string" was good. However, it is not good to
//imitate the solution. Adjust it, or be inspired and create a better one.

let string = "0,1";
let array = JSON.parse("[" + string + "]");//[0, 1]

const numbers = "1 2 3 4 5";
const arrayOfStrNums = numbers.split(' ');
console.log(arrayOfStrNums);
const arrayOfNums = arrayOfStrNums.map((strNum) => {
  return Number(strNum);
});
console.log(arrayOfNums);