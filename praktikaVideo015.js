'use strict'; // для ES6  чтобы работал совермменый код
// Создаем переменную с модальным окном. Опрос пользователя через модальное окно браузера
const numberofFilms = +prompt('Сколько фильмов вы просмотрели?', '');
// Создаем объект как базу данных о фильме
const personalMovieDB = {
    count: numberofFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
// Создаем цыкл для уменьшение кода. В цикле задаем вопрос через модальное окно браузера
for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?',''),
          b = prompt('На сколько оцените его?', '');
    // Делаем проверку на то что строка не null и не пустая строка, потом делаем проверку на длину строки.
    if (a != null && b != null && a != '' && b != '' && a.length < 50  ) {
        personalMovieDB.movies[a] = b;
        console.log('Все верно!');
    } else {
        console.log('error!!');
        i--;
    }
}
// Делаем проверку на количество просмотренных фильмов
if (personalMovieDB.count < 10) {
    console.log ('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Вы класический зритель!');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман!!!');
} else {
    console.log('Error!!!');
}



console.log(personalMovieDB);

