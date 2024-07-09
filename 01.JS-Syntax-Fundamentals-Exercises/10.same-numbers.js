function solve (num){
    let stringNum=String(num);
    let sum=0;
    for (let i=0; i<stringNum.length; i++){
            sum+=Number(stringNum.charAt(i));
    }
    let isSame=true;
    for (let i=0; i<stringNum.length-1; i++){
       if(stringNum.charAt(i)!== stringNum.charAt(i+1)){
        isSame=false;
        }
    }
       console.log(isSame);
    console.log(sum);
}

solve(22222);