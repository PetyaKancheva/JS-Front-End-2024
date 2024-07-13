function solve(array){
    let evenSum= 0;
    let oddSum=0;

    for (let element of array){
        let numberElement = Number(element);
       if( numberElement%2==0){
        evenSum+=numberElement;
       }else{
        oddSum+=numberElement;
       }

    }
        console.log(evenSum-oddSum);
}

solve([3,5,7,9]);