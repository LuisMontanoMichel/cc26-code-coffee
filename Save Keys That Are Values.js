const saveKeysThatAreValues = (obj) => {
    let newObj = {};
    //let Object.values(obj) => ["X", "Z", "Q", "C", "E", "B"]
    for (const values of Object.values(obj)) {
      if (obj[values] !== undefined) {
      newObj[values] = obj[values]
      }
    };
    return newObj
  };
  
  let obj = {
    A: "X",
    B: "Z",
    C: "Q",
    D: "C",
    E: "E",
    F: "B",
  };
  
  let result = saveKeysThatAreValues(obj);
  console.log(result);//{ B: "Z", C: "Q", E: "E" }
  
  //store values in an array?
  //create returnObj
  //check array's values
  //pick the key-value pairs
  //put in returnObj
  
  //reflection
  //good to visualize the new array
  //when it is hard to verbalize create and run the code