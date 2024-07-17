function solve(num){
        numArray= new Array(num).fill(String(num));
   
        function repeatArray (array,num) {
            for(let i=0;i<num;i++){
                console.log(array.join(' '))
            }} 
        repeatArray(numArray,num);  
}

solve(3);