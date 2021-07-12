const removeFromArray = function(sourceArray, ...peskyNums) {

//Iterate through sourceArray
  for (i = 0; i < sourceArray.length; i++) {
    //For each element, iterate through peskyNums array and compare values
    for (j = 0; j < peskyNums.length; j++){
      //if they match, splice() pesky number out of sourceArray
      if (sourceArray[i] == peskyNums[j]) sourceArray.splice(i, 1); // this causes the sourceArray to shift and "miss" the next element (it now has the same index as the element that was just iterated over and removed)
        // Could solve by:
          // creating new array with the values that are NOT targeted for removal, leaving sourceArray intact
          // trying .forEach() to see if it handles this

          
          }
      else continue;
    }
  }
  return sourceArray;
};

module.exports = removeFromArray;
