//NS Secret Code: 9A1E895B
const checkerboardFailures = (grid) => {
    //set counter
    //if grid value's index is even, 
    //the array's even index has to have 1, odd index 0
    //if grid value's index is odd, 
    //the array's even index has to have 0, odd index 1
    //when not matches the condition, counter += 1;
    let counter = 0;
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (i%2 === 0 && j%2 === 0) {
          if (grid[i][j] === 0) {
            counter += 1
          }
        }
        else if (i%2 === 0 && j%2 === 1) {
          if (grid[i][j] === 1) {
            counter += 1
          }
        }
        else if (i%2 === 1 && j%2 === 0) {
          if (grid[i][j] === 1) {
            counter += 1
          }
        }
        else if (i%2 === 1 && j%2 === 1) {
          if (grid[i][j] === 0) {
            counter += 1
          }
        }
      }
    }
    console.log(counter);
    return counter
  };
  
  // let grid = [
  //   [1, 0],
  //   [0, 1]
  // ];
  // let result = checkerboardFailures(grid);
  //result should be 0
  
  // let grid = [
  //   [1, 0, 1, 0],
  //   [0, 1, 0, 1],
  //   [1, 0, 1, 1],
  //   [0, 1, 0, 1],
  // ];
  // let result = checkerboardFailures(grid);
  //result should be 1 because there is 1 incorrect value.
  
  // let grid = [
  //   [0, 1],
  //   [1, 0],
  // ];
  // let result = checkerboardFailures(grid);
  // //result in this case should be 4.
  
  // let grid = [
  //   [1, 0, 1],
  //   [1, 1, 1],
  //   [0, 0, 0],
  // ];
  // let result = checkerboardFailures(grid);
  // //this grid has 4 incorrect values.