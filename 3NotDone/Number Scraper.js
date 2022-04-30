
//doesn't apply to all cases 
//.replaceAll(",","")
const numScraper = (str) => {
    const arrOfStr = str.replaceAll(",","").split(" ")
    console.log(arrOfStr);
  
    const returnArr = [];
    for (const ele of arrOfStr) {
      console.log(Number(ele))
      if (Number(ele)) {
        returnArr.push(Number(ele));
      }
    }
    console.log(returnArr);
    return returnArr;
  };
  numScraper("12 34 56, 78, and 9") 
  //should return [12, 34, 56, 78, 9]
  numScraper("I ate 15 bananas and got 1 tummyache") 
  //should return [15, 1]
  
  //split
  //loop, typeof
  //push in newArr
  
  // const elements = ['Fire', 'Air', 'Water'];
  
  // console.log(elements.join());
  // // expected output: "Fire,Air,Water"
  
  // console.log(elements.join(''));
  // // expected output: "FireAirWater"
  
  // console.log(elements.join('-'));
  // // expected output: "Fire-Air-Water"
  
  //https://java2blog.com/remove-comma-from-string-java/#2_Using_replaceAll_method