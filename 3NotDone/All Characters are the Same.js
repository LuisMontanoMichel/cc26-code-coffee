//NS
const allCharactersSame = (str) => {
    const strArr = str.split("");
    console.log(strArr);
    const trueOrFalse = strArr.reduce((pr, cur) =>{
        
    }, true);
   };
 
 console.log(allCharactersSame("aaaa")); //true
 console.log(allCharactersSame("aaab")); //false
 console.log(allCharactersSame("aaa aaaaaa aaa aaaa"));//false
 console.log(allCharactersSame("aaaaaaAaaaa"));//false
 console.log(allCharactersSame("bbbbbbb"));//true
 console.log(allCharactersSame(""));//true
 
 //compare two
 //if diff return false
 //else true