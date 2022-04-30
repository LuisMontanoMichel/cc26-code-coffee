
/**
 * Creates an n by n grid (array of arrays) filled with a repeated value in each cell.
 * @param {number} n the side length of the grid
 * @param {Object} value A value to populate the grid with
 * @returns {Array<Array<Object>>} an n by n grid
 */
 const makeGrid = (n, value) => {
    
  let returnArray = [];

  for (let i = 0; i < n; i++) {    
    let array = [];
    returnArray.push(array);      
  for (let j = 0; j < n; j++){
    array.push(value);     
    }
  };      
  return returnArray
};

console.log(makeGrid(2, "x"))
console.log(makeGrid(3, false))

//reflection
//believe your solution
//do not try to understand why wrong codes are wrong
