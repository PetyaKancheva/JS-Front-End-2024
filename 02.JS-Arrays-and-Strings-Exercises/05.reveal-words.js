function solve(words, sentence){
    const wordArr =words.split(', ');
    const contWords=wordArr.length;
    let newSentence=sentence;
    for( let i=0; i<contWords;i++){
        const countLetters=wordArr[i].length;
        newSentence=newSentence.replace('*'.repeat(countLetters), wordArr[i]);
    }
    
    console.log(newSentence);

}
solve('great, learning',
'softuni is ***** place for ******** new programming languages'
)