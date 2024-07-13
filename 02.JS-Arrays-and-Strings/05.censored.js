function solve(text, word){
         const countChar = word.length;
           
            while (text.includes(word)){
                 text=text.replace(word,`${'*'.repeat(countChar)}`);
            }
        console.log(text);
}




solve('Find the hidden word', 'hidden');