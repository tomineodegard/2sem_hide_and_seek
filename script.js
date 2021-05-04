let myRand;
let points;
let life;
let speed;
let posArray = ["pos1", "pos2", "pos3", "pos4", "pos5", "pos6", "pos7", "pos8", "pos9", "pos10"];


const timer = document.querySelector("#time_star_container");

const figur1 = document.querySelector("#figur1_container");
const figur2 = document.querySelector("#figur2_container");
const figur3 = document.querySelector("#figur3_container");
const figur4 = document.querySelector("#figur4_container");
const figur5 = document.querySelector("#figur5_container");

const heart1 = document.querySelector("#heart1");
const heart2 = document.querySelector("#heart2");
const heart3 = document.querySelector("#heart3");

const gameOverPointsText = document.querySelector("#game_over_points_text");
const gameOverPointsText2 = document.querySelector("#game_over_points_text2");


window.addEventListener("load", showPage);


function showPage() {
    console.log("showPage");


    document.querySelector("#play_btn").addEventListener("click", startGame);
    document.querySelector("#level_completescreen").classList.add("hidden");
    document.querySelector("#game_over_points_screen").classList.add("hidden");
    document.querySelector("#game_over_lives_screen").classList.add("hidden");
}


function startGame() {
    console.log("startGame");

    //Hides all unnecesacry screens
    document.querySelector("#startscreen").classList.add("hidden");
    document.querySelector("#level_completescreen").classList.add("hidden");
    document.querySelector("#game_over_points_screen").classList.add("hidden");
    document.querySelector("#game_over_lives_screen").classList.add("hidden");


    posArray = ["pos1", "pos2", "pos3", "pos4", "pos5", "pos6", "pos7", "pos8", "pos9", "pos10"];

    //Start time animation
    timer.classList.add("time");

    //Reset points to 0
    points = 0;
    document.querySelector("#score_board_star_container").innerHTML = points;

    //Reset points to 3
    life = 3;
    heart1.classList.remove("hidden");
    heart2.classList.remove("hidden");
    heart3.classList.remove("hidden");

    //Reset speed
    speed = 1;

    //Start timer
    timer.firstElementChild.classList.add("time");
    timer.addEventListener("animationend", stopGame);



    shuffle(posArray);
    console.log("Full array " + posArray);

    //sætter den første position fra det netop blandede posArray på samt jump; shift() fjerner den indsatte position fra arrayet, efter den er brugt

    figur1.classList.add(posArray.shift(), "jump");
    myRand = Math.floor(Math.random() * 4) + 1;
    figur1.classList.add("delay" + myRand)
    figur1.classList.add("speed" + speed);


    figur2.classList.add(posArray.shift(), "jump");
    myRand = Math.floor(Math.random() * 4) + 1;
    figur2.classList.add("delay" + myRand)
    figur2.classList.add("speed" + speed);

    figur3.classList.add(posArray.shift(), "jump");
    myRand = Math.floor(Math.random() * 4) + 1;
    figur3.classList.add("delay" + myRand)
    figur3.classList.add("speed" + speed);

    figur4.classList.add(posArray.shift(), "jump");
    myRand = Math.floor(Math.random() * 4) + 1;
    figur4.classList.add("delay" + myRand)
    figur4.classList.add("speed" + speed);

    figur5.classList.add(posArray.shift(), "jump");
    myRand = Math.floor(Math.random() * 4) + 1;
    figur5.classList.add("delay" + myRand)
    figur5.classList.add("speed" + speed);


    //Listen for jump animation to be done
    figur1.addEventListener("animationiteration", figur1Reset);
    figur2.addEventListener("animationiteration", figur4Reset);
    figur3.addEventListener("animationiteration", figur4Reset);
    figur4.addEventListener("animationiteration", figur4Reset);
    figur5.addEventListener("animationiteration", figur4Reset);


    //Listen for a mousedown-event
    figur1.addEventListener("mousedown", clickFigurBadHandler);
    figur2.addEventListener("mousedown", clickFigurGoodHandler);
    figur3.addEventListener("mousedown", clickFigurGoodHandler);
    figur4.addEventListener("mousedown", clickFigurGoodHandler);
    figur5.addEventListener("mousedown", clickFigurGoodHandler);



    //Listen for the time-expire
    timer.firstElementChild.addEventListener("animationend", stopGame);
}




/************ BAD - GREEN POWERPUFF **************/
function clickFigurBadHandler() {
    console.log("clickFigurBadHandler");
    // removes the mousedown - not able to click several times
    this.removeEventListener("mousedown", clickFigurBadHandler);

    // pauses the animation when clicked
    this.classList.add("pause");



    // new animation starts on sprite element (Sprite er firstElementChild)
    this.firstElementChild.classList.add("click_bad");

    // game element is directed to a reset, with a new position when animation is done
    this.addEventListener("animationend", figur1Reset);


    // loose life by clicking figur1
    console.log("Life = " + life);
    document.querySelector("#heart" + life).classList.add("hidden");
    life -= 1;


    if (life <= 0) {
        console.log("life <= 0");
        stopGame();
    }
}

