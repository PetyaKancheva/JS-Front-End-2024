function solve(firstLetter, secondLetter ){
    let output='';
    function getCharCodesFromCharacters(firstChar, secondChar){
        const indexFirstLetter=firstLetter.charCodeAt(0);
        const indexSecondLetter=secondLetter.charCodeAt(0);
        return [indexFirstLetter , indexSecondLetter ]
    }
    function getCharsInRange(indexFirstLetter,indexSecondLetter){
            const arrayLength = Math.abs(indexFirstLetter -indexSecondLetter);
            const startOfArray= Math.min(indexFirstLetter,indexSecondLetter)+1;
            const charArray = new Array(arrayLength-1).fill(0).map((_,i)=> startOfArray +i);
            return charArray;
    }
       const outputArray= getCharsInRange(getCharCodesFromCharacters(firstLetter,secondLetter)[0],getCharCodesFromCharacters(firstLetter,secondLetter)[1]).map(e => String.fromCharCode(e) );
   
    console.log(outputArray.join(' '));
}

solve('C',
'#'

)