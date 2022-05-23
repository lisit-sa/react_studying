"use strict";

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели', '');

let personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};

for (let i = 0; i < 2; i++) {

    var lastFilmName = prompt('Один из последних просмотренных фильмов?', '');
    var lastFilmRate = prompt('На сколько оцените его?', '');
    
    if (lastFilmName === '' || lastFilmName === null || lastFilmName.length > 50 || lastFilmRate === '' || lastFilmRate === null) {
        i--;
    } else { 
        personalMovieDB.movies[lastFilmName] = lastFilmRate;
    }
    console.log(i);
}

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (10 < personalMovieDB.count < 30){
    console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);


