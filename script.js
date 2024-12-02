let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

//taking user input
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    } );
});
//comparing user choice & comp choice 
const playGame = (userChoice) => {
    console.log(`user has selected ${userChoice}`);
    const compChoice = genCompChoice();
    console.log(`computer has selected ${compChoice}`);

    //creating draw game logic
if (userChoice === compChoice) {
    drawGame();
}else {
    let userWin = true;
    if (userChoice === "rock"){
        userWin = compChoice === "paper" ? false:true;
    }else if (userChoice === "paper"){
        userWin = compChoice === "scissors" ? false : true; 
    }else {
        userWin = compChoice === "rock" ? false : true;
    };
    showWinner(userWin,userChoice,compChoice);
}
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
    msg.innerText = "======= This Round was Draw =======";
    msg.style.backgroundColor = "Yellow";
    msg.style.color = "blue";
};
//declaring winner
const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin){
        msg.innerText = `*** Users's ${userChoice} beats computer choice ${compChoice} ***`;
        msg.style.backgroundColor = "green";
        msg.style.color = "yellow";

        //updating Score
        userScore++;
        userScorePara.innerText = userScore;
        userScorePara.style.color = "green";
    }else {
        msg.innerText = `*** Computer's ${compChoice} beats User choice ${userChoice} ***`;
        msg.style.backgroundColor = "#d00000";
        msg.style.color = "yellow";
        //updating score
        compScore++;
        compScorePara.innerText = compScore;
        compScorePara.style.color = "red";
    }
}