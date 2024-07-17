function solve(password){

    function hasCorrectLength(password){
        const minLength=6;
        const maxLength=10;
        return password.length>=minLength && password.length<=maxLength;
    }
    function hasLettersAndDigits(password){
        const regex=/^[A-Za-z0-9]+$/g;
        return password.match(regex);
    }
    function hasMinimumTwoDigits(password){
        const regex=/[0-9]{2,}/g;
        return password.match(regex);
    }

     let messages=[];
    if(!hasCorrectLength(password)){
         messages.push("Password must be between 6 and 10 characters");
    }
    if(!hasLettersAndDigits(password)){
         messages.push("Password must consist only of letters and digits");
    }
    if(!hasMinimumTwoDigits(password)){
        messages.push("Password must have at least 2 digits")
    }
    if(messages.length===0){
        messages.push("Password is valid")
    }

    messages.forEach(msg=>console.log(msg));
}

solve('Pa$s$s');