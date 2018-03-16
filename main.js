//VARIABLES
//===============================================================================================================================================================

var BasicCard = require('./BasicCard.js');
var ClozeCard = require('./ClozeCard.js');
var inquirer = require("inquirer");

var cards = [];
var questionCount = 0;
var correctCounter = 0;
var incorrectCounter = 0;


var card1 = new BasicCard (
    "The first word spoken from the moon on July 20, 1969 was?",
    "Houston"
);

var card2 = new BasicCard (
    "What state has more shoreline on the Great Lake than the entire U.S. Atlantic seaboard?",
    "Michigan"
);


var card3 = new BasicCard (
    "The Massachusetts town that is most famous for a series of witch trials in 1892 is?",
    "Salem"
);

var card4 = new BasicCard (
    "In which state is Mount St. Helens located?",
    "Washington"
);

var card5 = new BasicCard (
    "What U.S. state along with Texas celebrated it's centennial of joining the Union in 1945?",
    "Florida"
);

var card6 = new ClozeCard (
    "was acquired from Russia in the year 1867.",
    "Alaska"
);

var card7 = new ClozeCard (
    "is the 'Live Music Capital of the World' as well as the State Capital of Texas.",
    "Austin"
);

var card8 = new ClozeCard (
    "is second only to Alaska in regards to states containing the most lakes (they have over 10,000).",
    "Minnesota"
);

var card9 = new ClozeCard (
    "was the very first Federal Capital of the United States of America from Sept. 5, 1774 - Oct. 26, 1774.",
    "Philadelphia"
);

var card10 = new ClozeCard (
    "is known by the following three state nicknames: Mother of Presidents, Mother of States, and The Old Dominion (official state nickname).",
    "Virginia"
);

cards.push(card1, card2, card3, card4, card5, card6, card7, card8, card9, card10);


// FUNCTIONS
//===============================================================================================================================================================

// Function that starts the game
function start() {
    inquirer.prompt([
        {
            name: "start",
            type: "list",
            message: "Are you ready to start playing the U.S. city and state flashcard game?",
            choices: ["Yes", "No"]
        }
    ]).then(function(answer) {
        if (answer.start.toLowerCase() === "yes") {
            console.log("================================================================================================================================\n");
            askQuestions();
        }
        else {
            console.log("Ok. When you feel up for the challenge, let me know.");
        }
    })
};

// Function to start asking question. it will wait for user answer before moving onto the next question and once all questions have been asked, it will run a Game Over Screen that prints correct/incorrect stats

function askQuestions() {
    if (questionCount < 10) {
        if (cards[questionCount].type === "basic") {
            inquirer.prompt([
                {
                    type: "input",
                    name: "basicAnswer",
                    message: cards[questionCount].front
                }
            ]).then(function(data) {
                console.log("\nYou guessed " + data.basicAnswer);
                if (data.basicAnswer.toLowerCase() === cards[questionCount].back.toLowerCase()) {
                    console.log("Correct!");
                    console.log("\n===================================================================================================================\n");
                    questionCount++;
                    correctCounter++;
                }
                else {
                    console.log("Nope. The correct answer is actually " + cards[questionCount].back);
                    console.log("\n===================================================================================================================\n");
                    questionCount++;
                    incorrectCounter++;
                }
                askQuestions();
            }); 
        }
        else if (cards[questionCount].type === "cloze") {
            inquirer.prompt([
                {
                    type: "input",
                    name: "clozeAnswer",
                    message: cards[questionCount].partial
                }
            ]).then(function(data) {
                console.log("\nYou guessed " + data.clozeAnswer);
                if (data.clozeAnswer.toLowerCase() === cards[questionCount].cloze.toLowerCase()) {
                    console.log("Correct!\n" + cards[questionCount].full);
                    console.log("\n===================================================================================================================\n");
                    questionCount++;
                    correctCounter++;
                } 
                else {
                    console.log("Nope. The correct answer is actually " + cards[questionCount].cloze + ".\n" + cards[questionCount].full);
                    console.log("\n===================================================================================================================\n");
                    questionCount++;
                    incorrectCounter++;
                }
                askQuestions();
            });
        }
    } 
    else {
        printStats();
    }
};

// Function to display stats
function printStats() {
    console.log("\n/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\n");
    console.log("Total Flashcards Shown: " + questionCount + ".");
    console.log("You answered " + correctCounter + " correctly!");
    console.log("Unfortunately, you answered " + incorrectCounter + " incorrectly.");
    console.log("\n/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\n");
};


// GAME FUNCTIONALITY
//===============================================================================================================================================================
start();

