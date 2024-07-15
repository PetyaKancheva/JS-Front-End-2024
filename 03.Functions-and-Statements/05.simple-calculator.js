function solve(firstNum, secondNum, operator) {
    let operateFunc = null;
    switch (operator) {
        case 'multiply':
            operateFunc = (a, b) => a * b;
            break;
        case 'add':
            operateFunc = (a, b) => a + b;
            break;
        case 'subtract':
            operateFunc = (a, b) => a - b;
            break;
        case 'divide':
            operateFunc = (a, b) => a / b;
            break;
    }

    return console.log(operateFunc(firstNum, secondNum));
}

solve(5,
    5,
    'multiply'
)

//     function solve(num1, num2, operator){
//         executeFunction(operator){
//             return  operator(num1,num2);
//         }
//         function multiply(num1,num2){
//             return num1*num2;
//         }
//         function divide(num1,num2){
//             return num1/num2;
//         }
//         function add(num1,num2){
//             return num1+num2;
//         }
//         function subtract(num1,num2){
//             return num1-num2;
//         }
// }
