function solve(first, second){
     const findFactoral = (a) => {
        let result=1;
        for(let i=1;i<=a;i++){
            result*=i;
     }
    return result;}

    const resultOfDivision = findFactoral(first)/findFactoral(second);
    console.log(resultOfDivision.toFixed(2)); 

}


solve(6,
    2
    
    )