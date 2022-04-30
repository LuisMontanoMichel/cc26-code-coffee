
const christmasTree = (letter, n) => {
  // let str = ""
  // str += "  *"
  // str += "\n * *"
  // str += "\n* * *"
  // console.log(str);

  // let str2 = " *"
  // str2 += "\n* *"
  // console.log(str2);
  // console.log(" *\n* *");
  // console.log("  *\n * *\n* * *")

  let str = "";
  const addSpace = () => {
    str += " "
  }
  const changeRow = () => {
    str += "\n"
  }
  const addLetter = () => {
    str += "*"
  }
  
  addSpace();
  addLetter();
  
  changeRow();
  addLetter();
  addSpace();
  addLetter();


  console.log(str);



};