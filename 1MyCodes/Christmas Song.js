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
        let ordinalNum = giftOptions[n][0]        
        return `On the ${ordinalNum} day of Christmas, my true love gave to me: `         
    }
  
  const presents = (n) => {
      let gifts = ''
          if(n >= 2){
          for(let i = n; 2 <= i; i--){
          gifts += giftOptions[i][1] + ', '        
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

//Andy's answer
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

const makeVerse = (day) => {
  // Build the opening phrase of the verse
  let verse = `On the ${giftOptions[day][0]} day of Christmas, my true love gave to me: `;
  
  if (day === 1) {
    // Just return the first gift on day 1
    return verse += `${giftOptions[1][1]}.`;
  } else {
    // Build the list of all gifts so far
    for (let i = day; i > 0; i--) {
      // The last gift in the list need `and` and `.`
      if (i === 1) {
        verse += `and ${giftOptions[1][1]}.`;
      } else {
        verse += `${giftOptions[i][1]}, `;
      }
    }

    // return the verse
    return verse;
  }
};

const christmasSong = (song = [], day = 1) => {
	// Base case: The song is done after 12 days pass
    if (day > 12) {
      return song;
    }

    // Add the current verse to the song array
    song.push(makeVerse(day));
  
    // Recursive case: Go to the next day and continue building the song
    return christmasSong(song, day + 1);
};

