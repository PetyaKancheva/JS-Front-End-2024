
function solve(leftOperand, rightOperand, operator){
        let result;
        switch (operator){
                case '+': result =leftOperand + rightOperand;
                break;
                case '-': result =leftOperand - rightOperand;
                break;
                case '*': result =leftOperand * rightOperand;
                break;
                case '/': result =leftOperand / rightOperand;
                break;
                case '%': result =leftOperand % rightOperand;
                break;
                case '**': result =leftOperand ** rightOperand;
                break;         
                       
        }
        console.log(result);
}

solve(5, 6, '+');