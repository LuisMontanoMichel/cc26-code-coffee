
//NS Secret Code: BD831411

const swapAdjacentPairs = (arr) => {
    for (let i = 0; i < arr.length; i+=2) {
      const preValue = arr[i]
      const curValue = arr[i + 1]
      arr[i] = curValue
      arr[i + 1] = preValue
    }
    return arr;
    };
    
    console.log(swapAdjacentPairs([1, 2, 3, 4, 5, 6])); // returns [2, 1, 4, 3, 6, 5]
    
    //ref
    //figuring out i+=2 was great
    //not using tools you don't know was great
    
    // for (let i = 0; i < 10; i+= 2) {
    //  console.log(i);
    // }