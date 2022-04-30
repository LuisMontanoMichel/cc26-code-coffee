//not arrayFlatten!!!
//NS Secret Code: 37887A6D
const stringByFirstChar = (strings) => {
    const newObj = {};
    for (const word of strings) {
      newObj[word[0]] = []
    }
    for (const word of strings) {
      newObj[word[0]].push(word);
    }
    return newObj
  };
  stringByFirstChar(["cat", "dog", "chipmunk", "bird", "BIRB", "BEEEEES"]) 
  // {
  //   "c": ["cat", "chipmunk"],
  //   "d": ["dog"],
  //   "b": ["bird"],
  //   "B": ["BIRB", "BEEEEES"],
  // }
  
  //create key process
  //newObj[val[0]] = []
  //pick val
  //split
  //pick first letter, create key, put arr as val
  
  //push val process
  //val[0]
  //newObj[val[0]].push(val)
  
  //ref
  //don't be timid