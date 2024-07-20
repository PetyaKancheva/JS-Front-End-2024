function solve(number){
        const count= number/10;
        
       
       count===10 ?  printComplete() : printLoading (number);
       function printComplete(){
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]')} ;
        function printLoading (num){
            let restSymbols=10-count;
            console.log(`${number}% [${'%'.repeat(count)}${'.'.repeat(restSymbols)}]`);
            console.log('Still loading...');
        }
}

solve (30)