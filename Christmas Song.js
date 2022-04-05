const giftOptions = {
  1: ["first", "a partridge in a pear tree"],
  2: ["second", "two turtle doves"],
  3: ["third", "three french hens"],
  4: ["fourth", "four calling birds"],
  5: ["fifth", "five gold rings"],
  6: ["sixth", "six geese a-laying"],
  7: ["seventh", "seven swans a-swimming"],
  8: ["eighth", "eight maids a-milking"],
  9: ["ninth", "nine ladies dancing"],
  10: ["tenth", "ten lords a-leaping"],
  11: ["eleventh", "eleven pipers piping"],
  12: ["twelfth", "twelve drummers drumming"],
};

const christmasSong = () => {
  let songArray = []

  const thePhrase = (n) => {        
        let ordinalNum = giftOptions[n + ''][0]
        return 'On the ' + ordinalNum + ' day of Christmas, my true love gave to me: ' 
    }
  
  const presents = (n) => {
      let gifts = ''
          if(n >= 2){
          for(let i = n; 2 <= i; i--){
          gifts += giftOptions[i + ''][1] + ', '        
          }  
          gifts += 'and ' + giftOptions[1][1] + '.'   
          }else{
              gifts = giftOptions[1][1] + '.'
          }            
          return gifts          
      }

      for(let i = 1; i <= 12; i++){
          songArray.push(thePhrase(i) + presents(i))
      }

      return songArray
};

//SecretCode: B01425EA