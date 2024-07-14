function solve(word,text){
   const newString =text.toLocaleLowerCase();
    	if(newString.includes(word.toLocaleLowerCase())){
                console.log(word);
        }else{
            console.log(`${word} not found!`);
        }
}

solve ('javascript',
'JavaScript is the best programming language'

)