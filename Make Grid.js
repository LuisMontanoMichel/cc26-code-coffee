
/**
 * Creates an n by n grid (array of arrays) filled with a repeated value in each cell.
 * @param {number} n the side length of the grid
 * @param {Object} value A value to populate the grid with
 * @returns {Array<Array<Object>>} an n by n grid
 */
 const makeGrid = (n, value) => {
    
  let returnArray = [];
  let inputArray = [];

  for(let i = 0; i < n; i++){
  inputArray.push(value);
  }

  for(let i = 0; i < n; i++){
  returnArray.push(inputArray);
  }

  return returnArray

};

console.log(makeGrid(2, "x"))
console.log([["x", "x"], ["x", "x"]])


console.log(makeGrid(3, false))