function solve(inputArray){
    let codedSpell= inputArray[0];
    let i=1;
    let spell='';
    
    while(inputArray[i]!=='End'){
        const commandArray=inputArray[i].split('!');
        const firstCommand=commandArray[0];

        switch(firstCommand){
            case('RemoveEven'): 

            let result='';
            for( let i=0;i<codedSpell.length; i++){
                if(i%2==0){
                    result += codedSpell.charAt(i);
                }
            }
            codedSpell=result; 
            break;
            
            case('TakePart'):
            const startIndex=commandArray[1];
            const endIndex=commandArray[2];
            codedSpell = codedSpell.substring(startIndex,endIndex);
            break;
            
            case('Reverse'):
            const subString=commandArray[1];
            if(codedSpell.includes(subString)){
                codedSpell = codedSpell.replace(subString, '');
                const stringArray=subString.split('');
                const reversedArray= stringArray.reverse();
                codedSpell += reversedArray.join('');
            }else{
                console.log('Error');
                i++;
                continue;
            }

        }
        console.log(codedSpell);
        i++;
        continue;
    }
    
    console.log(`The concealed spell is: ${codedSpell}`);
    
}


solve(["asAsl2adkda2mdaczsa", 
    "RemoveEven",
    "TakePart!1!9",
    "Reverse!maz",
    "End"])
    