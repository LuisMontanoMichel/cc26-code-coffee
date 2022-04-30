
//NS Secret Code: BAF29524
const countSevens = (n) => {
    let counter = 0;
    const arrOfNums = [];
    for (let i = 1; i <= n; i++) {
      arrOfNums.push(i);
    }
    console.log(arrOfNums);
  
    const strOfNums = arrOfNums.join("")
    const arrOfSingleNums = strOfNums.split("").map(num => Number(num))
    console.log(arrOfSingleNums)
  
    arrOfSingleNums.forEach(num => {
      if (num === 7) {
        counter += 1
      }
    })
  
    console.log(counter);
    return counter
  
  };
  countSevens(10) 
  //should return 1 because there is only one 7 between 1 and 10.
  // countSevens(20) 
  // //should return 2 because there are two 7's between 1 and 20: the number 7 itself and the 7 in 17
  // countSevens(100) 
  // //should return 20 because there are twenty 7's between 1 and 100.
  
  //loop
  //split
  //counter
  
  //map will not change array directly
  //forEach is more useful!