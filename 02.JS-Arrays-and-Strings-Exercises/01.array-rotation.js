function solve(inputArray, countRotations){
        const actualRotations = countRotations% inputArray.length;
            let elementToMove;
        for(let i=1; i<=actualRotations;i++){
            elementToMove =inputArray.shift();
            inputArray.push(elementToMove);
        }
    console.log(inputArray.join(' '));

}




solve([2, 4, 15, 31], 5)