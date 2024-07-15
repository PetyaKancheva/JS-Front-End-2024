function solve(num,power){
    function powerMath(num,power){
        let result=1;
        for(let i=1;i<=power;i++){
            result*=num;
        }
        return result;
    }
        return powerMath(num,power);
}

console.log(solve(3,4));

