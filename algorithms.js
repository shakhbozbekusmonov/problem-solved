// Problem solved by Shakhbozbek Usmonov (Miracle)!
// solved url: https://github.com/shakhbozbekusmonov/problem-solved
// CodingBat.com Warmup 1 started

// Warmupt 1.1
// function sleepIn(weekDay, vacation){
//     if((!weekDay && !weekDay) || (!weekDay && vacation)){
//         return true;
//     } else {
//         return false;
//     }
// }

function sleepIn(weekDay, vacation) {
  return (!weekDay && !weekDay) || (!weekDay && vacation) ? true : false;
}

console.log(sleepIn(true, true));

// Warmupt 1.2
// function monkeyTrouble(aSmile, bSmile){
//     if((aSmile && bSmile) || (!aSmile && !bSmile)){
//         return true;
//     } else {
//         return false;
//     }
// }

function monkeyTrouble(aSmile, bSmile) {
  return (aSmile && bSmile) || (!aSmile && !bSmile) ? true : false;
}

console.log(monkeyTrouble(true, true));

// Warmup 1.3
// function sumDouble(a, b){
//     if(a === b){
//         return (a + b) * 2;
//     } else {
//         return a + b;
//     }
// }

function sumDouble(a, b) {
  return a === b ? (a + b) * 2 : a + b;
}

console.log(sumDouble(3, 3));

// Warmup 1.4
// function diff21(n){
//     if(n <= 21){
//         return 21 - n;
//     } else{
//         return (n - 21) * 2;
//     }
// }

function diff21(n) {
  return n <= 21 ? 21 - n : (n - 21) * 2;
}

console.log(diff21(25));

// Warmup 1.5
// function parrotTrouble(talking, hour){
//     if(talking === true && hour < 7 || hour > 20){
//         return true;
//     } else {
//         return false;
//     }
// }

// function parrotTrouble(talking, hour){
//     if(talking && hour < 7 || hour > 20){
//                 return true;
//             } else {
//                 return false;
//             }
// }

function parrotTrouble(talking, hour) {
  return (talking && hour < 7) || hour > 20 ? true : false;
}

console.log(parrotTrouble(false, 6));

// Warmup 1.6
// function makes10(a, b){
//     if((a === 10 && b !== 10 || a !== 10 && b === 10) || (a + b === 10)){
//         return true;
//     }else{
//         return false;
//     }
// }

// function makes10(a, b){
//     return (a === 10 && b !== 10 || a !== 10 && b === 10) || (a + b === 10) ? true : false;
// }

function makes10(a, b) {
  return (a === 10 && b !== 10) || (a !== 10 && b === 10) || a + b === 10;
}

console.log(makes10(9, 1));

// Warmup 1.7
// function nearHundred(n){
//     let result1 = Math.abs(100 - n);
//     let result2 = Math.abs(200 - n);
//     if( result1 <= 10 || result2 <= 10) {
//         return true;
//     }else {
//         return false;
//     }
// }

function nearHundred(n) {
  let result1 = Math.abs(100 - n);
  let result2 = Math.abs(200 - n);
  return result1 <= 10 || result2 <= 10;
}

console.log(nearHundred(190));

// Warmup 1.8
// function posNeg(a, b, negative){
//     if((a > 0 && b < 0 || a < 0 && b > 0) && negative === false){
//         return true;
//     } else if (a < 0 && b < 0 && negative === true){
//         return true;
//     } else {
//         return false;
//     }
// }

// function posNeg(a, b, negative){
//     if(((a > 0 && b < 0 || a < 0 && b > 0) && !negative) || (a < 0 && b < 0 && negative)){
//         return true;
//     } else {
//         return false;
//     }
// }

// function posNeg(a, b, negative){
//     return ((a > 0 && b < 0 || a < 0 && b > 0) && !negative) || (a < 0 && b < 0 && negative) ? true : false;
// }

function posNeg(a, b, negative) {
  return (
    (((a > 0 && b < 0) || (a < 0 && b > 0)) && !negative) ||
    (a < 0 && b < 0 && negative)
  );
}

console.log(posNeg(-1, -1, false));

// Warmup 1.9
// function notString(str){
//     if(str.slice(0, 3) === "not"){
//         return str;
//     } else {
//         return "not " + str;
//     }
// }

// function notString(str){
//     if(str.startsWith("not")){
//         return str;
//     } else {
//         return "not " + str;
//     }
// }

function notString(str) {
  return str.startsWith("not") ? str : "not " + str;
}

console.log(notString("not x"));

// Warmup 1.10
function missingChar(str, n) {
  let str1 = str.slice(0, n);
  let str2 = str.slice(n + 1);
  return str1 + str2;
}

console.log(missingChar("kitten", 3));

// Warmup 1.11
function frontBack(str) {
  return str.slice(-1) + str.slice(1, -1) + str.slice(0, 1);
}

console.log(frontBack("code"));

// Warmup 1.12
// function front3(str){
//     return str.slice(0, 3) + str.slice(0, 3) + str.slice(0, 3);
// }

