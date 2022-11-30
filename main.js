let p1Out = document.getElementById("p1Out");
let botOut = document.getElementById("botOut");
let result = document.getElementById("result");
let p1Select = "none";
let p2Select = "none";
let gameSelect = "bot";

document.getElementById("bot").addEventListener("click", () => {
    gameSelect = "bot";
    document.getElementById("p2Box").style.display = "none";
})
document.getElementById("player").addEventListener("click", () => {
    gameSelect = "player";
    document.getElementById("p2Box").style.display = "block";
})
document.getElementById("p1Rock").addEventListener("click", () => {
    p1Select = "rock"
})
document.getElementById("p1Paper").addEventListener("click", () => {
    p1Select = "paper"
})
document.getElementById("p1Scissors").addEventListener("click", () => {
    p1Select = "scissors"
})
document.getElementById("p2Rock").addEventListener("click", () => {
    p2Select = "rock"
})
document.getElementById("p2Paper").addEventListener("click", () => {
    p2Select = "paper"
})
document.getElementById("p2Scissors").addEventListener("click", () => {
    p2Select = "scissors"
})
document.getElementById("start").addEventListener("click", () => {
    if (!functionIsRunning) {
        if (gameSelect === "bot") {
            vsBot();
        } else {
            vsPlayer();
        }
    }
})

let functionIsRunning = false;
function vsBot() {
    if (p1Select === "none") {
        p1Out.innerHTML = "";
        botOut.innerHTML = "";
        result.innerHTML = "You didn't select anything."
    } else {
        functionIsRunning = true;
        let randNum = Math.random();
        let botThing;
        if (randNum < (1/3)) {
            botThing = "rock";
        } else if (randNum < (2/3)) {
            botThing = "paper";
        } else {
            botThing = "scissors";
        }
    
        p1Out.innerHTML = `You chose ${p1Select}.`;
        botOut.innerHTML = `The bot chose ?.`;
    
        result.innerHTML = "Rock"
        setTimeout(() => {
            result.innerHTML = "Paper"
        }, 400)
        setTimeout(() => {
            result.innerHTML = "Scissors"
        }, 800)
        setTimeout(
            () => {
                botOut.innerHTML = `The bot chose ${botThing}.`;
                if (p1Select === "rock") {
                    if (botThing === "rock") {
                        result.innerHTML = "It's a tie!";
                    } else if (botThing === "paper") {
                        result.innerHTML = "You lost...";
                    } else {
                        result.innerHTML = "You won!";
                    }
                } else if (p1Select === "paper") {
                    if (botThing === "rock") {
                        result.innerHTML = "You won!";
                    } else if (botThing === "paper") {
                        result.innerHTML = "It's a tie!";
                    } else {
                        result.innerHTML = "You lost...";
                    }
                } else {
                    if (botThing === "rock") {
                        result.innerHTML = "You lost...";
                    } else if (botThing === "paper") {
                        result.innerHTML = "You won!";
                    } else {
                        result.innerHTML = "It's a tie!";
                    }
                }
                p1Select = "none";
                functionIsRunning = false;
            }, 
        1200)
    }
}

function vsPlayer() {
    if (p1Select === "none" || p2Select === "none") {
        p1Out.innerHTML = "";
        botOut.innerHTML = "";
        result.innerHTML = "A player forgot to select!"
    } else {
        functionIsRunning = true;
        result.innerHTML = "Rock"
        setTimeout(() => {
            result.innerHTML = "Paper"
        }, 400)
        setTimeout(() => {
            result.innerHTML = "Scissors"
        }, 800)
        setTimeout(
            () => {
                p1Out.innerHTML = `Player 1 chose ${p1Select}`
                botOut.innerHTML = `Player 2 chose ${p2Select}.`;
                if (p1Select === "rock") {
                    if (p2Select === "rock") {
                        result.innerHTML = "It's a tie!";
                    } else if (p2Select === "paper") {
                        result.innerHTML = "Player 2 won!";
                    } else {
                        result.innerHTML = "Player 1 won!";
                    }
                } else if (p1Select === "paper") {
                    if (p2Select === "rock") {
                        result.innerHTML = "Player 1 won!";
                    } else if (p2Select === "paper") {
                        result.innerHTML = "It's a tie!";
                    } else {
                        result.innerHTML = "Player 2 won!";
                    }
                } else {
                    if (p2Select === "rock") {
                        result.innerHTML = "Player 2 won!";
                    } else if (p2Select === "paper") {
                        result.innerHTML = "Player 1 won!";
                    } else {
                        result.innerHTML = "It's a tie!";
                    }
                }
                p1Select = "none";
                p2Select = "none";
                functionIsRunning = false;
            }, 
        1200)
    }
}