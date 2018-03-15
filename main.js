var BasicCard = require('./BasicCard.js');
var ClozeCard = require('./ClozeCard.js');

var firstPresident = new BasicCard (
    "Who was the first president of the United States?",
    "George Washington"
);

// firstPresident.printFront();
// firstPresident.printBack();

var firstPresidentCloze = new ClozeCard (
    "was the first president of the United States.",
    "George Washington"
);

firstPresidentCloze.printPartial();
// firstPresidentCloze.printCloze();
firstPresidentCloze.printFull();

// Should throw and/or log an error be