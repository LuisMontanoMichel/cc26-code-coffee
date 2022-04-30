//NS Secret Code: D221FE7F  
const isInOrderPosNeg = (nums) => {
    const posArr = [];
    const negArr = [];
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 0) {
        posArr.push(nums[i]);
      } else if (nums[i] < 0) {
        negArr.push(nums[i]);
      }
    }
    
    let posBool = true
    for (let i = 0; i + 1 < posArr.length; i++) {
      if (posArr[i] > posArr[i + 1]) {
        posBool = false;
      }
    }
    
    let negBool = true
    for (let i = 0; i + 1 < negArr.length; i++) {
      if (negArr[i] < negArr[i + 1]) {      
        negBool = false;
      }
    }    
    return posBool && negBool
  };
  
  isInOrderPosNeg([1, 2, 3, 4, -1, -2, -3, -4]) //should return true 
  isInOrderPosNeg([1, 2, 3, 4, -1, -2, 5, 6, 7, 8, -3, -4]) //should return true 
  isInOrderPosNeg([1, 2, 3, 4, -1, -2, -3, -4, 1, 2, 3, 4]) //should return false
  
  //create two arrays
  //compare the vals

  //you are solving it in your own way, great!