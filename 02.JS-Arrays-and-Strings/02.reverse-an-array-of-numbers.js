
function solve(count, inputArray){
    const newArray=[];
    for (let i= 0;i<count; i++){
        let currentElement= inputArray[i];
        newArray.unshift(currentElement);
    }
    console.log(newArray.join(' '));
}

solve(3, [10, 20, 30, 40, 50]);