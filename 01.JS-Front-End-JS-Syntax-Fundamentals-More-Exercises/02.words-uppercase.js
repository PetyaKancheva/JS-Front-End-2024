function solve(text){
        
    let newArray = [];
    let stringArray=text.split(' ');
    for (let word of stringArray){
        newArray.push(( word.replace(/\W/g,'')).toUpperCase());
    }   
    
    console.log(newArray.join(', '));
    // console.log(    stringArray.map(let element -> element.toUpperCase()).join(','));

}



solve('Hi, how are you?')