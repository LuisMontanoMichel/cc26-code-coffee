
//NS Secret Code: F42835A5
const findAllPairings = (a, b) => {
    const numbers = []
    for (let i = a; i <= b; i++) {
      numbers.push(i)
    }
    console.log(numbers);  
    const returnArray = [];
    for (let i = 0; i < numbers.length; i++) {
      for (let j = 0; j < numbers.length; j++) {
        returnArray.push([numbers[i], numbers[j]]);
      }
    }
    console.log(returnArray);
    return returnArray;
  };
  
  findAllPairings(1, 3) 
  //should return the following array of pairs (i.e. an array of arrays):
  [
      [1, 1],
      [1, 2],
      [1, 3],
      [2, 1],
      [2, 2],
      [2, 3],
      [3, 1],
      [3, 2],
      [3, 3]
  ]
  
  //produce numbers 1,2,3 a, a+1,.. b-1,b
  //create array
  //nested loops, pick two numbers
  //put in array
  //push array to returnArray