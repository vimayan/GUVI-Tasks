//Print odd numbers in an array:
(function (arr) {
  for (let num of arr) {
    if (num % 2 !== 0) {
      console.log(num);
    }
  }
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


//Convert all the strings to title caps in a string array

(function (arr) {
  let titleCaps = arr.map((str) => str.charAt(0).toUpperCase() + str.slice(1));
  console.log(titleCaps);
})(["hello", "world", "javascript"]);

//Sum of all numbers in an array
(function (arr) {
  let sum = arr.reduce((total, num) => total + num, 0);
  console.log(sum);
})([1, 2, 3, 4, 5]);


//Return all the prime numbers in an array
(function (arr) {
  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  let primeNums = arr.filter((num) => isPrime(num));
  console.log(primeNums);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


//Return all the palindromes in an array
(function (arr) {
  function isPalindrome(str) {
    let reversed = str.split("").reverse().join("");
    return str === reversed;
  }

  let palindromes = arr.filter((str) => isPalindrome(str));
  console.log(palindromes);
})(["hello", "level", "world", "racecar"]);



//Return median of two sorted arrays of the same size
(function (arr1, arr2) {
  function findMedian(arr) {
    let length = arr.length;
    let mid = Math.floor(length / 2);
    if (length % 2 === 0) {
      return (arr[mid - 1] + arr[mid]) / 2;
    } else {
      return arr[mid];
    }
  }

  let merged = arr1.concat(arr2);
  let sorted = merged.sort((a, b) => a - b);
  let median = findMedian(sorted);
  console.log(median);
})([1, 3, 5], [2, 4, 6]);



//Remove duplicates from an array
(function (arr) {
  let uniqueArr = arr.filter(
    (value, index, self) => self.indexOf(value) === index
  );
  console.log(uniqueArr);
})([1, 2, 3, 3, 4, 5, 5]);



//Rotate an array by k times
(function (arr, k) {
  k = k % arr.length;
  let rotated = arr.slice(k).concat(arr.slice(0, k));
  console.log(rotated);
})([1, 2, 3, 4, 5], 2);
