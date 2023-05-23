function AnagramChecker(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let f1 = str1.toLowerCase().split("").sort().join("");
  let f2 = str2.toLowerCase().split("").sort().join("");
  console.log(f1, f2);

  if (f1 !== f2) {
    return false;
  } else {
    return true;
  }
}

const string1 = "Cinema";
const string2 = "iceman";
const result = AnagramChecker(string1, string2);
console.log(result);
