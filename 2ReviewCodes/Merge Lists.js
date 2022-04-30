//NS Secret Code: A10BCB09
const mergeLists = (arr1, arr2) => {
  let newArr = [];
  let count = arr1.length + arr2.length

   for (let i = 0; i < count; i++) {
  if (arr1[0] < arr2[0] || arr2[0] === undefined) {
    newArr.push(arr1[0]);
    arr1.splice(0, 1);
  } 
  else if (arr1[0] > arr2[0] || arr1[0] === undefined) {
    newArr.push(arr2[0]);
    arr2.splice(0, 1);
  }
  else if (arr1[0] === arr2[0]) {
    newArr.push(arr1[0]);
    arr1.splice(0, 1);
  }
}
  return newArr;
};

// console.log([].length)
// console.log([][0])

mergeLists([1, 2, 3], [4, 5, 6]) 
//should return [1, 2, 3, 4, 5, 6]
mergeLists([1, 3, 5], [2, 4, 6]) 
// //should return [1, 2, 3, 4, 5, 6]
mergeLists([1, 1, 1], [-1, 1, 2]) 
// //should return [-1, 1, 1, 1, 1, 2]
mergeLists([0, 0, 0], [0]) 
// //should return [0, 0, 0, 0]
mergeLists([4, 10, 12], [-3, 0, 9]) 
// //should return [-3, 0, 4, 9, 10, 12]

//compare arr1[0] and arr2[0]
//push the smaller one in a new array
//splice it
//repeat till all vals are used

//ref
//again,don't try to use new methods,
//solve the examples one by one, not at once

function isSorted(array){  
  let previousNumber = array[0]
  for(let number of array){
    if( number >= previousNumber){
      previousNumber = number
    }
    else{
      return false
    }    
  }
  return true
}