function figur1Reset() {
    console.log("figur1Reset");
    this.removeEventListener("animationend", figur1Reset);

    //Laver classList om til en string (bogstaver)
    let test = String(this.classList);

    //Gemmer den class der har pos og et tal efter f.eks. pos8 og laver det om til en string
    let matches = String(test.match(/pos\d+/));
    //Sætter den positioner der var på elemetet tilbage i arrayet
    posArray.push(matches);



    // set the classes back to 0
    this.classList = "";
    this.firstElementChild.classList = "";

    //For at kunne genstarte op_ned animationen, da vi fjener og tilføjer den i samme function
    this.offsetHeight;


    // adds a new random position to the game element
    this.classList.add(posArray.shift(), "jump");

    // myRand = Math.floor(Math.random() * 4) + 1;
    this.classList.add("delay" + myRand);
    this.classList.add("speed" + speed);


    // animation jump begins
    this.addEventListener("mousedown", clickFigurBadHandler);
}



/******** GOOD - PURPLE POWERPUFF *************/
function clickFigurGoodHandler() {
    console.log("clickFigurGoodHandler");
    this.removeEventListener("mousedown", clickFigurGoodHandler);

    this.classList.add("pause");
    this.firstElementChild.classList.add("click_good");
    this.addEventListener("animationend", figur4Reset);


    points += 1;
    document.querySelector("#score_board_star_container").innerHTML = points;


    if (life <= 0) {
        console.log("life <= 0");
        stopGame();
    }



}

function figur4Reset() {
    console.log("figur4Reset");

    //Laver classList om til en string (bogstaver)
    let test = String(this.classList);

    //Gemmer den class der har pos og et tal efter f.eks. pos8 og laver det om til en string
    let matches = String(test.match(/pos\d+/));
    //Sætter den positioner der var på elemetet tilbage i arrayet
    posArray.push(matches);

    this.classList = "";
    this.firstElementChild.classList = "";
    this.removeEventListener("animationend", figur4Reset);

    this.offsetHeight;

    this.classList.add(posArray.shift(), "jump");
    console.log(posArray);
    this.classList.add("delay" + myRand);
    this.classList.add("speed" + speed);

    this.addEventListener("mousedown", clickFigurGoodHandler);
}



function stopGame() {
    console.log("stopGame");
    console.log("times up, you earned " + points + "points!");

    //ryd op, fjern alt på alle container og sprite
    timer.firstElementChild.classList.remove("time");
    timer.removeEventListener("animationend", stopGame);

    figur1.classList = "";
    figur1.firstElementChild.classList = "";
    figur1.removeEventListener("mousedown", clickFigurBadHandler);
    figur1.removeEventListener("animationiteration", figur1Reset);
    figur1.firstElementChild.removeEventListener("animationend", figur1Reset);

    figur3.classList = "";
    figur3.firstElementChild.classList = "";
    figur3.removeEventListener("mousedown", clickFigurGoodHandler);
    figur3.removeEventListener("animationiteration", figur4Reset);
    figur3.removeEventListener("animationend", figur4Reset);

    figur4.classList = "";
    figur4.firstElementChild.classList = "";
    figur4.removeEventListener("mousedown", clickFigurGoodHandler);
    figur4.removeEventListener("animationiteration", figur4Reset);
    figur4.removeEventListener("animationend", figur4Reset);

    figur2.classList = "";
    figur2.firstElementChild.classList = "";
    figur2.removeEventListener("mousedown", clickFigurGoodHandler);
    figur2.removeEventListener("animationiteration", figur4Reset);
    figur2.removeEventListener("animationend", figur4Reset);

    figur5.classList = "";
    figur5.firstElementChild.classList = "";
    figur5.removeEventListener("mousedown", clickFigurGoodHandler);
    figur5.removeEventListener("animationiteration", figur4Reset);
    figur5.removeEventListener("animationend", figur4Reset);




    if (life <= 0) {
        gameOverLives();
    } else if (points >= 5) {
        levelComplete();
    } else {
        gameOverPoints();
    }

}


function gameOverPoints() {
    console.log("gameOverPoints");
    document.querySelector("#game_over_points_screen").classList.remove("hidden");


    gameOverPointsText.textContent = points;
    gameOverPointsText2.textContent = "10";


    document.querySelector("#try_again_pink_btn1").addEventListener("click", startGame);
    document.querySelector("#meny_blue_btn1").addEventListener("click", showPage);
    document.querySelector("#startscreen").classList.remove("hidden");

}


function gameOverLives() {
    console.log("gameOverLives");
    document.querySelector("#game_over_lives_screen").classList.remove("hidden");

    document.querySelector("#try_again_pink_btn2").addEventListener("click", startGame);
    document.querySelector("#meny_blue_btn2").addEventListener("click", showPage);
    document.querySelector("#startscreen").classList.remove("hidden");

}



function levelComplete() {
    console.log("levelComplete");
    document.querySelector("#level_completescreen").classList.remove("hidden");

    document.querySelector("#next_level_btn").addEventListener("click", startGame);
    document.querySelector("#meny_pink_btn").addEventListener("click", showPage);
    document.querySelector("#startscreen").classList.remove("hidden");
}


function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
