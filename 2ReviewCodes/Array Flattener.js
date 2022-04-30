
//NS Secret Code: E5B598CE
let returnArr = [];
const arrayFlatten = (arr) => {
  for (const value of arr) {
    if (Array.isArray(value)) {
      arrayFlatten(value);
    } else {
      returnArr.push(value);
    }
  }
  return returnArr;
};
console.log(arrayFlatten([1, 2, [3, 4, 5]]));
//should return a new array [1, 2, 3, 4, 5]
console.log(arrayFlatten([["A", ["B"]], "C", "D", [["E"], "F"]])) 
//should return ["A", "B", "C", "D", "E", "F"]

//check value
//push val into newArr
//if array
//check val
// push val into newArr
//if array
//check val
// push val into newArr
//recursion?

//you can return an array which is outside of the function

const christmasSong = (song = [], day = 1) => {
	// Base case: The song is done after 12 days pass
    if (day > 12) {
      return song;
    }

    // Add the current verse to the song array
    song.push(makeVerse(day));
  
    // Recursive case: Go to the next day and continue building the song
    return christmasSong(song, day + 1);
};
