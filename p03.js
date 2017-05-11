//function printMovies();
//function movie(title,year,director,star1,star2,greatBecause,poster);


function movie(title,year,director,star1,star2,greatBecause,poster) {
	this.title = title;
	this.year = year;
	this.director = director;
	this.star1 = star1;
	this.star2 = star2;
	this.greatBecause = greatBecause;
	this.poster = poster;
}

var lastCrusade = new movie(
	"Indiana Jones and the Last Crusade",
	1989, 
	"Steven Spielberg", 
	"Harrison Ford",
	"Sean Connery",
	"The greatest film of all time, The Last Crusade has it all: comedy, adventure, father-son bonding, bombastic John Williams score, Hitler cameo, the Holy Grail, and that 800-year-old knight at the end.",
	"https://image.tmdb.org/t/p/original/g8qWglC2XXCIN8P51eCljFvCNNJ.jpg");
	
var threeAmigos = new movie(
	"Three Amigos!",
	1986,
	"John Landis",
	"Steve Martin",
	"Chevy Chase",
	"A simply delightful comedy western, inspired by \"The Magnificent Seven\", Three Amigos! sees three old-timey Hollywood silent film actors, played by Steve Martin, Chevy Chase, and Martin Short unwittingly accept roles as real-life gunfighters in a small Mexican village. Also, Randy Newman as the Singing Bush.",
	"https://image.tmdb.org/t/p/original/zuTwahw966MoFwD7B2SFujaT5yp.jpg");

var planesTrains = new movie(
	"Planes, Trains & Automobiles",
	1987,
	"John Hughes",
	"Steve Martin",
	"John Candy",
	"Quite possibly the late great John Hughes' greatest work, Planes, Trains \
	& Automobiles follows a surly Steve Martin and John Candy as his \
	obnoxiously chatty travel companion as they try to get to Chicago \
	in time for Thanksgiving dinner. Hilarious and poignant, if you aren't \
	teary-eyed by the end of this movie, you must be dead inside.",
	"https://image.tmdb.org/t/p/original/t7Rrs11VNjWAi8loMLhRe94gesE.jpg");

var youngFrank = new movie(
	"Young Frankenstein",
	1974,
	"Mel Brooks",
	"Gene Wilder",
	"Marty Feldman",
	"Of all Mel Brooks' great parody films, Young Frankenstein is the most \
	perfect. Lampooning the old Hollywood monster movies, primarily the \
	Frankenstein movies, there isn't a gag in this film which misses its \
	mark. It is the rare satire which retains its bite over forty years \
	after its initial release.",
	"https://image.tmdb.org/t/p/original/bWj0Stn422IoH589I7XM4f46vgp.jpg");

var defending = new movie(
	"Defending Your Life",
	1991,
	"Albert Brooks",
	"Albert Brooks",
	"Meryl Streep",
	"A strange, smart romantic comedy, Defending Your Life begins with the \
	main character's death in a car accident, at which point we jump to him \
	in the afterlife, where he must defend the choices he made throughout his \
	lifetime in front of a panel of judges. His defense counsel is provided \
	by the incomparable Rip Torn. During his trial in the celestial Judgement \
	City, he meets and falls in love with an also-deceased Meryl Streep. It's \
	a charming, unique film and you need to see it.",
	"https://image.tmdb.org/t/p/original/vnkDFcxcFaglZFDkIGzbcLuJKYv.jpg");

var movieList = [lastCrusade,threeAmigos,planesTrains,youngFrank,defending];

	
function printMovies() {
	for(var i = 0;i < movieList.length;i++){
		console.log(movieList[i]);
	}
}

function pickMovie() {
	randomMovie = Math.floor(Math.random() * (movieList.length));
	document.getElementById("title").innerHTML = movieList[randomMovie].title;
	document.getElementById("year").innerHTML = movieList[randomMovie].year;
	document.getElementById("director").innerHTML = "Director: " + movieList[randomMovie].director;
	document.getElementById("star1").innerHTML = movieList[randomMovie].star1;
	document.getElementById("star2").innerHTML = movieList[randomMovie].star2;
	document.getElementById("greatBecause").innerHTML = movieList[randomMovie].greatBecause;
	document.getElementById("poster").src = movieList[randomMovie].poster;
	
}

var totalScore = 0;
var totalTries = 0;

//define function to clear score cookie at start of game
function clearScore() {
	setCookie("correctAnswers", 0, 1);
	setCookie("totalAttempts", 0, 1);
}

function correctAnswer() {
	totalScore = Number(getCookie("correctAnswers"));
	totalScore += 1;
	setCookie("correctAnswers", totalScore, 1);
	totalTries = Number(getCookie("totalAttempts"));
	totalTries += 1;
	setCookie("totalAttempts", totalTries, 1);
	document.getElementById("results").classList.remove("hidden-message");
	document.getElementById("results").classList.add("shown-message");	
}

function wrongAnswer() {
	totalTries = Number(getCookie("totalAttempts"));
	totalTries += 1;
	setCookie("totalAttempts", totalTries, 1);
}

function getResults() {
	var result = (Number(getCookie("correctAnswers")) * 100) / Number(getCookie("totalAttempts"));
	if (isNaN(result)) {
		document.getElementById("results").innerHTML="0% Correct";
		document.getElementById("results").classList.remove("hidden-message");
		document.getElementById("results").classList.add("shown-message");		
	}
	else {
		document.getElementById("results").innerHTML=result.toFixed(2) + " % Correct";
		document.getElementById("results").classList.remove("hidden-message");
		document.getElementById("results").classList.add("shown-message");
	}
}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}