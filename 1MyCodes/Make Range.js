//NS Secret Code: 3B2DFF56
const makeRange = (n) => {
    let count = 1;
    let returnArr = [];
    for (let i = 0; i < n; i++) {
      returnArr.push(count);
      count += 1;
    }
    console.log(returnArr);
    return returnArr;
  };
  
  makeRange(4); // returns [1, 2, 3, 4]
  makeRange(1); // returns [1]
  makeRange(-10); // returns [];
  
  //counter
  //loop