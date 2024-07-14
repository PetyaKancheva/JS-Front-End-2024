function solve(text) {
        const regex= /[^a-zA-Z]/g;
    text.split(' ').forEach(word =>{
        if( word.startsWith('#')){
            const newWord = word.substring(1);
            if(newWord.match(regex)){               
            }else{
                console.log(newWord);      
        }}});
  
}

solve('Nowadays everyone uses #. to tag a #special word in #socialMedia')