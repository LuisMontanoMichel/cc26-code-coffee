
//NS Secret Code: E52F575B
const inverseObjectFilter = (obj, keyExclusionList) => {
    for (const val of keyExclusionList) {
      for (const key in obj) {
        if (obj[key] === val) {
          delete obj[key];
        }
      }
    }
    return obj;
  };
  
  let obj = {
    a: "apple",
    b: "banana",
    c: "canteloupe",
    d: "durian"
  };
  
  let newObj = inverseObjectFilter(obj, ["banana", "durian"]);
  console.log(newObj);//{ a: "apple", c: "canteloupe" }
  
  //pick val from list
  //obj[key] === val
  //delete
  
  //always better to write plan 
  
  const Employee = {
    firstname: 'John',
    lastname: 'Doe'
  };
  
  delete Employee.firstname;
  