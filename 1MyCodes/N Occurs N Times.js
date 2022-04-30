
//NS Secret Code: F79C183A
const nOccursNTimes = (n, arrOfValues) => {
    let checkObj = {};
    for (let i = 0; i < arrOfValues.length; i++) {        
      if (checkObj[arrOfValues[i]]) {
        checkObj[arrOfValues[i]] += 1;  
      } else { checkObj[arrOfValues[i]] = 1 };
    };

    if (checkObj[n] === n) {
      return true;
    } else {
      return false;
    };
  };
  
  // console.log(nOccursNTimes(2, [1, 2, 2, 3])); //should return true
  // console.log(nOccursNTimes(3, [1, 2, 3, 4, 5, 4, 3, 2, 1])); //should return false
  
  
  console.log(nOccursNTimes(2, [1, 2, 2, 2, 3])); //should return true
  // console.log(nOccursNTimes(3, [1, 2, 3, 4, 5, 4, 3, 2, 1])); //should return false
  
  //use obj
  //count numbers
  //compare with n
  
  //reflection
  //still not used to if else
  //change given names

//   const nOccursNTimes = (n, values) => {
//     let checkObj = {};
//     for (let i = 0; i < values.length; i++) {
//       if (checkObj[values[i]]) {
//         checkObj[values[i]] += 1;  
//       } else { checkObj[values[i]] = 1 };
//     }
  
//     if (checkObj[n] === n) {
//       return true;
//     } else {
//       return false;
//     }
//   };