
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