function solve(inputArray) {
    let sortedArray = inputArray.sort();
    for (let i = 0; i <= inputArray.length - 1; i++) {
        console.log(`${i + 1}.${sortedArray[i]}`);
    }
}

solve(["John"])