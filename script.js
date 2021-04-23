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
    document.querySelector("#start").classList.add("hidden");

    points = 0;
    document.querySelector("#score_board").innerHTML = points;

    life = 3;


    // GIVES A RANDOM POSITION - NOTE! HAVE A LOOK AT NEXT POINT WITH + myRand!
    myRand = Math.floor(Math.random() * 4) + 1;
    console.log(myRand);


    // gives a random position to figur4
    document.querySelector("#figur1_container").classList.add("pos" + myRand);
    // animation jump begins
    document.querySelector("#figur1_container").classList.add("jump");
    // listening for a the animation-end, and directs to the the reset
    document.querySelector("#figur1_container").addEventListener("animationiteration", figur1Reset);
    // listening for a mousedown on the game elements, and directs to the clickHandler
    document.querySelector("#figur1_container").addEventListener("mousedown", clickFigur1Handler);




    // gives a random position to figur4
    document.querySelector("#figur4_container").classList.add("pos" + myRand);
    // animation jump begins
    document.querySelector("#figur4_container").classList.add("jump");
    // listening for a the animation-end, and directs to the the reset
    document.querySelector("#figur4_container").addEventListener("animationiteration", figur4Reset);
    // listening for a mousedown on the game elements, and directs to the clickHandler
    document.querySelector("#figur4_container").addEventListener("mousedown", clickFigur4Handler);
}







function clickFigur1Handler() {
    console.log("clickFigur1Handler");
    // removes the mousedown - not able to click several times
    document.querySelector("#figur1_container").removeEventListener("mousedown", clickFigur1Handler);

    // pauses the animation when clicked
    document.querySelector("#figur1_container").classList.add("pause");

    // new animation starts
    document.querySelector("#figur1_sprite").classList.add("click_bad");

    // game element is directed to a reset, with a new position
    document.querySelector("#figur1_sprite").addEventListener("animationend", figur1Reset);


    // loose life by clicking figur1
    console.log("Life = " + life);
    document.querySelector("#heart" + life).classList.add("hidden");
    console.log("Liv er = " + life);

    life -= 1;
}

function figur1Reset() {
    console.log("figur1Reset");
    // set the classes back to 0
    document.querySelector("#figur1_container").classList = "";
    document.querySelector("#figur1_sprite").classList = "";
    document.querySelector("#figur1_container").removeEventListener("animationend", figur1Reset)

    document.querySelector("#figur1_container").offsetHeight;

    myRand = Math.floor(Math.random() * 4) + 1;
    console.log(myRand);

    // adds a new random position to the game element
    document.querySelector("#figur1_container").classList.add("pos" + myRand);
    // animation jump begins
    document.querySelector("#figur1_container").classList.add("jump");
    document.querySelector("#figur1_container").addEventListener("mousedown", clickFigur1Handler);
}



/************************************************/



function clickFigur4Handler() {
    console.log("clickFigur4Handler");
    document.querySelector("#figur4_container").removeEventListener("mousedown", clickFigur4Handler);

    document.querySelector("#figur4_container").classList.add("pause");
    document.querySelector("#figur4_sprite").classList.add("click_good");
    document.querySelector("#figur4_sprite").addEventListener("animationend", figur4Reset);


    points += 1;
    document.querySelector("#score_board").innerHTML = points;



}

function figur4Reset() {
    console.log("figur4Reset");
    document.querySelector("#figur4_container").classList = "";
    document.querySelector("#figur4_sprite").classList = "";
    document.querySelector("#figur4_container").removeEventListener("animationend", figur4Reset)

    document.querySelector("#figur4_container").offsetHeight;

    myRand = Math.floor(Math.random() * 4) + 1;
    console.log(myRand);

    document.querySelector("#figur4_container").classList.add("pos" + myRand);
    document.querySelector("#figur4_container").classList.add("jump");
    document.querySelector("#figur4_container").addEventListener("mousedown", clickFigur4Handler);
}
