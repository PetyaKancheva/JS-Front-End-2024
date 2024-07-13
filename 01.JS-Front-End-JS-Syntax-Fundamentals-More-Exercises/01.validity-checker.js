
function solve(x1,y1, x2,y2){
    
    // {x1, y1} to {0, 0} first check

    let isValid;
    
    for (let i=1; i<= 3;i++){

        switch (i){
            case (1):
                 firstXix =x1;
                 firstYpsilon =y1;
                   secondXix=0;
                   secondYpsilon=0;
                break;
            case(2):
              firstXix =x2;
               firstYpsilon =y2;
             secondXix=0;
              secondYpsilon=0;

            break;
            case (3): 
             firstXix =x1;
             firstYpsilon =y1;
             secondXix=x2;
             secondYpsilon=y2;

            break;
        }
       

        let result = Math.sqrt((secondXix-firstXix)**2 +(secondYpsilon-firstYpsilon)**2)
        if (result%1==0){
            isValid='valid';
        }else{
            isValid='invalid';
        }
        
        console.log(`{${firstXix}, ${firstYpsilon}} to {${secondXix}, ${secondYpsilon}} is ${isValid}`);
    }
}




solve(3, 0, 0, 4);