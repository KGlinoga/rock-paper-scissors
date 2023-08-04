var wins = 0;
var ties = 0;
var losses = 0;

// options for computer
var options = ["R", "P", "S"];

// this is the game
var playGame = function () {
    
    var userChoice = window.prompt("Ender R, P, or S:");

    // if user pressed cancel, immediately end function
    if (!userChoice) {
        return;
    }

    var index = Math.floor(Math.random() * options.length);
    var computerChoice = options[index];

    window.alert("The computer chose " + computerChoice);
}