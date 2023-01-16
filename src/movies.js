// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(movie => movie.director)
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if(moviesArray.length === 0){
        return 0;
    }
    let count = 0;
    moviesArray.forEach(movie => {
        if(movie.director === 'Steven Spielberg' && movie.genre === 'Drama'){
            count++;
        }
    });
    return count;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0){
    return 0;
    }
    let totalScore = 0;
    let count = 0;
    moviesArray.forEach(movie => {
    if(movie.score){
        totalScore += movie.score;
        count ++;
        }
    });
    return Number((totalScore/count).toFixed(2));
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if(moviesArray.length === 0){
        return 0;
    }
    let dramaMovies = moviesArray.filter(movie => movie.genre === 'Drama' && movie.score);
    if(dramaMovies.length === 0){
        return 0;
    }
    if(dramaMovies.length === 1){
        return dramaMovies[0].score
    }
    let totalScore = dramaMovies.reduce((sum, movie) => sum + movie.score, 0);
    return Number((totalScore/dramaMovies.length).toFixed(2));
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let newArray = [...moviesArray];
    newArray.sort((a, b) => {
        if (a.year !== b.year) {
            return a.year - b.year;
        }
        return a.title.localeCompare(b.title);
    });
    return newArray;
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let newArray = [...moviesArray];
    newArray = newArray.map(movie => movie.title);
    newArray.sort();
    return newArray.slice(0, 20);
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
