// Secret Code: 0E5FCD79

//not working!
const stringDeduplicator = (arr) => {
  let newArray = [];
  let checkObj = {};

  for(const element of arr){
      checkObj[element] = ""
      // console.log(checkObj)
  }

  for(const key in checkObj){
      // console.log(key)
      newArray.push(key)
  }
  return newArray
}; 

console.log(stringDeduplicator(["b","a", "a", "b", "a", "b"]))  

//sol2
  const stringDeduplicator = (arr) => {
    let returnArr = [];
    for (const val of arr) {
      if (!returnArr.includes(val)) {
        returnArr.push(val)
      }
    }
    return returnArr
};

//sol3
const stringDeduplicator = (arr) => {
	let result = [];
  for(let i =0; i < arr.length; i++){
  	if(arr.indexOf(arr[i]) === i){
    result.push(arr[i])
    }
  }
  return result;
};
const stringDeduplicator = (arr) => {
  return arr.filter((val,index) =>  arr.indexOf(val) === index);
};
console.log(stringDeduplicator(["b","a", "a", "b", "a", "b"]));
//b 0
//a 1
//a 2
//b 3

//sol4
const stringDeduplicator = (arr) => {
const duplicatesFree = new Set(arr);
console.log(duplicatesFree)
const result = [...duplicatesFree]
return result
}; 