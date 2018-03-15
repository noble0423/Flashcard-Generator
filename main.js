var BasicCard = require('./BasicCard.js');
var ClozeCard = require('./ClozeCard.js');

var firstPresident = new BasicCard (
    "Who was the first president of the United States?",
    "George Washington"
);

// firstPresident.printFront();
// firstPresident.printBack();

var firstPresidentCloze = new ClozeCard (
    "George Washington",
    "...was the first president of the United States.",
    "George Washington was the first president of the United States."
   
);

// firstPresidentCloze.printPartial();
// firstPresidentCloze.printFull();
// firstPresidentCloze.printCloze();

// Should throw and/or log an error be