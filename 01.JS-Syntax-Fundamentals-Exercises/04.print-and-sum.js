function solve(startNum,endNum){
    let result ="";
    let sum=0;
    for( let i=startNum; i<= endNum; i++){
        result = `${result} ${i}`
        sum +=i;
    }
    console.log(result);
    console.log(`Sum: ${sum}`);
}

solve(5, 10);