
function solve(speed, area) {
    let speedLimit;
    switch (area) {
        case 'city': speedLimit = 50; break;
        case 'interstate': speedLimit = 90; break;
        case 'residential': speedLimit = 20; break;
        case 'motorway': speedLimit = 130; break;
    }
    let speedDifference = speed - speedLimit  ;
    if (speedDifference<=0){
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    }else{
            let status='';
        if(speedDifference<=20){
            status='speeding';
        }else if(speedDifference<=40){
            status='excessive speeding';
        }else{
            status='reckless driving';
        }

        console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);

    }

    
}
/* •	On the interstate, the limit is 90 km/h
•	In the city, the limit is 50 km/h 
•	Within a residential area, the limit is 20 km/h */

solve(200, 'motorway');