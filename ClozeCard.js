// Create a constructor function for creating Cloze-deletion flashcards
var ClozeCard = function(text, cloze) {
    // NEED TO CODE!!!!! This should throw and/or log an error if no cloze is entered, or vice versa?
    this.type = "cloze";
    this.full = cloze + " " + text;
    this.cloze = cloze;
    this.partial = "... " + text;
    this.printFull = function() {
        console.log(this.full);
    };
    this.printCloze = function() {
        console.log(this.cloze);
    };
    this.printPartial = function() {
        console.log(this.partial);
    };
};




module.exports = ClozeCard;