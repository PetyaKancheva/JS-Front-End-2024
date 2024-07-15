function solve(order, quantity) {
    let cost = 0;
    switch (order) {
        case 'coffee':
            cost = 1.5 * quantity;
            break;
        case 'water':
            cost = 1 * quantity;
            break;
        case 'coke':
            cost = 1.4 * quantity;
            break;
        case 'snacks':
            cost = 2 * quantity;
            break;
    }
    console.log(cost.toFixed(2));

}

solve("water", 5)