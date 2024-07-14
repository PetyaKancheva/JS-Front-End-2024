function solve(inputArray, countRotations){
        const actualRotations = countRotations% inputArray.length;
        const leftSide=inputArray.splice(0,actualRotations);
        
    console.log(inputArray.concat(leftSide).join(' '));

}




solve([2, 4, 15, 31], 5)