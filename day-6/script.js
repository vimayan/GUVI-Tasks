alert("I'm invoked!");

// alert("I'm JavaScript!");
// alert('Hello') // this line is not having semicolon,because
// //its a function call it end because theres no connection to the next line,
// //no need for semicolon unless there's an arithmatic operations on the end
// alert(`Wor
//  ld`)
//  //backticks displays the strin as its typed
// alert(3 +
// 1
// + 2); // this is multiple line code and its working because,
// //the arithmatic statement continues unless the semicolon

// let admin=9, fname=10.5;
// fname = "Guvi";
// lname = "geek"
// admin = fname+' '+lname;
// alert( admin ); // "Guvi geek"

// let fname=10.5;
// fname = "Guvi";
// lname = "geek"
// let name = fname+lname;
// alert( `hello ${name}` );

// let a = Number(prompt("First number?"));
// let b = Number(prompt("Second number?"));
// alert(a + b);

// var a = "2" < "12";
// //Don't touch below this
// if (a) {
//   console.log("Code is Blasted")
// }
// else
// {
//   console.log("Diffused")
// }

// let a ='';
// //Don't modify any code below this
// if (a) {
//  console.log( 'OMG it works for any number inc 0' );
// }
// else
// {
//  console.log( "Success" );
// }

// let value = Number(prompt('How many runs you scored in this ball'));
// if (value === 4) {
//       console.log("You hit a Four");
// } else if (value === 6) {
//       console.log("You hit a Six");
// } else {
//       console.log("I couldn't figure out");
// }

// let login = "Employee";
// let message = login == "Employee" ? "Greetings" : "No login";
// console.log(message);

// You cant change the value of the msg

// let message;
// if (null || 2 || undefined )
// {
//   message = "welcome boss";
// }
// else
// {
//   message = "Go away";
// }
//   console.log(message);

// let message;
// let lock = 0;
// //Dont change any code below this
// if (null || lock || undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "welcome";
// }
//   console.log(message);

// let message;
// let lock = 0;
// //Dont change any code below this
// if (lock && " " || undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "welcome";
// }
// console.log(message);

//You can change only 2 characters
// let i = 4;
// while (i>1) {
//   console.log( --i );
// }

//Change the code to print 1 to 10 in 4 lines

// for(let i=1;i<=10;i++) console.log(i);

//Change the code to print even numbers
//You are allowed to modify only one character
// for (let num = 2; num <= 20; num += 2) {
//     console.log(num)
//   }

// let gifts = ["teddy bear", "drone", "doll"];
// for (let i = 0; i < 3; i++) {
//   console.log(`Wrapped ${gifts[i]} and added a bow!`);
// }

// let countdown = 100;
// while (countdown > 0) {
//   countdown--;
//   if(countdown == 0)
//   {
//    console.log("bomb triggered");
//   }
//   return console.log('disarm the bomb');
// }

// var lemein = "0";// its an non-empty string typecasting true
// var lemeout = 0;//  false
// var msg = "";

// if (lemein) {
//   msg += "hi";
// }
// if (lemeout) {
//   msg += "Hello";
// }
// console.log(msg);

/**PART 2 */

// Write a code to print the numbers in the array

// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var new_string = '';

// for (var i = 0; i < numsArr.length; i++) {
//  new_string += numsArr[i]
// }
// console.log(new_string);

// var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var new_string = "";

// for (var i = 0; i < numsArr.length; i++) {
//   new_string += numsArr[i] + ",";
// }
// console.log(new_string);

// var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var new_string = "";

// for (var i = 0; i < numsArr.length; i++) {
//   new_string += numsArr[i] + " ";
// }
// console.log(new_string);

// // Write a code to replace the array value — If the number is even, replace it with ‘even’.
// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// for (var i = 0; i <=10; i++) {
//  if(numsArr[i] %2 === 0 )
//  {
//  numsArr[i] ="even"
//  }
// }
// console.log(numsArr);

//Write a code to replace the array value — If the index is even, replace it with ‘even’.
// var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// for (var i = 0; i <= numsArr.length - 1; i++) {
//   if (i % 2 == 0) {
//     numsArr[i] = "even";
//   }
// }
// console.log(numsArr);

//Write a code to add all the numbers in the array
// var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// let sum = 0;

// for (var i = 0; i <= 10; i++) {
//   sum += numsArr[i];
// }
// console.log(sum);

//Write a code to add the even numbers only

// var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// let sum = 0;

// for (var i = 0; i <= 10; i++) {
//   if (numsArr[i] % 2 == 0) {
//     sum += numsArr[i];
//   }
// }
// console.log(sum);

//Write a code to add the even numbers and subract the odd numbers
// var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// let sum = 100;

// for (var i = 0; i <= 10; i++) {
//   if (numsArr[i] % 2 == 0) {
//     sum += numsArr[i];
//   }
//   else{
//     sum -= numsArr[i];
//   }
// }
// console.log(sum);

//Write a code to print inner arrays

// var numsArr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]];

// for (var i = 0; i < numsArr.length; i++) {
//   console.log(numsArr[i]);
// }

//Write a code to print elements in the inner arrays
// var numsArr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]];
// var str_all = "";

// for (var i = 0; i < numsArr.length; i++) {
//   var inner_array = numsArr[i];

