function solve(countLostFights,helmetPrice,swordPrice,shieldPrice,armourPrice ){
        const  brokenHelmet = parseInt(countLostFights/2);
        const  brokenSword = parseInt(countLostFights/3);
        const  brokenShield = parseInt(countLostFights/6);
        let  brokenArmour=0; 
        if(brokenShield>=2){
            brokenArmour=parseInt(brokenShield/2);
        }
        const totalPrice=helmetPrice*brokenHelmet +swordPrice*brokenSword + shieldPrice*brokenShield +armourPrice*brokenArmour;

    console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`);
}


solve(23,
    12.50,
    21.50,
    40,
    200
    )