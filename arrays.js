var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, additional){
  return [additional,...arr]
}

function destructivelyAddElementToBeginningOfArray(arr, additional){
  const arr.unshift(additional);
  return arr
  
  
}