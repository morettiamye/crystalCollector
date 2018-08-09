// Lets define some variables
score = 0;
wins = 0;
losses = 0;


// Random Number Pickins'
 var gCrystal = Math.floor((Math.random() * 12) + 1);
 var bCrystal = Math.floor((Math.random() * 12) + 1);
 var pCrystal = Math.floor((Math.random() * 12) + 1);
 var wCrystal = Math.floor((Math.random() * 12) + 1);

// Function to display random number and show it on screen
var computer = Math.floor((Math.random() * 101) + 19);
$("#computerNumber").append(computer);
 
// Function for determining if winning or losing
function winning() {
    if (score === computer ) {
        console.log("You win!");
        alert("You win!");
        wins++;
       $("#wins").html("<p>You've won</p>" + wins);
       reset();
    } else if (score > computer) {
        console.log(score + "You lose");
        alert("You lose!");
        losses++;   
        $("#losses").html("<p>You've lost :(</p>" + losses);
        reset();
    }
}

// Functions for each crystal to add random number to score
$("#gCrystal").click(function add() {
    score = score += gCrystal;
    $("#score").html(score);
    console.log(score);
    winning();
})   

$("#bCrystal").click(function add() {
    score = score += bCrystal;
    $("#score").html(score);
    console.log(score);
    winning();
})   

$("#pCrystal").click(function add() {
    score = score += pCrystal;
    $("#score").html(score);
    console.log(pCrystal);
    winning();
})   

$("#wCrystal").click(function add() {
    score = score += wCrystal;
    $("#score").html(score);
    console.log(wCrystal);
    winning();
})   


// Game Restart Function

function reset() {
score = 0;
$("#score").html(" ");
gCrystal = Math.floor((Math.random() * 12) + 1);
bCrystal = Math.floor((Math.random() * 12) + 1);
pCrystal = Math.floor((Math.random() * 12) + 1);
wCrystal = Math.floor((Math.random() * 12) + 1);
computer = Math.floor((Math.random() * 101) + 19);
$("#computerNumber").html("<p>Try to tie:</p>" + computer);
}

