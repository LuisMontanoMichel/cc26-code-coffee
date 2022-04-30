
//NS Secret Code: D3789041
const deepSplit = (strings, sep) => {
    let returnArr = [];
    let arrayOfArrays = [];
    for (let i = 0; i < strings.length; i++) {
      arrayOfArrays[i] = strings[i].split(sep)
    }
    for (let i = 0; i < arrayOfArrays.length; i++) {
      for (let j = 0; j < arrayOfArrays[i].length; j++) {      
        returnArr.push(arrayOfArrays[i][j])
      }
    }
    return returnArr
  };
  
  console.log(deepSplit(["abc#def", "ghi", "123#456#789"], "#"));
  //should return ["abc", "def", "ghi", "123", "456", "789"]
  
  // console.log("abc#def".split("#"))
  // console.log("abcdef".split("#"))
  //use split on every element
  
  //look each array of strings
  //push each value into returnarr
  
  //reflection
  //split returns an array
  //trying each step is the easiest way