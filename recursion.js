/** Product of Nums: Write a function that finds the product of an array of numbers:
    product([2, 3, 4])   // 24
*/

function product(nums, idx = 0) {
  if (idx === nums.length) return 1;
  return nums[idx] * product(nums, idx + 1);
}

/** Longest Word: Given a list of words, return the length of the longest:
    longest(["hello", "hi", "hola"])  // 5
*/

function longest(words, idx = 0, longestSoFar = 0) {
  if (idx === words.length) return longestSoFar;
  longestSoFar = Math.max(words[idx].length, longestSoFar);
  return longest(words, idx + 1, longestSoFar);
}

/** Every Other Character: Write a function that returns a string of every other character:
  everyOther("hello")  // "hlo"
*/

function everyOther(str, idx = 0, newStr = "") {
  if (idx >= str.length) return newStr;
  newStr += str[idx];
  return everyOther(str, idx + 2, newStr);
}

/** Is Palindrome: Write a function that returns true/false depending on whether passed-in string is a palindrome:
    isPalindrome("tacocat")  // true
    isPalindrome("tacodog")  // false
*/

function isPalindrome(str, idx = 0) {
  let leftIdx = idx;
  let rightIdx = str.length - idx - 1;
  if (leftIdx >= rightIdx) return true;
  if (str[leftIdx] !== str[rightIdx]) return false;
  return isPalindrome(str, idx + 1);
}

/** Find Index: Given an array and a string, return the index of that string in the array (or -1 if not present):
    let animals = ["duck", "cat", "pony"];
    findIndex(animals, "cat");  // 1
    findIndex(animals, "porcupine");   // -1
*/

function findIndex(arr, val, idx = 0) {
  if (idx === arr.length) return -1;
  if (arr[idx] === val) return idx;
  return findIndex(arr, val, idx + 1);
}

/** Reverse String: Return a copy of a string, reversed:
    revString("porcupine") // 'enipucrop'
*/

function revString(str, idx = 0, newStr = "") {
  if (newStr.length === str.length) return newStr;
  newStr += str[str.length - 1 - idx];
  return revString(str, idx + 1, newStr);
}

/** Gather Strings: Given an object, return an array of all the values in the object that are strings:
    let nestedObj = {
    firstName: "Lester",
    favoriteNumber: 22,
    moreData: {
      lastName: "Testowitz"
    },
    funFacts: {
      moreStuff: {
        anotherNumber: 100,
        deeplyNestedString: {
          almostThere: {
            success: "you made it!"
          }
        }
      },
      favoriteString: "nice!"
      }
    };

    gatherStrings(nestedObj) // ["Lester", "Testowitz", "you made it!", "nice!"];
*/

function gatherStrings(obj) {
  let stringArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
}

/** Binary Search: Given an array (not a linked list!) of sorted numbers and a value, return the index of that value. If not found, return -1. This algorithm should run in O(log(N)) time (where N is the number of elements in the array):
  binarySearch([1,2,3,4],1) // 0
  binarySearch([1,2,3,4],3) // 2
  binarySearch([1,2,3,4],5) // -1
*/

function binarySearch(arr, val, left = 0, right = arr.length) {
  if (left > right) {
    return -1;
  }
  let middle = Math.floor((right + left) / 2);
  if (arr[middle] === val) {
    return middle;
  }
  if (arr[middle] > val) {
    return binarySearch(arr, val, left, middle - 1);
  }
  return binarySearch(arr, val, middle + 1, right);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
