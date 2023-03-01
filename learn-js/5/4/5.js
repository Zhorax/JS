function getMaxSubSum(arr) {
    let maxSum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      let sumFixedStart = 0;
      for (let j = i; j < arr.length; j++) {
        sumFixedStart += arr[j];
        maxSum = Math.max(maxSum, sumFixedStart);
      }
    }
  
    return maxSum;
  }
  
  console.log( getMaxSubSum([-1, 2, 3, -9]) ); 
  console.log( getMaxSubSum([-1, 2, 3, -9, 11]) ); 
  console.log( getMaxSubSum([-2, -1, 1, 2]) ); 
  console.log( getMaxSubSum([1, 2, 3]) ); 
  console.log( getMaxSubSum([100, -9, 2, -3, 5]) );