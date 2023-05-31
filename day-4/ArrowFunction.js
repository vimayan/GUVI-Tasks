//Print odd numbers in an array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.forEach(num => {
  if (num % 2 !== 0) {
    console.log(num);
  }
});


//Convert all the strings to title caps in a string array
let arr2 = ["hello", "world", "javascript"];
let titleCaps = arr2.map(str => str.charAt(0).toUpperCase() + str.slice(1));
console.log(titleCaps);


//Sum of all numbers in an array
let arr3 = [1, 2, 3, 4, 5];
let sum = arr3.reduce((total, num) => total + num, 0);
console.log(sum);


//Return all the prime numbers in an array
let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let primeNums = arr4.filter(num => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
});
console.log(primeNums);


//Return all the palindromes in an array
let arr5 = ["hello", "level", "world", "racecar"];
let palindromes = arr5.filter(str => {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
});
console.log(palindromes);
