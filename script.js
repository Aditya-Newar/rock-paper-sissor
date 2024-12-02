let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
//taking user input
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    } );
});
//compiling user choice & comp choice 
const playGame = (userChoice) => {
    console.log(`user has selected ${userChoice}`);
    const compChoice = genCompChoice();
    console.log(`computer has selected ${compChoice}`);

    //creating draw game logic
if (userChoice === compChoice) {
    drawGame();
};
};
//generating random index for computer choice
const genCompChoice = () => {
    const options = ["scissors","paper","rock"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};


//creating funtion for draw game
const drawGame = () =>{
    console.log("game was draw");
};
