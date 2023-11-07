"use strict";

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: true,


	start: function () {
		personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
	
		while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
		}
	},

	rememberMyFilms: function () {
		for (let i=0; i<2; i++) {
			const a = prompt("Один из последних просмотренных фильмов?", "").trim(),
			  b = prompt("На сколько оцените его?", "");
	
			if (a!=null && b!=null && a!="" && b!="" && a.length < 50) {
				personalMovieDB.movies[a] = b;
				console.log("done");
	
			} else {
				console.log("error");
				i--;
			}
		}
	},

	detectPersonalLevel: function () {
		if (personalMovieDB.count < 10) {
			console.log("Просмотрено довольно мало фильмов");
		} else if (personalMovieDB.count >=10 && personalMovieDB.count <30){
			console.log("Вы классический зритель"); 
		} else if (personalMovieDB.count >=30) {
			console.log("Вы киноман");
		} else {
			console.log("Произошла ошибка");
		}
	},

	writeYourGenres: function () {
		for (let i = 1; i<= 3; i++) {
			const a = prompt(`Ваш любимый жанр под номером ${i}`).trim();

			if (a!=null && a!="") {
				personalMovieDB.genres[i-1] = a;
				console.log("done genres");
			}
			else {
				console.log("error genres");
				i--;
			}
		}
		personalMovieDB.genres.forEach((item, i) => {
			console.log(`Любимый жанр # ${i+1} - это ${item}`);
		});
	},

	showMyDb: function (hidden) {
		if (!hidden) {
			console.log(personalMovieDB);
		}
	},

	toggleVisibleMyDb: function () {
		if (personalMovieDB.privat === false) {
			personalMovieDB.privat = true;
		}
		else {
			personalMovieDB.privat = false;
		}
	}
};


personalMovieDB.start();

personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();

personalMovieDB.toggleVisibleMyDb();

personalMovieDB.showMyDb(personalMovieDB.privat);

personalMovieDB.writeYourGenres();