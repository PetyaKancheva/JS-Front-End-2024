function  solve(inputArray,n){
    let outputArray = [];
    for ( let i=0 ; i<=inputArray.length-1 ;i+=n){
        outputArray.push(inputArray[i]);
    }
     return outputArray;
}
console.log(
solve(['1', 
    '2',
    '3', 
    '4', 
    '5'], 
    6
    ));


