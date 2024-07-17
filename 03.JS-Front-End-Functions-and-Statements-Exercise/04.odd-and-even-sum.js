function solve(num){
    let evenArray=[];
    let oddArray=[];
    
   while (num>0){
        let currentDigit= parseInt(num)%10;
            
        currentDigit%2==0 ? evenArray.push(currentDigit) : oddArray.push(currentDigit);
        num= parseInt(num)/10;
    }
    const getSumOfDigits = (arr) => arr.reduce((a1,a2)=>(a1+a2));
    const sumOddArray = getSumOfDigits(oddArray);
    const sumEvenArray = getSumOfDigits(evenArray);
    

    console.log(` Odd sum = ${sumOddArray}, Even sum = ${sumEvenArray}`);
}
solve(3495892137259234)