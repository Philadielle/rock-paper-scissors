// 1) Déterminer le choix de l'ordinateur
//note: On pourrait sans doute simplifier cette fonction en créant une Array ["pierre", "papier", "ciseaux"], puis variable = array[random number], mais il faudrait que je revois les Array
function getComputerChoice () { 
    let number = Math.floor(Math.random() * 3) + 1; // l'ordinateur choisit d'abord un chiffre entre 1 et 3
    if (number === 1) { // à chacun de ces chiffres est assigné une option
        return "rock"
    } else if (number === 2) {
        return "paper"
    } else {
        return "scissors"
    }
}

// 2) Demander le choix de l'utilisateur
function getPlayerChoice() {
    return prompt("Rock, paper, scissors ?").toLowerCase();} // prompt ouvre un pop-up.


// 3) Jouer un tour de jeu
function game() { 
    // 1) déclaration des variables, dont plusieurs fonctions
    let playerPoints = 0;
    let computerPoints = 0;
    let playerSelection // on déclare les deux choix, leur valeur leur est assignée au début d'un round.
    let computerSelection 

    function playRound() { // cette fonction joue un tour de jeu
        // playerSelection et computerSelection doivent être réitérés au début de chaque nouveau tour
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();
            
            if (playerSelection === computerSelection) { // on compare les résultats
                console.log("It's a tie, try again");
            } else if (playerSelection === "rock") {
                return computerSelection === "scissors" ? win() : lose();
            } else if (playerSelection === "paper") {
                return computerSelection === "rock" ? win() : lose();
            } else { //dernier choix possible, player === "scissors"
                return computerSelection === "rock" ? win() : lose();
            } 
    }

    function win() {
        playerPoints++;
        console.log(`You win! ${playerSelection} beats ${computerSelection}`)
    };

    function lose() {
        computerPoints++;
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`) 
    };

    // 2) La fonction "game" proprement dite
    for (let nbOfRounds = 1; nbOfRounds <= 5; nbOfRounds++) {
        playRound();
    }

  
    if (playerPoints > computerPoints) {
        return `You win ${playerPoints} to ${computerPoints}!`
    } else if (playerPoints < computerPoints) {
        return `You lose ${computerPoints} to ${playerPoints}!`
    } else {
        return `${playerPoints} to ${computerPoints} : It's a tie!`
    }
    
}

console.log(game());