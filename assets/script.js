var wins = 0;
var ties = 0;
var losses = 0;

var options = ["R", "P", "S"];

var playGame = function () {
    var userChoice = window.prompt("Ender R, P, or S:");

    userChoice = userChoice.toUpperCase();

    // this chooses a random number between 0-2
    var index = Math.floor(Math.random() * options.length);

    // this uses that random number to choose an item in the options array, then calls it computer choice.
    var computerChoice = options[index];

    window.alert("The compuer chose " + computerChoice);

    if (userChoice === computerChoice) {
        ties++;
        window.alert("It's a tie!")
    } else if (
        (userChoice === "R" && computerChoice === "S") ||
        (userChoice === "P" && computerChoice === "R") ||
        (userChoice === "S" && computerChoice === "P")
    ) {
        wins++;
        window.alert("You Win!");
    } else {
        losses++;
        window.alert("Better luck next time!");
    };

    window.alert("Stats: \nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties);

    var playAgain = window.confirm("Play Again?");

    if (playAgain) { 
        playGame();
    }
}

playGame();
