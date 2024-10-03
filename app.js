const choice = document.querySelectorAll(".choices");
let computerscore = document.querySelector("#comp-score");
let userscores = document.querySelector("#user-score");
let result = document.querySelector("#res");
let usersel = document.querySelector("#user-sel");
let compsel = document.querySelector("#comp-sel");
let reset = document.querySelector("#resetbtn");
let compscore = 0;
let userscore = 0;

choice.forEach((choices) => {
    choices.addEventListener("click", () => {
        const userchoice = choices.getAttribute("id");
        playgame(userchoice);

    });
});

reset.addEventListener("click", () => {
    computerscore.innerText = "0";
    userscores.innerText = "0";
    compsel.innerText = "None";
    usersel.innerText = "None";
});

const clearresult = () => {
    result.innerText = "";
}

const gencompchoice = () => {
    let option = ["stone", "paper", "scissor"];
    const index = Math.floor(Math.random() * 3);
    return option[index];
}
//const compchoice =gencompchoice();

const playgame = (userchoice) => {
    console.log("user choose:", userchoice);
    usersel.innerText = (`User : ${userchoice}`);
    const compchoice = gencompchoice();
    compsel.innerText = (`Computer : ${compchoice}`);
    console.log("comp choose:", compchoice);
    if (userchoice === compchoice) {
        draw();
    } else if (userchoice === "paper" && compchoice === "scissor") {
        compwinner();
    } else if (userchoice === "paper" && compchoice === "stone") {
        userwinner();
    } else if (userchoice === "stone" && compchoice === "scissor") {
        userwinner();
    } else if (userchoice === "stone" && compchoice === "paper") {
        compwinner();
    } else if (userchoice === "scissor" && compchoice === "paper") {
        userwinner();
    } else if (userchoice === "scissor" && compchoice === "stone") {
        compwinner();
    }



};
const draw = () => {
    console.log("tie");
    result.innerText = "Game Tie";
};
const userwinner = () => {
    console.log("user is winner");
    userscore++;
    result.innerText = "Congrats!! you won";
    userscores.innerText = userscore;
};
const compwinner = () => {
    console.log("computer is winner");
    compscore++;
    result.innerText = "Computer Won";
    computerscore.innerText = compscore;
};



