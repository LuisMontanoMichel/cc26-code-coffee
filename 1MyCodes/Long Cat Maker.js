
// NS? Secret Code: BA67C33C

const longCatMaker = (n) => {
  let theOs = ""
  for (let i = 0; i < n; i++) {
    theOs += "o"
  }
  let theLong = "l" + `${theOs}` + "ng"
  console.log(theLong); 
  return `Long cat is ${theLong}!`
};

//create long
//insert it in the sentence
//return the sentence

// longCatMaker(1) should return "Long cat is long!"
// longCatMaker(4) should return "Long cat is loooong!"
// longCatMaker(20) should return "Long cat is loooooooooooooooooooong!"

console.log(longCatMaker(1))
console.log(longCatMaker(4))
console.log(longCatMaker(20))
