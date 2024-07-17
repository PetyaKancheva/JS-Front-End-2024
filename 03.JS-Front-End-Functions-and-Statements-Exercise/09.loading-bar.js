function solve(number){
        const count= number/10;
        
       
       count===10 ?  printComplete() : printLoading (number);
       function printComplete(){
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]')} ;
        function printLoading (num){
            const arrayStart=new Array(count).fill('%');
            const arrayEnd = new Array(10-count).fill('.');
            const resultArray= arrayStart.concat(arrayEnd);
            console.log(`${number}% [${resultArray.join('')}]`);
            console.log('Still loading...');
        }
}

solve (30)