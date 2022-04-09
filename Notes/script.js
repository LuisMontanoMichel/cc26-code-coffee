'use strict'
// Please don't delete the 'use strict' line above


function OLogN (input){
  for(let i = 1; i < input.length + 1; i *= 2){
    console.log(input[i]);
  }
}