let playerWinCount = 0;
let computerWinCount = 0;

function getComputerChoice(){
    let result = Math.floor(Math.random() * 3)
    let resultName = ""
    switch (result){
        case 0:
            resultName = "Rock"
            break;

        case 1:
            resultName = "Paper"
            break;

        case 2:
            resultName = "Scissors"
            break;
    }
    console.log("Computer choice: " + resultName)
    return result
}

function getUserChoice(str){
    let userChoice = str;
    userChoice = userChoice.toLowerCase()
    let userResult = -1
    switch (userChoice){
        case "rock":
            userResult = 0
            break;
        case "paper":
            userResult = 1
            break;
        case "scissors":
            userResult = 2
            break;
        default:
            console.clear()
            userResult = -1
            alert("Invalid choice or incorrect spelling")
            getUserChoice()
            break;
    }
    console.log("Your choice: " + userChoice)
    return userResult;
}

function compareChoices(playerChoice, computerChoice) {
    if (playerChoice === computerChoice){
        console.log("This round is a tie")
    } else if (playerChoice === 0){
        if (computerChoice === 1){
            console.log("The computer wins this round")
            computerWinCount += 1;
        } else {
            console.log("You win this round")
            playerWinCount +=1;
        }
    } else if (playerChoice === 1){
        if (computerChoice === 2) {
            console.log("The computer wins this round")
            computerWinCount += 1;
        } else {
            console.log("You win this round")
            playerWinCount +=1;
        }
    } else {
        if (computerChoice === 0){
            console.log("The computer wins this round")
            computerWinCount += 1;
        } else {
            console.log("You win this round")
            playerWinCount +=1;
        }
    }
    document.getElementById('resultsContainer').textContent = 'Player score: ' + playerWinCount + '\n' + 'Computer Score: ' + computerWinCount;
}

function game(){
    let numOfGames = parseInt(prompt("How many games would you like to play?"))
    for (let i = 0; i < numOfGames; i++){
        compareChoices()
    }
}

const results = document.querySelector('#results');

const resultContainer = document.createElement('div')
resultContainer.setAttribute('id', 'resultsContainer');
//resultContainer.style.cssText = 'border-style: solid';
resultContainer.textContent = 'Player score: ' + playerWinCount + '\n' + 'Computer Score: ' + computerWinCount;
results.appendChild(resultContainer);


const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(compareChoices(getUserChoice(button.id), getComputerChoice()));
        
    });
});