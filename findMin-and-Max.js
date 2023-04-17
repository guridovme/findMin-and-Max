const marks=[50,20,70,60,45,30];
  function findMin(arr) {
    if (arr.length === 0) {
    return undefined
    }
  let min = Infinity;
  arr.forEach((number)=> {
  if (number<min) {
  min = number;
  }
  });
  return min
  }
console.log(findMin(marks));
  
  function findMax(arr) {
  return Math.max(...arr)
  } 
  
console.log(findMax(marks));
   
console.log([...'John Resig'])
