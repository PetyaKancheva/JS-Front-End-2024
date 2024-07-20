function solve(num) {
    function isPositive(a) {
        return (a >= 0)
    };
    function getDivisors(num) {
        let arrayDivisors = []
        for (let divisor = 1; divisor < num/2; divisor++) {
            if (num % divisor === 0) {
                arrayDivisors.push(divisor);
            }
        }
        return arrayDivisors;
    }
    const sumArray = array =>array.reduce((a,b)=>(a+b));

   function isProperlyDivisible(num){
        let sumDiv=sumArray( getDivisors(num));
        return(sumDiv===num);
   };
isPositive(num) && isProperlyDivisible(num) ? console.log('We have a perfect number!') : console.log("It's not so perfect.");
}
solve(1236498)