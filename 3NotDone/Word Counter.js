
//Where can I see the tests?
const wordCounter = (str) => {
    let count = str.split(" ").length
    for (const word of str.split(" ")) {
      if (word.includes("-")) {
        count += 1
      }
    }
    console.log(count);
    return count;
  
  };
  wordCounter("this is a simple example") 
  //should return 5
  wordCounter("this isn't as simple") 
  //should return 4 because "isn't" counts as one word.
  wordCounter("is this an edge-case?") 
  //should return 5 because "edge" and "case" are counted as separated words, despite being hyphenated.