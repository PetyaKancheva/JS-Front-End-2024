function solve(input){
        const [wordsToSearchString,...wordsArr]=input;
        // const wordsToSearch=wordsToSearchString.split(' ');
        const wordsToSearchObj=[];
        wordsToSearchString.split(' ').forEach(element => {
            const wordObject={};
            wordObject[element]=0;
            wordsToSearchObj.push(wordObject);
        });

        wordsArr.forEach(word=>{
            const keys =Object.values(wordsToSearchObj);
            // const isfound= keys1.includes(word);
                console.log(word);
                            
        })
console.log();

}

solve([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    )