function solve(array){
    let sortedArray=array.slice().sort((a,b)=>Number(a) - Number(b));
     let n=parseInt(sortedArray.length/2);
    //  if(sortedArray.length % 2!==0){
        
    //     n++;
    //  }
    let newArray=new Array(sortedArray.length).fill(0).map((zeroValue,index)=>{
        const isEven = index % 2 ===0;
        // fix for êleven
       return isEven ? sortedArray.shift() : sortedArray.pop();
    });
   
    
    return newArray;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));