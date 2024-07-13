function solve(text, word){
        const stringArray=text.split(' ');
        let sum =0;
        for( let element of stringArray){
            if(element===word){
                sum++;
            }
        };
        console.log(sum);
    
};

solve('This is a word and it also is a sentence',
'is');