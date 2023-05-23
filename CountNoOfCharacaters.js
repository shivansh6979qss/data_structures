// function IsAlphaNumeric(char) {
//   let code = char.charCodeAt(0);

//   if (
//     !(code > 47 && code < 58) &&
//     !(code > 64 && code < 91) &&
//     !(code > 96 && code < 123)
//   ) {
//     return false;
//   } else {
//     return true;
//   }
// }

// function CountNoOfChars(string) {
//   let result = {};
//   for (let i = 0; i < string.length; i++) {
//     var char = string[i].toLowerCase();
//     if (IsAlphaNumeric(char)) {
//       result[char] > 0 ? result[char]++ : (result[char] = 1);
//     }
//   }
//   return result;
// }

// let str1 = " gupta";
// const result = CountNoOfChars(str1);
// console.log("Results", result);
//
//
//
//
//
//
//
//
// wap to take two array as input and compare if every element of
//arr1 is equal to the square of each element of an arr2

const compare = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  // frequency counter for array 1
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  // Frequency counter for array 2
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  //comparing logic
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
    return true;
  }
};

const arr1 = [1, 2, 3, 1, 2];
const arr2 = [1, 4, 9, 4, 1];
const result = compare(arr1, arr2);
console.log(result);
