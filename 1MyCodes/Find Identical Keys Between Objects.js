'use strict'

//NS Secret Code: E8150280
const findIdenticalKvp = (obj1, obj2) => {
  const returnObj = {};
  for (const key in obj1) {
   if (obj1[key] === obj2[key]) {
     returnObj[key] = obj1[key]
   }
  }
  return returnObj
};

let o1 = { a: 1, b: 2, c: 3 };
let o2 = { a: 3, b: 2, c: 1 };
let o3 = { a: 3, b: 2, c: 1, d:4 };
let result = findIdenticalKvp(o2, o3);
console.log(result); 
// ["b"] because the key b exists in both and has a value of 2 in both

//if key matches
//if value matches
//push key into return obj

//reflection
//not good to jump to Object.keys
//if (obj1[key] === obj2[key]) if key and value matches

// The discription is wrong!!!
//["b"]=>{b:2}

// const findIdenticalKvp = (obj1, obj2) => {
//   const returnArr = [];
//   for (const key in obj1) {
//    if (obj1[key] === obj2[key]) {
//      returnArr.push(key);
//    }
//   }
//   return returnArr
// };