//   for (var j = 0; j < inner_array.length; j++) {
//     str_all += inner_array[j];
//   }
// }

// console.log(str_all);

//Write a code to replace the array value — If the index is even, replace it with ‘even’.
// var numsArr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]];

// for (var i = 0; i < numsArr.length; i++) {
//   var inner_array = numsArr[i];

//   for (var j = 0; j < inner_array.length; j++) {
//     if (j % 2 === 0) {
//       inner_array[j] = "even";
//     }
//   }
// }

// console.log(numsArr);

//Write a code to print elements in the inner arrays in reverse
// Output: 11 10 9 8 7 6 5 4 3 2 1

// var numsArr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]];
// var str_all = "";

// for (var i = numsArr.length-1; i >=0; i--) {
//   var inner_array = numsArr[i];

//   for (var j = inner_array.length - 1; j >= 0; j--) {
//     str_all += inner_array[j]+" ";
//   }
// }

// console.log(str_all);

// Write a code to add elements in the inner arrays based on odd or even values

// var numsArr = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10, 11],
// ];
// var sum_odd = 0;
// var sum_even = 0;

// for (var i = 0; i < numsArr.length; i++) {
//   var inner_array = numsArr[i];

//   for (var j = 0; j < inner_array.length; j++) {
//     if (inner_array[j] % 2 !== 0) {
//       sum_odd += inner_array[j];
//     } else {
//       sum_even += inner_array[j];
//     }
//   }
// }

// console.log("Sum of odd elements: " + sum_odd);
// console.log("Sum of even elements: " + sum_even);

/**PART 3 */

// aa = (f,s,t) => {
//     console.log(f,s,t);
//     if(f>s &&f>t){
//     console.log(f)}
//     else if(s>f && s>t){
//     console.log(s)}
//     else{
//     console.log(t)}
//    }
//    aa(1,2,3);

// let n = 123;

// function add(n) {
//   let sum = 10;
//   for (var i = 0; i < String(n).length; i++) {
//     sum += Number(String(n)[i]);
//   }
//   return sum;
// }

// console.log(add(n));

// const arr = [9, 8, 5, 6, 4, 3, 2, 1];
// (function () {
//   let sum = 0;
//   console.log(arr);
//   for (var i = 0; i < arr.length; i++) {
//     console.log(sum);
//     sum += arr[i];
//   }
//   console.log(sum);
//   return sum;
// })();

// var arr = ["guvi", "geek", "zen", "fullstack"];
// var ano = function (arro) {
//   for (var i = 0; i < arro.length; i++) {
//     console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
//   }
// };
// ano(arr);

// const newArray = [1, 3, 2, 5, 10];

// const myPrimes = newArray.filter(num => {
//     if (num < 2) {
//         return false; // 0 and 1 are not prime
//     }

//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return false; // not a prime number
//         }
//     }

//     return true; // prime number
// });

// console.log(myPrimes);

// const num = [10, 20, 30, 40,50,60,70,80,90,100]
// const sum = (a, b) => a + b
// const total = num.reduce(sum,0)
// console.log(total);

// var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
// var k = 3;
// k = arr.length % k;
// (function () {
//   let out = arr.slice(k + 1, arr.length);
//   let end = arr.slice(0, k + 1);
//   let array = out.concat(end);
//   console.log(array);
// })();

// var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
// (function() {
//  for (var i = 0; i < arr.length; i++) {
//  if (arr[i] % 2 !== 0) {
//  console.log(arr[i]);
//  }}
// })();

// (function(str){
//    const str1 = str.split('').reverse().join('');
//     console.log(str1);
//    })("abcd")

//Fix the code to remove duplicates.
// var res = function(arr){
//     let newArr = [];
//     for(var i=0; i < arr.length; i++){

//     if(newArr.indexOf(arr[i]) == -1) {
//     newArr.push(arr[i]);
//     } }
//     console.log(newArr)
//    }
//    res( ["guvi", "geek",'guvi', "duplicate", "fullstack"])

// var array = [
//   [
//     ["firstname", "vasanth"],
//     ["lastname", "Raje"],
//     ["age", 24],
//     ["role", "JSWizard"],
//   ],
//   [
//     ["firstname", "Sri"],
//     ["lastname", "Devi"],
//     ["age", 28],
//     ["role", "Coder"],
//   ],
// ];
// var final = [];
// while (array.length != 0) {
//   var outer_remove = array.shift();
//   let new_object = {};
//   while (outer_remove.length !== 0) {
//     var inner_remove = outer_remove.shift();
//     var key = inner_remove[0];
//     var value = inner_remove[1];
//     new_object[key] = value;
//   }
//   final.push(new_object)
// }
// console.log(final);




// var as=[12,34,5,6,2,56,6,2,1];
// var s=as.reduce(function(a,c){
//  if(c%2!==0)
//  {
//  return a+c;
//  }
//  return a;},0);
// console.log(s);


// aa = data => {
//     var a = data;
//     var l = '';
  
//     for (let i = 0; i < a.length - 1; i++) {
//       var s = a[i + 1];
//       var b = a[i];
//       l += s;
//       l += b;
//       i = i + 1;
//     }
  
//     if (a.length % 2 !== 0) {
//       l += a[a.length - 1];
//     }
  
//     console.log(l);
//   };
  
//   aa("1234");
  