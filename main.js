var BasicCard = require('./BasicCard.js');
var ClozeCard = require('./ClozeCard.js');

var firstPresident = new BasicCard (
    "Who was the first president of the United States?",
    "George Washington"
);

// "Who was the first president of the United States?"
// console.log(firstPresident.front);

// "George Washington"
// console.log(firstPresident.back);

var firstPresidentCloze = new ClozeCard (
    "George Washington was the first president of the United States.",
    "George Washington"
);

// "... was the first president of the United States."
// console.log(firstPresidentCloze.partial);

// "George Washington was the first president of the United States."
// console.log(firstPresidentCloze.fullText);

// Should throw and/or log an error be