function solve(inputArr) {
    const [username, ...passwordArr] = inputArr;
    let password = '';
    for (let i = username.length - 1; i >= 0; i--) {
        password += username.charAt(i);
    }
    //try up tp 4 times
    let passwordTry = 4;
    while (passwordTry >= 1) {
         let passIterator= 4-passwordTry;
        if (password === passwordArr[passIterator]) {
            console.log(`User ${username} logged in.`) 
                break;        
        } else {       
            passwordTry == 1 ?console.log(`User ${username} blocked!`) : console.log('Incorrect password. Try again.'); 
        }
        passwordTry--;
    }
}

solve(['sunny','rainy','cloudy','sunny','not sunny']);