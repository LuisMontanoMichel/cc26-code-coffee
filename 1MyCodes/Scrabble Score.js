//NS Secret Code: 36A4A03B

const letterValues = {
    A: 1, E: 1, I: 1, O: 1, U: 1,
    L: 1, N: 1, S: 1, T: 1, R: 1,
    D: 2, G: 2,
    B: 3, C: 3, M: 3, P: 3,
    F: 4, H: 4, V: 4, W: 4, Y: 4,
    K: 5,
    J: 8, X: 8,
    Q: 10, Z: 10,
  };
  
  const scrabbleScore = (str) => {
    let score = 0;
    const upperCaseStr = str.toUpperCase()
    const strArray = upperCaseStr.split("")
    for (const key of strArray) {
      if (letterValues[key]) {
      score += letterValues[key]
      }
    }
    return score;
  };
  
  scrabbleScore("CAT"); //should return 5 because C = 3, A = 1, and T = 1
  scrabbleScore("DOG"); //should also return 5 because D = 2, O = 1, G = 2
  scrabbleScore("Apple!") //should return 9
  scrabbleScore("???") //should return 0
  
  //split
  //toUpperCase()
  //use the value in the array and add points
  //return points
  
  //reflection
  //just put a console.log before score!!!
  //got confused with key in
  //forgot how to treat ! and ?