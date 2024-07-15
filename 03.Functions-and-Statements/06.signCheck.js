function solve(first, second, third){
     const multiply = (a,b) => a*b;
        const product = multiply(first ,multiply(second,third));
        return product>=0 ?console.log('Positive') : console.log('Negative');; 
}

solve(-6,
    -12,
     14
    
   )

//    function solve(first, second, third){


//     return first*second*third>=0 ?console.log('Positive') : console.log('Negative');; 
// }