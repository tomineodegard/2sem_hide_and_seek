let myRand;
let points;
let life;


window.addEventListener("load", showPage);

function showPage() {
    console.log("show page");
    document.querySelector("#play").addEventListener("click", startGame);
}


function startGame() {
    console.log("startGame");

    //Hide startscreen
    document.querySelector("#start").classList.add("hidden");

    //Reset points to 0
    points = 0;
    document.querySelector("#score_board").innerHTML = points;

    //Reset points to 3
    life = 3;

    //Start timer
    document.querySelector("#time_sprite").classList.add("time");
    document.querySelector("#time_container").addEventListener("animationend", stopGame);



    // Gives a random position with a random delay to a container
    myRand = Math.floor(Math.random() * 4) + 1;
    document.querySelector("#figur1_container").classList.add("pos" + myRand, "delay1", "speed1");

    myRand = Math.floor(Math.random() * 4) + 1;
    document.querySelector("#figur4_container").classList.add("pos" + myRand, "delay2", "speed2");


    //Start jump animation on all elements
    document.querySelector("#figur1_container").classList.add("jump");
    document.querySelector("#figur4_container").classList.add("jump");

    //Listen for jump animation to be done
    document.querySelector("#figur1_container").addEventListener("animationiteration", figur1Reset);
    document.querySelector("#figur4_container").addEventListener("animationiteration", figur4Reset);


    //Listen for a mousedown-event
    document.querySelector("#figur1_container").addEventListener("mousedown", clickFigur1Handler);
    document.querySelector("#figur4_container").addEventListener("mousedown", clickFigur4Handler);


    //Listen for the time-expire
    document.querySelector("#time_sprite").addEventListener("animationend", stopGame);
}




/**************************** BAD - GREEN GIRL *************************************/
function clickFigur1Handler() {
    console.log("clickFigur1Handler");
    // removes the mousedown - not able to click several times
    document.querySelector("#figur1_container").removeEventListener("mousedown", clickFigur1Handler);

    // pauses the animation when clicked
    document.querySelector("#figur1_container").classList.add("pause");



    // new animation starts on sprite element (Sprite er firstElementChild)
    document.querySelector("#figur1_sprite").classList.add("click_bad");

    // game element is directed to a reset, with a new position when animation is done
    document.querySelector("#figur1_sprite").addEventListener("animationend", figur1Reset);


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
    document.querySelector("#figur1_container").classList = "";
    document.querySelector("#figur1_sprite").classList = "";
    document.querySelector("#figur1_container").removeEventListener("animationend", figur1Reset);

    //For at kunne genstarte op_ned animationen, da vi fjener og tilføjer den i samme function
    document.querySelector("#figur1_container").offsetHeight;



    // adds a new random position to the game element
    myRand = Math.floor(Math.random() * 4) + 1;
    console.log("position for figur1 is now " + myRand);
    document.querySelector("#figur1_container").classList.add("pos" + myRand);

    //sæt variablen lig med et tilfældigt tal mellem 1 og 3
    myRand = Math.floor(Math.random() * 2) + 1;

    //giv container ny tilfældig speed
    document.querySelector("#figur1_container").classList.add("speed" + myRand);


    // animation jump begins
    document.querySelector("#figur1_container").classList.add("jump");
    document.querySelector("#figur1_container").addEventListener("mousedown", clickFigur1Handler);
}



/**************************** GOOD - PURPLE GIRL *************************************/
function clickFigur4Handler() {
    console.log("clickFigur4Handler");
    document.querySelector("#figur4_container").removeEventListener("mousedown", clickFigur4Handler);

    document.querySelector("#figur4_container").classList.add("pause");
    document.querySelector("#figur4_sprite").classList.add("click_good");
    document.querySelector("#figur4_sprite").addEventListener("animationend", figur4Reset);


    points += 1;
    document.querySelector("#score_board").innerHTML = points;


    if (life <= 0) {
        console.log("life <= 0");
        stopGame();
    }



}

function figur4Reset() {
    console.log("figur4Reset");
    document.querySelector("#figur4_container").classList = "";
    document.querySelector("#figur4_sprite").classList = "";
    document.querySelector("#figur4_container").removeEventListener("animationend", figur4Reset)

    document.querySelector("#figur4_container").offsetHeight;

    myRand = Math.floor(Math.random() * 4) + 1;
    console.log("position for figur4 is now " + myRand);


    document.querySelector("#figur4_container").classList.add("pos" + myRand);

    myRand = Math.floor(Math.random() * 2) + 1;
    document.querySelector("#figur4_container").classList.add("speed" + myRand);

    document.querySelector("#figur4_container").classList.add("jump");
    document.querySelector("#figur4_container").addEventListener("mousedown", clickFigur4Handler);
}

function stopGame() {
    console.log("stopGame");
    console.log("times up, you earned " + points + "points!");

    //ryd op, fjern alt på alle container og sprite
    document.querySelector("#time_sprite").classList.remove("time");
    document.querySelector("#time_container").removeEventListener("animationend", stopGame);

    document.querySelector("#figur1_container").classList = "";
    document.querySelector("#figur1_sprite").classList = "";
    document.querySelector("#figur1_container").removeEventListener("mousedown", clickFigur1Handler);
    document.querySelector("#figur1_container").removeEventListener("animationiteration", figur1Reset);
    document.querySelector("#figur1_sprite").removeEventListener("animationend", figur1Reset);


    document.querySelector("#figur4_container").classList = "";
    document.querySelector("#figur4_sprite").classList = "";
    document.querySelector("#figur4_container").removeEventListener("mousedown", clickFigur4Handler);
    document.querySelector("#figur1_container").removeEventListener("animationiteration", figur4Reset);
    document.querySelector("#figur4_container").removeEventListener("animationend", figur4Reset)




    if (life <= 0) {
        gameOver();
    } else if (points >= 10) {
        levelComplete();
    } else {
        gameOver();
    }

}


function gameOver() {
    console.log("gameOver");
}

function levelComplete() {
    console.log("levelComplete");
}
