'use strict'; // Для написания современного кода
const number0fFilms = +prompt('Сколько фильмов вы уже посмотрели ?',''); // Модальное окно которое записывается в переменную

// Создаем Объект "База данных пользователя" записываем в переменную personalMovieDB
const personalMovieDB = {
    count: number0fFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
 };

// Создаем 4 переменных с опросом у пользователя ччерез модальное окно
const a = prompt('Один из просмотренных фильмов',''),
      b = prompt('На сколько оцените его','0-10'),
      c = prompt('Один из просмотренных фильмов',''),
      d = prompt('На сколько оцените его','0-10');
// записываем в объект "Базу данных" obj personalMoviesDB 
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);

