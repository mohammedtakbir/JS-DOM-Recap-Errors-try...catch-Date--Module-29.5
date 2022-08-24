// * range error
// * not in JS that frequently:
const numbers = [12, 23, 43, 45];
// console.log(numbers[10]);
// * you should not do this (most of the time)
numbers.length = 2;
// console.log(numbers)
// console.log(numbers.length);

// * referene error 
// console.log(money);
let money = 34;

// * syntax error
for(let i = 0; i < 5 i++){
    console.log(i)
}