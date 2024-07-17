function solve(inputArr){
    const getStringArray =(num)=>num.toString().split('');
    for(input of inputArr){
        const regularString=getStringArray(input).join('');
        const reverseString=getStringArray(input).reverse().join('');
       (regularString===reverseString) ? console.log('true') : console.log('false');
        }             
}
solve([32,2,232,1010])