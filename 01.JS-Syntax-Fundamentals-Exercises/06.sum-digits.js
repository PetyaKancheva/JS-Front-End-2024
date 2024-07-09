function solve(num){
    const stringNum=String(num);
    let sum=0;
    for (let i=0 ;i< stringNum.length; i++){
     
        sum += Number( stringNum.charAt(i));
    }
      console.log(sum);

}

solve(245678);