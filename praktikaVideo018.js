"use strict"; 

let numberofFilms;

function start () {
    numberofFilms = +prompt('Сколько фильмов вы просмотрели?', '');

    while (numberofFilms == '' || numberofFilms == null || isNaN(numberofFilms)) {
        numberofFilms = +prompt('Сколько фильмов вы просмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberofFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?',''),
              b = prompt('На сколько оцените его?', '');
       
        if (a != null && b != null && a != '' && b != '' && a.length < 50  ) {
            personalMovieDB.movies[a] = b;
            console.log('Все верно!');
        } else {
            console.log('error!!');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log ('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('Вы класический зритель!');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман!!!');
    } else {
        console.log('Error!!!');
    }
}

detectPersonalLevel();

function showMyDB (hidden) {
     if (!hidden) { // Если наша база данных не скрыта, то мы ее показываем.
        console.log(personalMovieDB);
     }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres () {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres ();
