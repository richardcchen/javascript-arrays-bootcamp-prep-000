var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, additional){
  return [additional,...arr]
}

function destructivelyAddElementToBeginningOfArray(arr, additional){
  arr.unshift(additional);
  return arr
  
  
}

