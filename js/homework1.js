"use strict";

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели', '');
const lastFilmName1 = prompt('Один из последних просмотренных фильмов?', ''),
    lastFilmRate1 = prompt('На сколько оцените его?', ''),
    lastFilmName2 = prompt('Один из последних просмотренных фильмов?', ''),
    lastFilmRate2 = prompt('На сколько оцените его?', '');
let personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};
personalMovieDB.movies[lastFilmName1] = lastFilmRate1;
personalMovieDB.movies[lastFilmName2] = lastFilmRate2;

console.log(personalMovieDB);
