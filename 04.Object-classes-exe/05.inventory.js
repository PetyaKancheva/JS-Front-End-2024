function solve(input){
            const register=[];
            input.forEach(el => {
              const heroArr=  el.split(' / ');
              const hero={name:heroArr[0],level:Number(heroArr[1]),items:heroArr[2].split(', ')};
            
                register.push(hero);
            });
   
            const sortedArr= register.sort((a, b ) =>a.level-b.level);
            sortedArr.
            forEach(el=>{
                console.log(`Hero: ${el.name}`);
                console.log(`level => ${el.level}`);
                console.log(`items => ${el.items.join(', ')}`);



                
            })
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )