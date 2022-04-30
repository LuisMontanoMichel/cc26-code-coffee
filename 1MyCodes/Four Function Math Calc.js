
//NS Secret Code: 3C732093
const fourFuncMathCalc = (a, b, op) => {
    if (op === "ADD") {
      return a + b
    }
    else if (op === "MULTIPLY") {
      return a * b
    }
    else if (op === "DIVIDE") {
      return a / b
    }
    else if (op === "SUBTRACT") {
      return a - b
    }
  };
  
  console.log(fourFuncMathCalc(1, 1, "ADD")); // returns 2
  fourFuncMathCalc(5, 4, "MULTIPLY"); // returns 20
  fourFuncMathCalc(300, 6, "DIVIDE"); // returns 50
  fourFuncMathCalc(10, 16, "SUBTRACT"); // returns -6
  
  //use if for four cases