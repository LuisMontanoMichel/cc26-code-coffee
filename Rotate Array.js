const rotateArray = (arr, direction, n) => {
    if (direction === "RIGHT") {
    } else if (direction === "LEFT") {
    }
    arr[2] = arr[0];
      arr[3] = arr[1];
      arr[4] = arr[2];
      arr[0] = arr[3];
      arr[1] = arr[4];
    console.log(arr);
  };
  rotateArray([1, 2, 3, 4, 5], "RIGHT", 2) 
  //should return [4, 5, 1, 2, 3]
  // rotateArray(["A", "B", "C", "D"], "LEFT", 1) 
  //should return ["B", "C", "D", "A"]
  
  //forEach?
  //arr[2] = arr[1] right
  //arr[2] = arr[0] right2
  //arr[1] = arr[2] lefttt
  