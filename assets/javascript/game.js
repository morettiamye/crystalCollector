// Lets define some variables
score = 0;
wins = 0;
losses = 0;

// Random Number Pickins'
 var green = Math.floor((Math.random() * 12) + 1);
 var blue = Math.floor((Math.random() * 12) + 1);
 var purple = Math.floor((Math.random() * 12) + 1);
 var white = Math.floor((Math.random() * 12) + 1);

//Green gem score

function green() {
    return score + green;
}

// Function to display random number and show it on screen
var computer = Math.floor((Math.random() * 120) + 19);
 


// Functions for each crystal to randomly select number
    // Green Crystal
    function greenCrystal(){
       $("green").on ("click", function green() {
            console.log("Green clicked");
        })
    }

    // //Blue Crystal
    // function blueCrystal(){
        
    // }

    // //Purple Crystal
    // function purpleCrystal(){
        
    // }

    // //White Crystal
    // function whiteCrystal(){
        

    // }



// Function for determining score vs randomly selected number


// Game Restart Function


// Show wins and losses
