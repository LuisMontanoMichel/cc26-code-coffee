
const stringDeduplicator = (arr) => {
    let newArray = [];
    let checkObj = {};

    for(const element of arr){
        checkObj[element] = ""
        console.log(checkObj)
    }

    for(const key in checkObj){
        console.log(key)
        newArray.push(key)
    }
    return newArray
  }; 

  console.log(stringDeduplicator(["a", "a", "b", "a", "b"]))  


  const stringDeduplicator = (arr) => {
	let returnArray = [];
	for(let args of arr){
    if(!returnArray.includes(args)){
    	returnArray.push(args)
    }
    }
  return returnArray;
};

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
    return arr.filter((el,i) => arr.indexOf(el) === i)
  };

const stringDeduplicator = (arr) => {

const duplicatesFree = new Set(arr);
console.log(duplicatesFree)

const result = [...duplicatesFree]

return result

}; 