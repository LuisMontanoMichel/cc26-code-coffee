//NS Secret Code: 9FDD1811Secret
//49;22
const fourFuncMathCalcOfThree = (a, b, c, op) => {
    if (op === "ADD") {
        return Math.max(a+b, b+c, c+a);
    }
    else if (op === "SUBTRACT") {
      return Math.max(a-b, b-a, b-c, c-b, c-a, a-c);
    }
    else if (op === "MULTIPLY") {
      return Math.max(a*b, b*c, c*a);
    }
    else if (op === "DIVIDE") {
      if (a === 0 && b === 0 && c === 0) {
        return 0
      }
      else if (a !== 0 && b !== 0 && c !== 0) {
        return Math.max(a/b, b/a, b/c, c/b, c/a, a/c);
      }
  
      else if (a !== 0 && b === 0 && c === 0) {
        return 0
      }
      else if (a === 0 && b !== 0 && c === 0) {
        return 0
      }
      else if (a === 0 && b === 0 && c !== 0) {
        return 0
      }
     
      else if (a === 0 && b !== 0 && c !== 0) {
        return Math.max(0, b/c, c/b)
      }
      else if (a !== 0 && b === 0 && c !== 0) {
        return Math.max(0, c/a, a/c);
      }
      else if (a !== 0 && b !== 0 && c === 0) {
        return Math.max(0, a/b, b/a);
      }
      
    }
  };
  
  //write four cases
  //MULTIPLY
  //ab,bc,ca
  
  //ref
  //in the divide part do not try to shortcut the process. You will get confused.
  //You still don't have the knowledge
  
  //const array1 = [1, 3, 2];
  //console.log(Math.max(...array1));
  // expected output: 3