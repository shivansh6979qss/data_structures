function countUniqueValues(arr) {
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

const array = [1, 1, 1, 2, 3, 4, 4, 5, 5, 5, 5, 5, 8, 8, 8, 8];
const result = countUniqueValues(array);
console.log(result);
