var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, additional){
  return [additional,...arr]
}

function destructivelyAddElementToBeginningOfArray(arr, additional){
  arr.unshift(additional);
  return arr
  
  
}

function addElementToEndOfArray(arr, additional){
  return [...arr, additional]
}

function destructivelyAddElementToEndOfArray(arr, additional){
  arr.push(additional);
  return arr
}


function accessElementInArray(arr, index){
  return arr[index]
}