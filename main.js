'use strict';
const number0fFilms = +prompt('Сколько фильмов вы уже посмотрели ?','');

const personalMovieDB = {
    count: number0fFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
 };

const a = prompt('Один из просмотренных фильмов',''),
      b = prompt('На сколько оцените его','0-10'),
      c = prompt('Один из просмотренных фильмов',''),
      d = prompt('На сколько оцените его','0-10');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);

