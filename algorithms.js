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

function sleepIn(weekDay, vacation){
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

function monkeyTrouble(aSmile, bSmile){
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

function sumDouble(a, b){
    return (a === b) ? (a + b) * 2 : (a + b);
}

console.log(sumDouble(3, 3));