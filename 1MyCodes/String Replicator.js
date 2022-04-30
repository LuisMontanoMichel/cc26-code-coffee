const stringReplicator = (str, n) => {
    let newString = "";
    for (let i = 0; i < n; i++) {
      newString += `${str}`
    }
    return newString
  };
  
  console.log(stringReplicator("a", 6)); // returns "aaaaaa"
  console.log(stringReplicator("X", 2)); // returns "XX"
  console.log(stringReplicator("ha", 5)); // returns "hahahaha"
  console.log(stringReplicator("", 4)); // returns ""
  
  //push
  //loop
  //recursion?
  
  // Secret Code: DF062B9A