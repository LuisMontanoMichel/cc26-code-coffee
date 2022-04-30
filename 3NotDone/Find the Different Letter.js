
const findTheDifferentLetter = (str1, str2) => {
    const str1Arr = str1.split("");
    const str2Arr = str2.split("");
    console.log(str1Arr, str2Arr);
    const returnArr = str2.split("");
  
    for (let i = 0; i < str2Arr.length; i++) {
      if (str1Arr.includes(returnArr[i])) {
        returnArr.splice(i, 1)
        console.log("returnArr", returnArr);
      }
    }
    
    
  };
  
  findTheDifferentLetter("kitty", "yktkit") 
  //should return the string "k" because the 2nd string contains an extra k.
  // findTheDifferentLetter("apple", "pale") 
  //should also return "p" because the first string contains an extra p not present in the 2nd string.
  
  //split
  //choose one val
  //includes
  //remove both...
  
  //put all letters in check obj
  //point the key val which is different