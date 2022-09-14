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

function getUserChoice(){
    let userChoice = prompt("Please make a choice: Rock, Paper, or Scissors")
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
        } else {
            console.log("You win this round")
        }
    } else if (playerChoice === 1){
        if (computerChoice === 2) {
            console.log("The computer wins this round")
        } else {
            console.log("You win this round")
        }
    } else {
        if (computerChoice === 0){
            console.log("The computer wins this round")
        } else {
            console.log("You win this round")
        }
    }
}