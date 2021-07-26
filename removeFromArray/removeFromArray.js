// FIRST WORKING SOLUTION:

// const removeFromArray = function(sourceArray, ...peskyArgs) {
//   for (i = 0; i < sourceArray.length; i++) {
//     for (j = 0; j < peskyArgs.length; j++){
//       while (sourceArray[i] === peskyArgs[j]) {
          // while accounts for shifting indexes when element is spliced out
//         sourceArray.splice(i, 1);
//         j = 0; 
          // resetting counter post-splice ensures ALL arguments are compared
//       }
//     }
//   }
//   return sourceArray;
// };


// REWORKED SOLUTION using better array methods:

// function removeFromArray(source, ...args) {
//     return source.filter( (current) => {
//       return args.every( arg => arg !== current);
//     });
// };


// SOLUTION REVISED:
function removeFromArray(source, ...args) {
    return source.filter(current => !args.includes(current))
};


module.exports = removeFromArray;


// NOTES FROM FIRST SOLUTION:
//Iterate through sourceArray
//For each element, iterate through peskyArgs to compare values
//if they match, splice() that element out of sourceArray

// The part that is challenging: splice() causes the sourceArray to shift and iteration  "misses" the next element (as the next element now has the same index as the element that was just removed)
  // Ideas:
    // creating new array with the values that are NOT targeted for removal, leaving sourceArray intact
    // trying .forEach() to see if it handles this
