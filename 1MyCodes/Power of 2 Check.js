//NS Secret Code: C4ACE267
const powerOfTwoCheck = (n) => {
  let arrayOfPowNums = [];
  for (let i = 0; Math.pow(2, i) <= n; i++) {
    arrayOfPowNums.push(Math.pow(2, i));
  }  
  return n === arrayOfPowNums.at(-1)
}

console.log(powerOfTwoCheck(2)); //should return true.
console.log(powerOfTwoCheck(32)); //should return true.
console.log(powerOfTwoCheck(0)); //should return false.
console.log(powerOfTwoCheck(17)); //should return false.

//Math.pow(2, i) <= n

//ref
//want to know the largest Math.pow(2, i) which fits Math.pow(2, i) <= n