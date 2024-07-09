function solve(el1, el2, el3, el4, el5, el6) {
    let number = Number(el1);
    let array = [el2, el3, el4, el5, el6];
    array.forEach(element => {
        switch (element) {
            case 'chop': number /= 2;break;
            case 'dice': number = Math.sqrt(number);break;
            case 'spice': number += 1;break;
            case 'bake': number *= 3;break;
            case 'fillet': number *= 0.8;break;
        }
        console.log(number.toFixed(2));
    });

}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');