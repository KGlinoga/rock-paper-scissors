var wins = 0;
var ties = 0;
var losses = 0;

var options = ["R", "P", "S"];

var playGame = function() {
    var userChoice = window.prompt("Enter R, P, or S:");

    if (!userChoice) {
        return;
    } 

userChoice = userChoice.toUpperCase();

var index = Math.floor(Math.random() * options.length);
var computerChoice = options[index];

window.alert("The computer chose" + computerChoice);


if (userChoice === computerChoice) {
    ties++;
    window.alert("It's a tie!");
} else if (
    (userChoice === "R" && computerChoice === "S") ||
    (userChoice === "P" && computerChoice === "R") ||
    (userChoice === "S" && computerChoice === "P")
) {
    wins++;
    window.alert("You win!");
} else {
    losses++;
    window.alert("You lost!");
}
};

playGame();
















































// javascript 

// pop up that prompts user for an entry


// // randomly choose computer choice
//     //either r, p or s
//     store in variable


// collect users choice (R,P, S)
//     ask user for R,P or S via pop up
//     EDGE CASE: user doesn't pick R P or s   
    

// function playGame() {
//     var player = prompt("Play Rock Paper Scissors by entering r, p, or s.", " ");
//     var text;
    
//     if (player() == R) {
//         text = "Rock!";
//     } else (player !== compChoice || player == "")
//     {
//         text = "---";
//     }
// }


//still need Edge Case 

// figure out result
//     win: R:P, P:R, S:P
//     loss: s:r, r:P, p:s
//     tie: s:s, etc.




// log stats
//     3 possible outcomes
//     create variables for win, loss, and tie
//     update appropriate variable based on result
//     display to user

// keep playing until quit

// an array of like 4 names

// var randomNum = Math.random()

// var numTimesLength = randomNum * names.Length

// var roundDown = Math.floor(numTimesLength)

// console.log(names[roundDown])
// //the below is ACTUALLY what you'll likely use. 
// console.log(names[Math.floor(Math.random()*names.length)])

// **when you get nested parenthesis, start with the smallest nested doll and work out. 

