let firstName = 'Petya';
console.log('My name is: ' + firstName);

 function solve (num1, num2){
     console.log(num1 + num2);
}

solve(3,5);
// template
console.log(`My name is ${firstName}`);

let notANumber = NaN;
let infinity =Infinity;
let empty= null;
let notDefined = undefined;
let bigNumber = BigInt(2300);
let bigNumber2 = BigInt(`2300`);
console.log(bigNumber2);
// constant variable, cannot be reassgined
const lastName = `Kancheva`;
for( let i=1; i<= 5;i++){
    console.log(i);
}