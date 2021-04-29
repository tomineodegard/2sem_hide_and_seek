let myRand;
let points;
let life;
let speed;

const timer = document.querySelector("#time_star_container");

const figur1 = document.querySelector("#figur1_container");
const figur2 = document.querySelector("#figur2_container");
const figur3 = document.querySelector("#figur3_container");
const figur4 = document.querySelector("#figur4_container");
const figur5 = document.querySelector("#figur5_container");




window.addEventListener("load", showPage);

function showPage() {
    console.log("showPage");

    document.querySelector("#play").addEventListener("click", startGame);
    document.querySelector("#level_complete").classList.add("hidden");
    document.querySelector("#game_over").classList.add("hidden");
}


function startGame() {
    console.log("startGame");

    //Hide startscreen
    document.querySelector("#start").classList.add("hidden");

    //Starter animationen
    timer.classList.add("time");

    //Reset points to 0
    points = 0;
    document.querySelector("#score_board").innerHTML = points;

    //Reset points to 3
    life = 3;

    //reset speed
    speed = 1;

    //Start timer

    timer.firstElementChild.classList.add("time");
    timer.addEventListener("animationend", stopGame);



    // Gives a random position with a random delay to a container
    myRand = Math.floor(Math.random() * 4) + 1;
    figur1.classList.add("pos" + myRand)
    myRand = Math.floor(Math.random() * 4) + 1;
    figur1.classList.add("delay" + myRand)
    figur1.classList.add("speed" + speed);

    myRand = Math.floor(Math.random() * 4) + 1;
    figur2.classList.add("pos" + myRand);
    myRand = Math.floor(Math.random() * 4) + 1;
    figur2.classList.add("delay" + myRand)
    figur2.classList.add("speed" + speed);

    myRand = Math.floor(Math.random() * 4) + 1;
    figur3.classList.add("pos" + myRand);
    myRand = Math.floor(Math.random() * 4) + 1;
    figur3.classList.add("delay" + myRand)
    figur3.classList.add("speed" + speed);

    myRand = Math.floor(Math.random() * 4) + 1;
    figur4.classList.add("pos" + myRand);
    myRand = Math.floor(Math.random() * 4) + 1;
    figur4.classList.add("delay" + myRand)
    figur4.classList.add("speed" + speed);

    myRand = Math.floor(Math.random() * 4) + 1;
    figur5.classList.add("pos" + myRand);
    myRand = Math.floor(Math.random() * 4) + 1;
    figur5.classList.add("delay" + myRand)
    figur5.classList.add("speed" + speed);



    //Start jump animation on all elements
    figur1.classList.add("jump");
    figur2.classList.add("jump");
    figur3.classList.add("jump");
    figur4.classList.add("jump");
    figur5.classList.add("jump");


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




/**************************** BAD - GREEN GIRL *************************************/
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
    // set the classes back to 0
    this.classList = "";
    console.log(this);
    this.firstElementChild.classList = "";
    this.removeEventListener("animationend", figur1Reset);

    //For at kunne genstarte op_ned animationen, da vi fjener og tilføjer den i samme function
    this.offsetHeight;



    // adds a new random position to the game element
    myRand = Math.floor(Math.random() * 4) + 1;
    console.log("position for figur1 is now " + myRand);
    this.classList.add("pos" + myRand);

    myRand = Math.floor(Math.random() * 4) + 1;
    this.classList.add("delay" + myRand);
    this.classList.add("speed" + speed);


    // animation jump begins
    this.classList.add("jump");
    this.addEventListener("mousedown", clickFigurBadHandler);
}



/**************************** GOOD - PURPLE GIRL *************************************/
function clickFigurGoodHandler() {
    console.log("clickFigurGoodHandler");
    this.removeEventListener("mousedown", clickFigurGoodHandler);

    this.classList.add("pause");
    this.firstElementChild.classList.add("click_good");
    this.addEventListener("animationend", figur4Reset);


    points += 1;
    document.querySelector("#score_board").innerHTML = points;


    if (life <= 0) {
        console.log("life <= 0");
        stopGame();
    }



}

function figur4Reset() {
    console.log("figur4Reset");
    this.classList = "";
    console.log(this);
    this.firstElementChild.classList = "";
    this.removeEventListener("animationend", figur4Reset);

    this.offsetHeight;


    myRand = Math.floor(Math.random() * 4) + 1;
    console.log("position for figur4 is now " + myRand);
    this.classList.add("pos" + myRand);

    myRand = Math.floor(Math.random() * 4) + 1;
    this.classList.add("delay" + myRand);
    this.classList.add("speed" + speed);



    this.classList.add("jump");
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
        gameOver();
    } else if (points >= 5) {
        levelComplete();
    } else {
        gameOver();
    }

}


function gameOver() {
    console.log("gameOver");
    document.querySelector("#game_over").classList.remove("hidden");
    document.querySelector("#play_again_pink").addEventListener("click", startGame);



}

function levelComplete() {
    console.log("levelComplete");
    document.querySelector("#level_complete").classList.remove("hidden");
}
