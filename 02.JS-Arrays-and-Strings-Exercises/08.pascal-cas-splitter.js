function solve(text){
        const regex = /[A-Z][a-z]*/g;
            let newArr = text.match(regex);
      console.log(   newArr.join(', ')   );
}

solve('HoldTheDoor')