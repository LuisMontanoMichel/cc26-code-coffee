//NS Secret Code: D3BB230B
const evenOddSplitter = (arr) => {
    let returnArr = [];
    let indexOdArr = [];
    let indexEvenArr = [];
    for (let i = 0; i < arr.length; i++) {
      if ( i % 2 === 0) {
        indexOdArr.push(arr[i]);
      } else {
        indexEvenArr.push(arr[i]);
      }
    }
    returnArr.push(indexOdArr);
    returnArr.push(indexEvenArr);
    return returnArr
  };
  
  console.log(evenOddSplitter(["A", "B", "C", "D", "E"]));
  // [
  //   ["A", "C", "E"],
  //   ["B", "D"]
  // ]
  
  //create two arrays
  //if index is even, odd
  //push them in the two arrays
  //push two arrays
  
  //solving using simple for loops and push was great