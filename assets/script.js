// javascript
// // randomly choose computer choice
//     //either r, p or s
//     store in variable

var compChoice = ["r", "p", "s"]
console.log(compChoice[Math.floor(Math.random()*compChoice.length)])


// collect users choice (R,P, S)
//     ask user for R,P or S via pop up
//     EDGE CASE: user doesn't pick R P or s   
    

// window.alert("hello there!")
// window.confirm("obiwan")

// if (confirm("Press a button!")) {
//     txt = "You pressed OK!";
//   } else {
//     txt = "You pressed Cancel!";
//   }

var person = prompt("Play Rock Paper Scissors!", "Rock, Paper, or Scissors");
var text;
if (person == null || person == "") {
  text = "User cancelled the prompt.";
} else {
  text = "Hello " + person + "! How are you today?";
}

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

