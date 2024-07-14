function solve(inputArray) {
    inputArray.sort((a, b) => a.localeCompare(b)).map((name,i)=>{
        console.log(`${i + 1}.${name}`);
    });
}

solve(["John", "Bob", "Christina", "Ema"])