
//NS Secret Code: 0D3A44BE 
//1:11:06 22/4/13
const reverseClumps = (arr, n) => {
    let returnArr = []; 
    let count = arr.length
      while (count > 0 ) {
        returnArr = returnArr.concat(arr.splice(0, n).reverse());//cool
        count = count - n
        console.log("returnArr", "count", returnArr, count);
      }
     return returnArr
  };
  reverseClumps([1, 2, 3, 4, 5, 6], 3) 
  //should return [3, 2, 1, 6, 5, 4]
  reverseClumps(["eggs", "bacon", "toast", "oatmeal", "cereal", "grits"], 2) 
  //should return ["bacon", "eggs", "oatmeal", "toast", "grits", "cereal"].
  
  //for loops
  //push in ret arr
  //slice?
  
  //try and errors
  // returnArr[0] = [arr[0], arr[1], arr[2]].reverse();
    // returnArr[1] = [arr[3], arr[4], arr[5]].reverse();
    // console.log(returnArr);
    // const finalArr = returnArr[0].concat(returnArr[1]);
    // console.log(finalArr);
  
    // returnArr[0] = [arr[0], arr[1]].reverse();
    // returnArr[1] = [arr[2], arr[3]].reverse();
    // returnArr[2] = [arr[4], arr[5]].reverse();
    // console.log(returnArr);
    // const finalArr = returnArr[0].concat(returnArr[1]).concat(returnArr[2])
    // console.log(finalArr);
  
    // for (let i = 0; i < arr.length; i++) {
    //   returnArr.push([arr[i], arr[i + 1]]);
    // }
  
      // returnArr[0] = arr.slice(0, 2).reverse();
      // returnArr[1] = arr.slice(2, 4).reverse();
      // returnArr[2] = arr.slice(4, 6).reverse();
      // const finalArr = returnArr[0].concat(returnArr[1]).concat(returnArr[2])
      // console.log(finalArr);
  
      // const array1 = arr.splice(0, 2).reverse();
      // const array2 = arr.splice(0, 2).reverse();
      // const array3 = arr.splice(0, 2).reverse();
      // const finalArr = array1.concat(array2).concat(array3)
      // console.log(finalArr);
  
      // const array1 = arr.splice(0, 2).reverse();
      // const array2 = arr.splice(0, 2).reverse();
      // returnArr = array1.concat(array2)
  
      // returnArr = returnArr.concat(arr.splice(0, n).reverse())
      // console.log(returnArr);
      // returnArr = returnArr.concat(arr.splice(0, n).reverse())
      // console.log(returnArr);
      // returnArr = returnArr.concat(arr.splice(0, n).reverse())
      // console.log(returnArr);
      //n * times = numOfValues
      
  
//   function Create2DArray(rows) {
//     var arr = [];
  
//     for (var i=0;i<rows;i++) {
//        arr[i] = [];
//     }
  
//     return arr;
//   }
  
  // const original = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  // splitArrayPart1 = original.copyOfRange(original, 0, 3);
  // splitArrayPart2 = original.copyOfRange(original, 3, original.length);
  
  // console.log(splitArrayPart1);
  // console.log(splitArrayPart2);