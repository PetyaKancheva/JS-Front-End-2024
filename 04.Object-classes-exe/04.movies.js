function solve(input){
        // object info must be name, director, and date. 
        const movieList= [];
        for (const command of commands) {
            if(command.startsWith('addMovie')){
    
                const [,name] =command.split('addMovie ');
                movieList.push({name});
            }  else if(command.includes('directedBy')){
                const [name,director] =command.split(' directedBy ');
                const movie= movieList.find(movie=>movie?.name === name);
                if(movie?.name){
                    movie.director=director;
                }
    
            }else if(command.includes('onDate')){
                const [name,date] =command.split(' onDate ');
                const movie= movieList.find(movie=>movie?.name === name);
                if(movie?.name){
                    movie.date=date;
                }
    
            }
        }
 
     
}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    )