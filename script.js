const choose = ['rock', 'paper', 'scissors']

let playerScore = 0
let computerScore = 0

const score = document.createElement('p')
score.innerText = `Score: ${playerScore} | ${computerScore}`
score.style.color = 'blue'
document.body.appendChild(score)


function computerPlay() {
    return choose[Math.floor(Math.random()*3)]
}


const rock = document.querySelector('#rockbtn')
rock.style.cssText = 'color: red'
rock.addEventListener('click', playRound)

const paper = document.querySelector('#paperbtn')
paper.style.cssText = 'color: orange'
paper.addEventListener('click', playRound)

const scissors = document.querySelector('#scissorsbtn')
scissors.style.cssText = 'color: green'
scissors.addEventListener('click', playRound)

const div = document.createElement('div')
document.body.appendChild(div)

function test() {
    alert('hallo')
}

function createResult(result) {
    
    const turnResult = document.createElement('p')
    turnResult.innerText = result
    div.appendChild(turnResult)

    if(result.startsWith('win'))  {
        playerScore++
    } else if(result.startsWith('loss')) {
        computerScore++
    }
    score.innerText = `Score: ${playerScore} | ${computerScore}`
    if(playerScore == 5 || computerScore == 5) {
        setTimeout(announceWinner, 100)
    }
}

function announceWinner() {
    if(playerScore == 5){
        alert('You are the winner!')
    }
    if(computerScore == 5) {
        alert('The computer wins')
    }

    location.reload()
}


function playRound(e) {
    computerSelection = computerPlay();
    playerSelection = e.target.innerText.toLowerCase()
    switch (playerSelection) {
        case 'rock':
            var result = (computerSelection == 'rock') ? 'tie, rock equals rock': (computerSelection == 'paper') ? 'loss, paper beats rock': 'win, rock beats scissors'
            createResult(result)
            break;
        case 'paper':
            var result = (computerSelection == 'rock') ? 'win, paper beats rock': (computerSelection == 'paper') ? 'tie, paper equals paper': 'loss, scissors beat paper'
            createResult(result)
            break;
        case 'scissors':
            var result = (computerSelection == 'rock') ? 'loss, rock beats scissors': (computerSelection == 'paper') ? 'win, scissors beat paper': 'tie, scissors equal scissors'
            createResult(result)
            break;
        default:
            createResult(result)
            break;
    }
}

