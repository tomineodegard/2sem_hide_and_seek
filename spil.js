window.addEventListener("load", showPage);

function showPage() {
    console.log("show page");

    document.querySelector("#figur1_container").classList.add("pos1_figur1");
    document.querySelector("#figur4_container").classList.add("pos1_figur4");
    document.querySelector("#figur1_container").classList.add("jump");
    document.querySelector("#figur4_container").classList.add("jump");

    document.querySelector("#figur1_container").addEventListener("mousedown", clickFigur1Handler);
    document.querySelector("#figur4_container").addEventListener("mousedown", clickFigur4Handler);

}




function clickFigur1Handler() {
    console.log("clickFigur1Handler");
    document.querySelector("#figur1_container").removeEventListener("mousedown", clickFigur1Handler);

    document.querySelector("#figur1_container").classList.add("pause");
    document.querySelector("#figur1_sprite").classList.add("click_bad");
    document.querySelector("#figur1_sprite").addEventListener("animationend", figur1Reset);

}

function figur1Reset() {
    console.log("figur1Reset");
    document.querySelector("#figur1_container").classList = "";
    document.querySelector("#figur1_sprite").classList = "";
    document.querySelector("#figur1_container").removeEventListener("animationend", figur1Reset)

    document.querySelector("#figur1_container").offsetHeight;
    document.querySelector("#figur1_container").classList.add("pos2_figur1");
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

}

function figur4Reset() {
    console.log("figur4Reset");
    document.querySelector("#figur4_container").classList = "";
    document.querySelector("#figur4_sprite").classList = "";
    document.querySelector("#figur4_container").removeEventListener("animationend", figur4Reset)

    document.querySelector("#figur4_container").offsetHeight;
    document.querySelector("#figur4_container").classList.add("pos2_figur4");
    document.querySelector("#figur4_container").classList.add("jump");
    document.querySelector("#figur4_container").addEventListener("mousedown", clickFigur4Handler);
}
