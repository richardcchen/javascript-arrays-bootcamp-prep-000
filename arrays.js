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

function destructivelyaddElementToEndOfArray(arr, additional){
  arr.push(additional);
  return 
}


function accessElementInArray(arr, index){
  return array[index]
}