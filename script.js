const choose = ['rock', 'paper', 'scissors']

function computerPlay() {
    return choose[Math.floor(Math.random()*3)]
}

let playerScore = 0
let computerScore = 0

function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case 'rock':
            var result = (computerSelection == 'rock') ? 'tie, rock equals rock': (computerSelection == 'paper') ? 'loss, paper beats rock': 'win, rock beats scissors'
            return(result)
        case 'paper':
            var result = (computerSelection == 'rock') ? 'win, paper beats rock': (computerSelection == 'paper') ? 'tie, paper equals paper': 'loss, scissors beat paper'
            return(result)
        case 'scissors':
            var result = (computerSelection == 'rock') ? 'loss, rock beats scissors': (computerSelection == 'paper') ? 'win, scissors beat paper': 'tie, scissors equal scissors'
            return(result)
        default:
            return('rock, paper or scissors')
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('rock, paper or scissors!')
        if(playerSelection == null){
            break;
        }
        const computerSelection = computerPlay()
        const playTurn = playRound(playerSelection.toLowerCase(), computerSelection)
        if(playTurn.startsWith('win')) {
            playerScore++
        }
        if(playTurn.startsWith('loss')) {
            computerScore++
        }
        console.log(playTurn)
    }
    console.log(`Player: ${playerScore}, Computer: ${computerScore}`)
    console.log((playerScore > computerScore) ? 'Player wins': (playerScore < computerScore) ? 'Computer wins': 'tie')
}
game()