//NS Secret Code: 75CB1C09
const objectArrayMerger = (arrayOfObjects) => {
    let returnObj = {};
  // //create keys!  //create arrays!
    for (const obj of arrayOfObjects) {
      for (const key in obj) {
        returnObj[key] = []
      }
    }
  // //push values!
    for (const obj of arrayOfObjects) {
      for (const key in obj) {
        returnObj[key].push(obj[key]);
      }
    }
    return returnObj
  }
  
  let obj1 = { a: 5 };
  let obj2 = { a: 10, b: 20 };
  let result1 = objectArrayMerger([obj1, obj2]);
  console.log(result1); // { a: [5, 10], b: [20] }
  let obja = { x: null };
  let objb = { x: 0, y: false };
  let objc = { x: "", y: true, z: undefined };
  let result2 = objectArrayMerger([obja, objb, objc]);
  console.log(result2); // { x: [null, 0, ""], y: [false, true], z: [undefined] }
  
  //cre new obj
  //create arr and put the values of the same keys
  
  //arrOfObjs!!!
  //map
  //put new arr as value
  
  //for loop
  //put a value in a array
  //put a array in returnObj
  
  //ref
  //take small steps and try anything
  //rest time will solve it
  //point the steps, creating new value is not a step