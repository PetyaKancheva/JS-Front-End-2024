function solve(startingYield){
    let days=0;
    let totalSpice=0;
    let dailyYeld=startingYield;
    const workersPerDay=26;
     while(dailyYeld>=100){

        totalSpice+=(dailyYeld -workersPerDay);
        dailyYeld -=10;
        days++;
     }
     if(totalSpice>=26){
     totalSpice-=workersPerDay;
    }
     console.log(days);
     console.log(totalSpice);

}








    solve(450)