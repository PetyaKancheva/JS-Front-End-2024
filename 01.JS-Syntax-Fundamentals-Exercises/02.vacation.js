function solve(groupSize,typeGroup,dayOfWeek){
    const isStudents= typeGroup==='Students' ;
    const isBusiness= typeGroup==='Business' ;
    const isRegular= typeGroup==='Regular' ;
    const isFriday =dayOfWeek ==='Friday';
    const isSaturday =dayOfWeek ==='Saturday';
    const isSunday =dayOfWeek ==='Sunday';

        if( isStudents && isFriday ){
            price= 8.45;
        }
        if( isStudents && isSaturday ){
            price= 9.80;
        }
        if( isStudents && isSunday ){
            price= 10.46;
        }
        if( isBusiness && isFriday ){
            price= 10.90;
        }
        if( isBusiness && isSaturday ){
            price= 15.60;
        }
        if( isBusiness && isSunday ){
            price=16;
        }
        if( isRegular && isFriday ){
            price= 15;
        }
        if( isRegular && isSaturday ){
            price= 20;
        }
        if( isRegular && isSunday ){
            price=22.50;
        }
        let totalPrice;
        totalPrice
        if (isStudents && groupSize>= 30){
            price=price*0.85;
            totalPrice=price*groupSize;
        } else if(isBusiness && groupSize>= 100){
            totalPrice=price*(groupSize-10);
        }else if(isRegular && groupSize>= 10 && groupSize<=20 ){
            price=price*0.95;
            totalPrice=price*groupSize;
        }else{
            totalPrice=price*groupSize;
        }


    console.log(`Total price: ${totalPrice.toFixed(2)}` );
}



solve(40,    "Regular",    "Saturday")
