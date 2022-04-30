const makeRange = (n) => {
    let returnArr = [];
    if (n > 0) {
    for (let i = 0; i < n; i++) {
      returnArr.push(i + 1);
    }
  } 
    return returnArr
  };
  
  console.log(makeRange(4)); // returns [1, 2, 3, 4]
  console.log(makeRange(1)); // returns [1]
  console.log(makeRange(-10)); // returns [];
  
  //newArr
  //push
  //increase the number
  
  // Secret Code: 3B2DFF56 NS