// My solution
// const sumZero = (arr) => {
//   let resultArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 0) {
//         resultArray.push(arr[i], arr[j]);
//       }
//     }
//   }
//   return resultArray;
// };

// const array = [-2, -1, 0, 1, 2];
// const result = sumZero(array);
// console.log(result);

// Time Complexeity - O(nlogn)

//

//
//
//
//

//
//
//Effiecient Solution
function sumZero(arr) {
  arr.sort();

  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    }
    if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

const array = [1, 2, 0, -2, -1];
const result = sumZero(array);
console.log(result);
// Time Complexeity - O(n)