function front3(str) {
  return str.slice(0, 3).repeat(3);
}

console.log(front3("Javascript"));

// Warmup 1.13
function backAround(str) {
  if (str.length > 1) {
    return str.slice(-1) + str + str.slice(-1);
  }
}

console.log(backAround("cat"));

// Warmup 1.14
// function or35(n){
//     if(n % 3 === 0 || n % 5 === 0){
//         return true;
//     } else {
//         return false;
//     }
// }

function or35(n) {
  return n % 3 === 0 || n % 5 === 0 ? true : false;
}

console.log(or35(10));

// Warmup 1.15
function front22(str) {
  return str.slice(0, 2) + str + str.slice(0, 2);
}

console.log(front22("kitten"));

// Warmup 1.16
// function startHi(str){
//     if(str.slice(0, 2) === "hi"){
//         return true;
//     } else {
//         return false;
//     }
// }

function startHi(str) {
  return str.startsWith("hi");
}

console.log(startHi("there"));

// Warmup 1.17
// function icyHot(temp1, temp2){
//     if((temp1 < 0 && temp2 > 0) || (temp1 > 0 && temp2 < 0)){
//         return true;
//     } else {
//         return false;
//     }
// }

function icyHot(temp1, temp2) {
  return (temp1 < 0 && temp2 > 0) || (temp1 > 0 && temp2 < 0) ? true : false;
}

console.log(icyHot(-120, 1));

// Warmup 1.18
// function in1020(a, b){
//     if((a >= 10 && b >= 10) || (a <= 20 && b <= 20)){
//         return true;
//     } else {
//         return false;
//     }
// }

function in1020(a, b) {
  return (a >= 10 && a <= 20) || (b >= 10 && b <= 20);
}

console.log(in1020(12, 99));

// Warmup 1.19
// function hasTeen(a, b, c){
//     if((a >= 13 && a <= 19) || (b >= 13 && b <= 19) || (c >= 13 && c <= 19)){
//         return true;
//     } else {
//         return false;
//     }
// }

function hasTeen(a, b, c) {
  return (a >= 13 && a <= 19) || (b >= 13 && b <= 19) || (c >= 13 && c <= 19);
}

console.log(hasTeen(13, 20, 10));

// Warmup 1.20
// function loneTeen(a, b){
//     if(((a >= 13 && b < 13) || (a <= 19 && b > 19)) || ((a < 13 && b >= 13) || (a > 19 && b <= 19))){
//         return true;
//     } else {
//         return false;
//     }
// }

// function loneTeen(a, b) {
//     let aTeen = (a >= 13 && a <= 19);
//     let bTeen = (b >= 13 && b <= 19);
//     return (aTeen && !bTeen) || (!aTeen && bTeen);
// }

function loneTeen(a, b) {
  return (
    (a >= 13 && b < 13) ||
    (a <= 19 && b > 19) ||
    (a < 13 && b >= 13) ||
    (a > 19 && b <= 19)
  );
}

console.log(loneTeen(13, 13));

// Warmup 1.21
// function delDel(str){
//     if(str.slice(1, 4) === "del"){
//         return str.slice(0, 1) + str.slice(4);
//     } else {
//         return str;
//     }
// }

function delDel(str) {
  if (str.startsWith("del", 1)) {
    return str.slice(0, 1) + str.slice(4);
  } else {
    return str;
  }
}

console.log(delDel("adelbc"));

// Warmup 1.22
// function mixStart(str){
//     if(str.slice(1, 3) === "ix"){
//         return true;
//     } else {
//         return false;
//     }
// }

function mixStart(str) {
  return str.startsWith("ix", 1);
}

console.log(mixStart("miz snacks"));

// Warmup 1.23
// function startOz(str){
//     if(str.slice(0, 2) === "oz"){
//         return str.slice(0, 2);
//     } else if(str.slice(0, 1) === "o"){
//         return str.slice(0, 1);
//     } else if(str.slice(1, 2) === "z"){
//         return str.slice(1, 2);
//     }
// }

// function startOz(str){
//     return (str.slice(0, 2) === "oz") ? str.slice(0, 2) : (str.slice(0, 1) === "o") ? str.slice(0, 1) : (str.slice(1, 2) === "z") ? str.slice(1, 2) : "";
// }

function startOz(str) {
    let result = "";
    if (str.length >= 1 && str.charAt(0)=='o') {
      result = result + str.charAt(0);
    }

    if (str.length >= 2 && str.charAt(1)=='z') {
      result = result + str.charAt(1);
    }
    return result;
}

console.log(startOz("dzymandias"));

// Warmup 1.24
// function intMax(a, b, c){
//   if(a > b && a > c){
//     return a;
//   } else if(a < b && c < b){
//     return b;
//   } else {
//     return c;
//   }
// }

function intMax(a, b, c){
  return (a > b && a > c) ? a :(a < b && c < b) ? b : c;
}

console.log(intMax(10, 4, 11));