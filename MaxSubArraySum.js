const maxSubArraySum = (arr, n) => {
  let tempSum = 0;
  let MaxSum = 0;
  // For finding the sum of first n number of elements
  for (let i = 0; i < n; i++) {
    MaxSum += arr[i];
  }

  tempSum = MaxSum;
  // For finding the sum of next n numbers and assigning the max. value to the MaxSum variable
  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    MaxSum = Math.max(tempSum, MaxSum);
  }
  return MaxSum;
};

const array1 = [1, 7, 2, 8, -2, 3, 6, 4, 9];
const result = maxSubArraySum(array1, 3);
console.log(result);
