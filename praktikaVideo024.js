"use strict"; 

let numberofFilms;

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы просмотрели?', '');
        
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы просмотрели?', '');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log ('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log('Вы класический зритель!');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман!!!');
        } else {
            console.log('Error!!!');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) { // Если наша база данных не скрыта, то мы ее показываем.
           console.log(personalMovieDB);
        }
   },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 1; i++) {
            // let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            // if (genre == '' || genre == null) {
            //     console.log('Вы ввели не коректные данные!');
            //     i--;
            // }
            // personalMovieDB.genres[i-1] = genre;
            let genres = prompt(`Введите ваши любимые жанры через запятую`).toLocaleLowerCase();
            if (genres == '' || genres == null) {
                console.log('Вы ввели не коректные данные!');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} это ${item}`);
        });
    }
};

