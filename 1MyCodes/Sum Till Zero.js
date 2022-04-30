
const tillZero = (nums) => {
    let sum = 0;
    for (const number of nums) {
        if ( number !== 0) {
        sum += number
        } else {
            return sum
        }
    };
  };
  
console.log(tillZero([1, 2, 3, 0, 4, 5]))// return 6 because 1 + 2 + 3 = 6
//let sum
//for loop
//if 0 return
//else sum

// Secret Code: 29678DE9