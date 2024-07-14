function solve(inputArray, step) {
    let outputArray = [];
    inputArray.forEach((element, i) => {
        if (i % step == 0) {
            outputArray.push(element);
        }
    });
    return outputArray;
}
console.log(
    solve(['5', 
        '20', 
        '31', 
        '4', 
        '20'], 
        2
));


