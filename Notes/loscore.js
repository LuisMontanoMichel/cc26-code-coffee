(() => {
  'use strict';
  
  window._ = {};

  _.identity = (val) => {
    return val
  };

  _.add = (x, y) => {
    return x + y;
  };

  /**
  | ARRAYS
  |~~~~~~~~~~
  **/ 

  _.head = (array) => {
    return array[0];
  };

  _.tail = (array) => {
    return array.slice(1)
  };

  // _.tail = (array) => {
  //   let newArray = []
  //   for(let i = 1 ; i < array.length; i++){
  //     newArray.push(array[i])
  //   }
  //   return newArray
  // }

  //review
  _.take = (array, n) => {
    
    if(typeof n === "undefined"){
      return array.slice(0,1)
    }
    else if(typeof n === "number")
    return array.slice(0, n)
    
  };

  //review
  _.takeRight = (array, n) => {
    if(typeof n === "undefined"){
      return array.slice(-1)
    }
    else if(typeof n === "number"){
      if(n !== 0){
    return array.slice(-n)
      }
      else{
        return array.slice(0,0)
      }
    }
  };

  _.uniq = (array) => {
    let newArray = []
    let object = {}
    for(const ele of array){
      object[ele] = undefined
    }
  
  for(const ele of array){    
    for(const key in object){ 
        if(ele === key - ""){
          newArray.push(ele)
          delete object[key]        
        }
      }
    }
    return newArray
    }

  /**
  | COLLECTIONS
  |~~~~~~~~~~
  **/ 

  _.size = (collection) => {
    if(typeof collection === "string" || Array.isArray(collection) ){
      return collection.length
    }
    else{
      return Object.keys(collection).length
    }
  }

  _.indexOf = (array, target) => {
    
    let expectedValue = -1
  
    _.each(array , function( value, index ) {
  
      if (value === target && expectedValue === -1) {     
        expectedValue = index
      }
    });  
    return expectedValue
  }; 

  _.each = (collection, iteratee) => {
    if(Array.isArray(collection) === true){
      for(let i = 0; i < collection.length; i++){
        iteratee(collection[i], i, collection)
      }
    }
    else{
      for(const key in collection){
        iteratee(collection[key], key, collection)
      }
    }
  }

_.map = (collection, iteratee) => {

  let newArray = []

  _.each(collection,  function( value){
    newArray.push(iteratee(value))
  })    

  return newArray
  }; 

  _.filter = (collection, test) => {
  
    let newArray = []
  
    _.each(collection,  function( value){
  
      if( test(value) === true )
      newArray.push(value)
  })
    return newArray
  
  };
  
  _.reject = (collection, test) => {
    return _.filter(collection, (num) => {
      return !test(num);
    })
  };

  _.pluck = (collection, key) => {
  
    let newArray = []

    for(const object of collection){
      newArray.push( object[key] )
    }
  return newArray
  };

_.reduce = (collection, iterator, accumulator) => {

  let  accumulatedNumber;

  if(accumulator !== undefined){

    accumulatedNumber = accumulator

    _.each(collection,  function( value){

      accumulatedNumber = iterator(accumulatedNumber, value)

  })
  return accumulatedNumber
}

  else if(accumulator === undefined){

    accumulatedNumber = collection[0]
    let newCollection = collection.slice(1)

    _.each(newCollection,  function( value){
      accumulatedNumber = iterator(accumulatedNumber, value)
  })

return accumulatedNumber
}
};

  _.contains = (collection, target) => {
    return _.reduce(collection, (wasFound, item) => {
      if (wasFound) {
        return true;
      }
      return item === target;
    }, false);
  };

  _.every = function (collection, truthtest) {
        
    if(truthtest !== undefined){
    return _.reduce(collection, (passOrNotpassed, item) => {                   
      if(passOrNotpassed === false){
        return false
      }
      else if(passOrNotpassed){
        return truthtest(item)
      }      
    }, true);
  }
    if(truthtest === undefined){
    return _.reduce(collection, (passOrNotpassed, item) => {              
      if(passOrNotpassed === false){
        return false
      }
      else if(passOrNotpassed){
        return item
      }      
    }, true)
    }
  };

  /**
  | OBJECTS
  |~~~~~~~~~~
  **/

 
_.extend = function (obj1, ...theArgs) {

  for(const obj of theArgs){
    _.each( obj, function(value, key){
      obj1[key] = obj[key]
    })
  }
    return obj1
  }; 

  /**
  | FUNCTIONS
  |~~~~~~~~~~
  **/

  
  _.once = function (func) {
    let call = false
    let result;
    return function(arg) {
      if (call === false) {
        result = func(arg);
        call = true;
      }
      return result;
    }
  };

_.memoize = function (func) {
  
  const object = {}
  
  return function(arg){

  if(!object[arg]){
    object[arg] = "done"
    return func(arg)
  }
}
};

_.invoke = function (collection, functionOrKey) {
  if (typeof functionOrKey === "function") {
    return _.map(collection, (el) => functionOrKey.apply(el));
  }
  if (typeof functionOrKey === "string") {
    return _.map(collection, (el) => el[functionOrKey]());
  }
};

  /**
  | ADVANCED REQUIREMENTS
  |~~~~~~~~~~~~~
  **/

  _.sortBy = function (/* Your Arguments Here */) {
    // YOUR CODE HERE
  };

  _.zip = function (/* Your Arguments Here */) {
    // YOUR CODE HERE
  };

  _.delay = function (/* Your Arguments Here */) {
    // YOUR CODE HERE
  };

  _.defaults = function (/* Your Arguments Here */) {
    // YOUR CODE HERE
  };

  _.throttle = function (/* Your Arguments Here */) {
    // YOUR CODE HERE
  };
})();

