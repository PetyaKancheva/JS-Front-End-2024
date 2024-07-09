function solve(typeFruit,weight,pricePerKF){
        let totalPrice=weight/1000*pricePerKF;
        console.log(`I need $${totalPrice.toFixed(2)} to buy ${(weight/1000).toFixed(2)} kilograms ${typeFruit}.`);


}

solve('orange', 2500, 1.80);