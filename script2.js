'use strict';

const numberofFilms = +prompt('Сколько фильмов вы уже посмотрели?',''),
      a = prompt('Один из последних просмотренных фильмов?',''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?',''),
      d = prompt('На сколько оцените его?', '');


const personalMovieDB = {
    count: numberofFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);