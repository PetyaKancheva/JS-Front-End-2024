function solve(firstLetter, secondLetter ){
    let output='';
    const indexFirstLetter=firstLetter.charCodeAt(0);
    const indexSecondLetter=secondLetter.charCodeAt(0);
    if (indexFirstLetter<indexSecondLetter){
        for (let i=indexFirstLetter+1;i<indexSecondLetter;i++){
            output +=String.fromCharCode(i) +' ';
         }
        
    }else{
        for (let i=indexSecondLetter+1;i<indexFirstLetter;i++){
            output +=String.fromCharCode(i) +' ';
         }
    }
   
    console.log(output)
}

solve('C',
'#'

)