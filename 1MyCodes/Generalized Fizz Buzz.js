
// NS Secret Code: A2475E56

const generalizedFizzBuzz = (n, f, b) => {
    let returnArr = [];
    for (let i = 0; i < n; i++) {
      returnArr.push(i + 1);
    }
    for (let index = 0; index < n; index++) {
      let valueNum = index + 1
      if (valueNum % f === 0) {
        returnArr[index] = "Fizz";
      }
      
      if (valueNum % b === 0) {
        returnArr[index] = "Buzz";
      }
  
      if (valueNum % f === 0 && valueNum % b === 0) {
        returnArr[index] = "FizzBuzz";
      }
    }
    return returnArr
  };
  
  //returnArr
  //push
  //divisible by 3 => "Fizz"
  //divisible by 5 => "Buzz"
  //divisible by 3and5 => "FizzBuzz"
  //if else
  //&&
  
  //&& should be the last because otherwise it will be overwritten
  
  console.log(generalizedFizzBuzz(20, 3, 5));
  [
      1,
      2,
      "Fizz",
      4,
      "Buzz",
      "Fizz",
      7,
      8,
      "Fizz",
      "Buzz",
      11,
      "Fizz",
      13,
      14,
      "FizzBuzz"
  ]
  console.log(generalizedFizzBuzz(10, 2, 3));
  [
      1,
      "Fizz",
      "Buzz",
      "Fizz",
      5,
      "FizzBuzz",
      7,
      "Fizz",
      "Buzz",
      10
  ]