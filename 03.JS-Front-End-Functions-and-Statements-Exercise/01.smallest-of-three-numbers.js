function solve(first,second, third){
    let smallestNum = first;
        if(first>second){
            smallestNum=second;
        }
        if (smallestNum>third){
            smallestNum=third;
        }
        console.log(smallestNum);
      
}

solve(2,
    2,
    2
    )